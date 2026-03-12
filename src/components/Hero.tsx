import { ArrowRight, Sparkles, Briefcase, GraduationCap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="section" style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '8rem' // Account for header
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(23,86,169,0.1) 0%, rgba(255,255,255,0) 70%)',
        zIndex: -1
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246,174,45,0.08) 0%, rgba(255,255,255,0) 70%)',
        zIndex: -1
      }}></div>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Content Side */}
        <div className="animate-fade-in-up">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'rgba(23,86,169,0.1)',
            borderRadius: '2rem',
            color: 'var(--primary-blue)',
            fontWeight: 600,
            fontSize: '0.875rem',
            marginBottom: '1.5rem'
          }}>
            <Sparkles size={16} />
            留学生向け・国内最大級のインターンシップ
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem',
            letterSpacing: '-1px'
          }}>
            あなたの<span className="text-gradient">強み</span>を<br />
            日本の<span className="text-gradient">ビジネス</span>へ
          </h1>
          
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            marginBottom: '2.5rem',
            lineHeight: 1.8,
            maxWidth: '540px'
          }}>
            語学力と異文化理解。あなたが持つ特別な価値を求めている日本企業がここにあります。<br/>グローバルな視点で、新しいキャリアの一歩を踏み出しましょう。
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              インターンを探す <ArrowRight size={20} />
            </button>
            <button className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
              企業の方はこちら
            </button>
          </div>

          <div style={{ 
            marginTop: '3rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-deep)' }}>500+</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>提携企業数</span>
            </div>
            <div style={{ width: '1px', height: '40px', background: 'rgba(0,0,0,0.1)' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-deep)' }}>2,000+</span>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>マッチング実績</span>
            </div>
          </div>
        </div>

        {/* Image/Visual Side */}
        <div className="hero-visual animate-fade-in-up delay-200" style={{ position: 'relative' }}>
          <div style={{
            position: 'relative',
            borderRadius: '2rem',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            aspectRatio: '4/5',
            background: 'var(--gradient-main)'
          }}>
            {/* Using a solid nice gradient + icons instead of a placeholder image for better aestehtics without external assets */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.8,
              mixBlendMode: 'overlay'
            }}></div>
            
            {/* Floating glass cards */}
            <div className="glass-panel" style={{
              position: 'absolute',
              bottom: '2rem',
              left: '-2rem',
              padding: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              animation: 'float 6s ease-in-out infinite'
            }}>
              <div style={{ background: '#ecfdf5', padding: '0.75rem', borderRadius: '50%' }}>
                <Briefcase color="#059669" size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: 'var(--primary-deep)' }}>IT企業 / グローバル</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>採用直結インターン</div>
              </div>
            </div>

            <div className="glass-panel" style={{
              position: 'absolute',
              top: '4rem',
              right: '-2rem',
              padding: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              animation: 'float 5s ease-in-out infinite alternate-reverse'
            }}>
              <div style={{ background: '#eff6ff', padding: '0.75rem', borderRadius: '50%' }}>
                <GraduationCap color="#2563eb" size={24} />
              </div>
              <div style={{ fontWeight: 700, color: 'var(--primary-deep)' }}>
                N3以上歓迎
              </div>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        
        @media (max-width: 992px) {
          .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-visual { display: none; }
          .container > div:first-child { align-items: center; display: flex; flex-direction: column; }
          h1 { font-size: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
