import { Globe2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer style={{ background: 'var(--primary-deep)', color: 'var(--white)', paddingTop: '5rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(250px, 1.5fr) 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
              <div style={{ 
                background: 'rgba(255,255,255,0.1)', 
                padding: '0.5rem', 
                borderRadius: '0.5rem' 
              }}>
                <Globe2 size={24} color="var(--accent-gold)" />
              </div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: 'var(--white)' }}>
                Global<span style={{ color: 'var(--accent-gold)' }}>Connect</span>
              </h1>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              留学生と日本企業をつなぐ、新しいキャリアの架け橋。多様な才能が輝く社会の実現を目指します。
            </p>
          </div>

          {/* Links 1 */}
          <div>
            <h4 style={{ color: 'var(--white)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '1rem' }}>留学生の方へ</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['インターンを探す', '利用ガイド', '就活ノウハウ', 'イベント情報', 'よくある質問'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s' }} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 style={{ color: 'var(--white)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '1rem' }}>企業の方へ</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['サービスについて', '導入事例', '料金プラン', '資料ダウンロード', 'お問い合わせ'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s' }} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 style={{ color: 'var(--white)', fontWeight: 600, marginBottom: '1.25rem', fontSize: '1rem' }}>企業情報</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {['運営会社', '利用規約', 'プライバシーポリシー', '特定商取引法に基づく表記'].map((item, i) => (
                <li key={i}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', transition: 'color 0.2s' }} className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} GlobalConnect Inc. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {/* Social Icons Placeholder */}
            {['Twitter', 'LinkedIn', 'Facebook'].map((social, i) => (
              <a key={i} href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', transition: 'color 0.2s' }} className="footer-link">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .footer-link:hover { color: var(--accent-gold) !important; }
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
