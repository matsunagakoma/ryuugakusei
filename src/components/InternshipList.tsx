import { useState } from 'react';
import { MapPin, Clock, DollarSign, ExternalLink, Filter } from 'lucide-react';

// Mock data
const JOB_LISTINGS = [
  {
    id: 1,
    title: 'グローバルマーケティングアシスタント',
    company: '株式会社グローバルテック',
    location: '東京・渋谷 (一部リモート可)',
    industry: 'IT / Webサービス',
    duration: '3ヶ月〜6ヶ月',
    salary: '時給 1,500円〜',
    tags: ['英語必須', 'N2以上', 'マーケティング'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: '#3b82f6'
  },
  {
    id: 2,
    title: '海外進出リサーチ・翻訳業務',
    company: 'NextInnovation株式会社',
    location: '東京・新宿',
    industry: 'コンサルティング',
    duration: '1ヶ月〜3ヶ月',
    salary: '時給 1,300円〜',
    tags: ['中国語', 'N1必須', '週2日〜OK'],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: '#10b981'
  },
  {
    id: 3,
    title: 'ソフトウェアエンジニアインターン',
    company: 'AIフロンティアズ',
    location: 'フルリモート',
    industry: 'AI / 機械学習',
    duration: '6ヶ月以上',
    salary: '時給 2,000円〜',
    tags: ['Python', '英語のみ可', '長期'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: '#8b5cf6'
  },
  {
    id: 4,
    title: 'インバウンド観光企画・サポート',
    company: 'Japan Travel Solutions',
    location: '京都・烏丸',
    industry: '旅行・観光',
    duration: '単発〜1ヶ月',
    salary: '日給 12,000円',
    tags: ['多言語歓迎', 'N3以上', '週末のみ可'],
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    color: '#f59e0b'
  }
];

const InternshipList: React.FC = () => {
  const [activeTab, setActiveTab] = useState('すべて');

  const tabs = ['すべて', 'IT・エンジニア', 'マーケティング', '翻訳・サポート'];

  return (
    <section id="internships" className="section" style={{ background: 'var(--surface-light)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              新着の<span className="text-gradient">インターンシップ</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem' }}>
              あなたのスキルを活かせるポジションを見つけましょう。
            </p>
          </div>
          
          <button className="btn btn-outline" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', padding: '0.5rem 1rem' }}>
            <Filter size={18} />
            詳細な条件で絞り込む
          </button>
        </div>

        {/* Filters/Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '0.5rem 1.5rem',
                borderRadius: '9999px',
                border: 'none',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s',
                background: activeTab === tab ? 'var(--primary-deep)' : 'var(--white)',
                color: activeTab === tab ? 'var(--white)' : 'var(--text-muted)',
                boxShadow: activeTab === tab ? 'var(--shadow-md)' : 'var(--shadow-sm)'
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Job Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {JOB_LISTINGS.map((job) => (
            <div key={job.id} className="card-hover glass-panel" style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              background: 'var(--white)',
              padding: 0
            }}>
              {/* Image Header */}
              <div style={{
                height: '160px',
                width: '100%',
                backgroundImage: `url(${job.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '1rem', left: '1rem',
                  background: 'rgba(255,255,255,0.9)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: job.color
                }}>
                  {job.industry}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--primary-blue)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {job.company}
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.4, color: 'var(--text-main)' }}>
                  {job.title}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <MapPin size={16} /> {job.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <Clock size={16} /> {job.duration}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    <DollarSign size={16} /> {job.salary}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto', marginBottom: '1.5rem' }}>
                  {job.tags.map((tag, i) => (
                    <span key={i} style={{
                      padding: '0.25rem 0.5rem',
                      background: 'var(--surface-light)',
                      borderRadius: '0.25rem',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer / Action */}
                <div style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--surface-light)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2日前に更新</span>
                  <a href="#" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    color: 'var(--primary-blue)', 
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    transition: 'color 0.2s'
                  }}>
                    詳細を見る <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button className="btn btn-outline" style={{ padding: '0.75rem 2rem' }}>
             もっと見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default InternshipList;
