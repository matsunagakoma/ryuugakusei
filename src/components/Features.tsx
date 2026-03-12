import { Target, Users, BookOpen, Building2, CheckCircle2 } from 'lucide-react';

const Features: React.FC = () => {
  const studentBenefits = [
    {
      icon: <Target size={32} className="text-gradient" />,
      title: '語学力を活かせる環境',
      description: '日本語と母国語、さらには英語など、あなたの言語スキルを求めている企業とマッチングします。'
    },
    {
      icon: <Users size={32} className="text-gradient" />,
      title: '留学生専門のサポート',
      description: 'ビザの相談から、日本独自の就活マナー、履歴書の書き方まで、専門スタッフが手厚くサポート。'
    },
    {
      icon: <BookOpen size={32} className="text-gradient" />,
      title: 'スキルアップ研修',
      description: 'インターン開始前に、日本のビジネス環境で活躍するための短期間の無料研修を提供します。'
    }
  ];

  return (
    <section id="features" className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="animate-fade-in-up">
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            なぜ <span className="text-gradient">GlobalConnect</span> なのか
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>
            留学生特有の強みを最大限に引き出し、日本企業との橋渡しをいたします。
          </p>
        </div>

        {/* Value Props Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '5rem'
        }}>
          {studentBenefits.map((benefit, index) => (
            <div key={index} className={`card-hover animate-fade-in-up`} style={{
              background: 'var(--surface-light)',
              padding: '2.5rem 2rem',
              borderRadius: '1.5rem',
              textAlign: 'center',
              animationDelay: `${index * 100}ms`
            }}>
              <div style={{
                background: 'rgba(23,86,169,0.1)',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                {benefit.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>{benefit.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Company Value Prop Section */}
        <div className="glass-panel" style={{
          background: 'var(--gradient-main)',
          padding: '4rem',
          borderRadius: '2rem',
          color: 'var(--white)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ color: 'var(--white)', fontSize: '2rem', marginBottom: '1.5rem' }}>
              多様性を取り入れ、<br/>企業の成長を加速させる
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.125rem' }}>
              優秀な海外人材のインターン受け入れは、社内のグローバル化や新しい視点の獲得に直結します。
            </p>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {['即戦力となる高い語学力・専門性', '社内公用語化やダイバーシティ推進の第一歩', '海外進出時の現地事情の知見獲得'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 color="var(--accent-gold)" size={24} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <button className="btn btn-accent" style={{ marginTop: '2.5rem', border: 'none', background: 'var(--accent-gold)', color: 'var(--primary-deep)' }}>
              企業向け資料をダウンロード
            </button>
          </div>
          
          <div className="features-visual" style={{ 
            position: 'relative', 
            zIndex: 1, 
            display: 'flex',
            justifyContent: 'center'
          }}>
            <div style={{ 
              width: '100%', 
              aspectRatio: '1', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
               <Building2 size={120} color="var(--white)" opacity={0.8} />
            </div>
            {/* Decorative circles */}
            <div style={{ position: 'absolute', width: '20px', height: '20px', background: 'var(--accent-gold)', borderRadius: '50%', top: '10%', right: '20%' }}></div>
            <div style={{ position: 'absolute', width: '12px', height: '12px', background: 'rgba(255,255,255,0.5)', borderRadius: '50%', bottom: '20%', left: '10%' }}></div>
          </div>
          
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            top: 0, right: 0, bottom: 0, left: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}></div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .glass-panel {
            grid-template-columns: 1fr !important;
            padding: 2.5rem !important;
          }
          .features-visual {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Features;
