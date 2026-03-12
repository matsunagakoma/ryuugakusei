import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = 'super-secret-key-for-global-connect-demo'; // In production, use process.env

app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      userType TEXT DEFAULT 'student',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
  }
});

// Helper for JWT
const generateToken = (userId: number) => {
  return jsonwebtoken.sign({ id: userId }, JWT_SECRET, { expiresIn: '24h' });
};

// Middleware to verify token
const authenticateToken = (req: any, res: any, next: any) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'トークンがありません' });

  jsonwebtoken.verify(token, JWT_SECRET, (err: any, user: any) => {
    if (err) return res.status(403).json({ error: '無効なトークンです' });
    req.user = user;
    next();
  });
};

// --- API Routes ---

// Register
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: '全てのフィールドを入力してください' });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    db.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword],
      function (err) {
        if (err) {
          console.error('Database insertion error:', err);
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(400).json({ error: 'このメールアドレスは既に登録されています' });
          }
          return res.status(500).json({ error: 'データベースエラー' });
        }
        
        try {
          const token = generateToken(this.lastID);
          return res.status(201).json({ 
            message: '登録成功', 
            token,
            user: { id: this.lastID, name, email }
          });
        } catch (tokenErr) {
           console.error('Token generation error:', tokenErr);
           return res.status(500).json({ error: 'トークン生成エラー' });
        }
      }
    );
  } catch (error) {
    console.error('Registration server error:', error);
    return res.status(500).json({ error: 'サーバーエラー' });
  }
});

// Login
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'メールアドレスとパスワードを入力してください' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user: any) => {
    if (err) return res.status(500).json({ error: 'データベースエラー' });
    if (!user) return res.status(401).json({ error: 'メールアドレスまたはパスワードが間違っています' });

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(401).json({ error: 'メールアドレスまたはパスワードが間違っています' });

    const token = generateToken(user.id);
    res.json({ 
      message: 'ログイン成功', 
      token,
      user: { id: user.id, name: user.name, email: user.email, userType: user.userType }
    });
  });
});

// Get Current User (My Page Data)
app.get('/api/user/me', authenticateToken, (req: any, res) => {
  db.get('SELECT id, name, email, userType, created_at FROM users WHERE id = ?', [req.user.id], (err, user) => {
    if (err) return res.status(500).json({ error: 'データベースエラー' });
    if (!user) return res.status(404).json({ error: 'ユーザーが見つかりません' });
    
    res.json({ user });
  });
});

// Mock Data for Dashboard
app.get('/api/dashboard/stats', authenticateToken, (req: any, res) => {
  // Return some mock data for the user's dashboard
  res.json({
    applications: 3,
    savedJobs: 12,
    messages: 2,
    profileCompletion: 80
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
