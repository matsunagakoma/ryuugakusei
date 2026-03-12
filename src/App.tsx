import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import InternshipList from './components/InternshipList';
import Footer from './components/Footer';
import Login from './pages/Login';
import MyPage from './pages/MyPage';

const LandingPage = () => (
  <>
    <main>
      <Hero />
      <Features />
      <InternshipList />
      
      {/* Call to Action Section */}
      <section className="section" style={{ 
        background: 'var(--gradient-main)', 
        textAlign: 'center',
        color: 'var(--white)'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--white)' }}>
            日本でのキャリアは、ここから始まります
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            登録は無料。1分で完了します。あなたの可能性を広げるインターンシップを見つけましょう。
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/login" className="btn btn-accent" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
              無料で登録する
            </a>
            <a href="/login" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.25rem', borderColor: 'var(--white)', color: 'var(--white)', background: 'transparent' }}>
              ログイン
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<><Header /><LandingPage /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
