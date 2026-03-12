import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe2, Menu, X, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem('token');
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-panel shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo */}
        <div 
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <div style={{ 
            background: 'var(--gradient-main)', 
            padding: '0.5rem', 
            borderRadius: '0.5rem', 
            color: 'white' 
          }}>
            <Globe2 size={24} />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0, letterSpacing: '-0.5px' }}>
            Global<span className="text-gradient-accent">Connect</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {isHomePage && (
            <>
              <a href="#features" className="nav-link">特徴</a>
              <a href="#internships" className="nav-link">インターンを探す</a>
            </>
          )}
          
          {isAuthenticated ? (
             <button onClick={() => navigate('/mypage')} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
               <User size={18} /> マイページ
             </button>
          ) : (
            <>
              <button onClick={() => navigate('/login')} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>ログイン</button>
              <button onClick={() => navigate('/login')} className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>無料登録</button>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'none' }}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Internal Styles for Header specifically to keep index.css clean from too many specifics */}
      <style>{`
        .nav-link {
          font-weight: 500;
          color: var(--text-main);
          transition: color var(--transition-fast);
          position: relative;
        }
        .nav-link:hover {
          color: var(--primary-blue);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--gradient-main);
          transition: width var(--transition-normal);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
