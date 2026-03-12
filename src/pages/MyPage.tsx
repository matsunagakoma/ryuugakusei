import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogOut, Settings, Briefcase, Bookmark, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyPage: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        // Fetch user data
        const userRes = await fetch('/api/user/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (!userRes.ok) throw new Error('Auth failed');
        const userData = await userRes.json();
        setUser(userData.user);

        // Fetch dashboard stats
        const statsRes = await fetch('/api/dashboard/stats', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        
        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }
      } catch (err) {
        // If token is invalid or expired
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  if (loading) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>読み込み中...</div>;
  }

  return (
    <div className="app-container" style={{ background: 'var(--surface-light)' }}>
      <Header />
      
      <main style={{ paddingTop: '8rem', paddingBottom: '5rem', minHeight: '80vh' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '2rem', alignItems: 'start' }}>
            
            {/* Sidebar Profile */}
            <div className="glass-panel" style={{ padding: '2rem', background: 'var(--white)', position: 'sticky', top: '6rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '2rem' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'var(--gradient-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '1rem', fontSize: '2.5rem', fontWeight: 700 }}>
                  {user?.name.charAt(0)}
                </div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>{user?.name}</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{user?.email}</p>
                
                <span style={{ marginTop: '1rem', background: 'rgba(23,86,169,0.1)', color: 'var(--primary-blue)', padding: '0.25rem 0.75rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 600 }}>
                  留学生アカウント
                </span>
              </div>

              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '0.5rem', background: 'rgba(23,86,169,0.05)', color: 'var(--primary-blue)', fontWeight: 600 }}>
                  <User size={18} /> プロフィール管理
                </a>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: 'var(--text-main)', transition: 'background 0.2s' }}>
                  <Settings size={18} /> アカウント設定
                </a>
                <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '0.5rem', color: '#ef4444', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', width: '100%', marginTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                  <LogOut size={18} /> ログアウト
                </button>
              </nav>
            </div>

            {/* Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-deep)' }}>
                ダッシュボード
              </h1>

              {/* Stats Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--white)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#eff6ff', padding: '1rem', borderRadius: '0.75rem', color: '#3b82f6' }}><Briefcase size={24} /></div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>{stats?.applications || 0}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>応募済みインターン</div>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--white)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#fef3c7', padding: '1rem', borderRadius: '0.75rem', color: '#d97706' }}><Bookmark size={24} /></div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>{stats?.savedJobs || 0}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>保存した求人</div>
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.5rem', background: 'var(--white)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ background: '#ecfdf5', padding: '1rem', borderRadius: '0.75rem', color: '#10b981' }}><MessageSquare size={24} /></div>
                  <div>
                    <div style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}>{stats?.messages || 0}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>メッセージ</div>
                  </div>
                </div>
              </div>

              {/* Progress Card */}
              <div className="glass-panel" style={{ padding: '2rem', background: 'var(--gradient-main)', color: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>プロフィール充実度</h3>
                  <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>{stats?.profileCompletion || 0}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.2)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '1.5rem' }}>
                  <div style={{ width: `${stats?.profileCompletion || 0}%`, height: '100%', background: 'var(--accent-gold)', borderRadius: '9999px' }}></div>
                </div>
                <p style={{ margin: 0, opacity: 0.9, fontSize: '0.875rem' }}>
                  企業からのスカウトを受けやすくするために、職歴・自己PRを追加しましょう。
                </p>
                <button className="btn btn-accent" style={{ marginTop: '1.5rem', padding: '0.5rem 1.5rem', fontSize: '0.875rem' }}>
                  プロフィールを編集
                </button>
              </div>

              {/* Recent Activity Mock */}
              <div className="glass-panel" style={{ padding: '2rem', background: 'var(--white)' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>最近の応募</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                     <div>
                       <div style={{ fontWeight: 600 }}>グローバルマーケティングアシスタント</div>
                       <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>株式会社グローバルテック</div>
                     </div>
                     <span style={{ background: '#ecfdf5', color: '#10b981', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', fontSize: '0.75rem', fontWeight: 600 }}>選考中</span>
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyPage;
