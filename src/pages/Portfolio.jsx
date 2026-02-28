import { useEffect, useState } from 'react';
import { usePage } from '../context/PageContext';

export default function Portfolio() {
  const { showPage } = usePage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const initFadeUp = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));
    };

    setTimeout(() => initFadeUp(), 100);
  }, []);

  const portfolioItems = [
    { id: 1, category: 'uiux', height: 'tall', gradient: 'pc-gradient-1', emoji: '🏪', cat: 'E-Commerce · UI/UX', title: 'TokoBaju.id Redesign', year: '2024' },
    { id: 2, category: 'mobile', height: 'short', gradient: 'pc-gradient-2', emoji: '📱', cat: 'Mobile · Fintech', title: 'FinApp Mobile Banking', year: '2024' },
    { id: 3, category: 'web', height: 'mid', gradient: 'pc-gradient-3', emoji: '🎵', cat: 'Web App · Entertainment', title: 'MusicStream Web', year: '2024' },
    { id: 4, category: 'web', height: 'short', gradient: 'pc-gradient-4', emoji: '🌿', cat: 'Landing Page · F&B', title: 'GreenFood Campaign', year: '2023' },
    { id: 5, category: 'mobile', height: 'mid', gradient: 'pc-gradient-5', emoji: '💊', cat: 'Mobile · Healthcare', title: 'MedTrack App', year: '2024' },
    { id: 6, category: 'web', height: 'tall', gradient: 'pc-gradient-6', emoji: '🏨', cat: 'Web · Hospitality', title: 'LuxStay Hotel Website', year: '2023' },
    { id: 7, category: 'branding', height: 'short', gradient: '', emoji: '📚', cat: 'Branding · Education', title: 'LearnHub Rebrand', year: '2023', customBg: 'linear-gradient(135deg,#FEF9C3,#FDE047)' },
    { id: 8, category: 'web', height: 'mid', gradient: '', emoji: '🚗', cat: 'Web Dev · Automotive', title: 'AutoRent Platform', year: '2023', customBg: 'linear-gradient(135deg,#FEE2E2,#FCA5A5)' },
    { id: 9, category: 'mobile', height: 'short', gradient: '', emoji: '🧘', cat: 'Mobile · Wellness', title: 'ZenMind App', year: '2024', customBg: 'linear-gradient(135deg,#ECFDF5,#6EE7B7)' }
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => {
        if (activeFilter === 'uiux') return item.category === 'uiux';
        if (activeFilter === 'branding') return item.category === 'branding';
        if (activeFilter === 'web') return item.category === 'web';
        if (activeFilter === 'mobile') return item.category === 'mobile';
        return true;
      });

  return (
    <div className="page" id="page-portfolio">
      <div className="page-hero">
        <div className="container">
          <div className="label-tag">Portfolio</div>
          <h2 className="section-title">
            Karya <span className="hl">Terbaik</span> Kami
          </h2>
          <p className="section-desc">
            Setiap proyek adalah cerita unik. Berikut sebagian karya yang pernah kami wujudkan bersama klien.
          </p>
        </div>
      </div>

      <section className="section-py">
        <div className="container">
          <div className="portfolio-filter-header">
            <div className="products-filter" style={{ margin: 0 }}>
              {['all', 'UI/UX', 'Branding', 'Web Dev', 'Mobile'].map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn${activeFilter === filter.toLowerCase() || (filter === 'all' && activeFilter === 'all') ? ' active' : ''}`}
                  onClick={() => setActiveFilter(filter.toLowerCase())}
                >
                  {filter}
                </button>
              ))}
            </div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Menampilkan <strong>12</strong> proyek
            </div>
          </div>

          <div className="portfolio-masonry">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="portfolio-item"
                onClick={() => openModal(item)}
              >
                <div className="portfolio-item-inner">
                  <div
                    className={`pi-img ${item.height}${item.gradient ? ` ${item.gradient}` : ''}`}
                    style={item.customBg ? { background: item.customBg } : {}}
                  >
                    {item.emoji}
                  </div>
                  <div className="pi-overlay">
                    <div className="pi-info">
                      <div className="pi-cat">{item.cat}</div>
                      <div className="pi-title">{item.title}</div>
                      <div className="pi-year">{item.year}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-outline">Muat Lebih Banyak →</button>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>Klien</div>
            <h2 className="section-title">
              Dipercaya oleh <span className="hl">Brand Terbaik</span>
            </h2>
          </div>
          <div className="tools-grid">
            {[
              { icon: '🏢', name: 'UrbanWear' },
              { icon: '💰', name: 'FinCo' },
              { icon: '🎵', name: 'SonicPlay' },
              { icon: '🌿', name: 'GreenFarm' },
              { icon: '🏨', name: 'LuxStay' },
              { icon: '📚', name: 'EduHub' },
              { icon: '🚗', name: 'AutoRent' },
              { icon: '🧘', name: 'ZenCo' }
            ].map((client) => (
              <div className="tool-item" key={client.name} style={{ opacity: 0.6 }}>
                <div className="tool-logo">{client.icon}</div>
                <div className="tool-name">{client.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-title">
              Punya Proyek<br />
              yang Ingin Kamu Wujudkan?
            </h2>
            <p className="cta-desc">
              Ceritakan ide kamu dan mari kita buat sesuatu yang luar biasa bersama.
            </p>
            <div className="cta-actions">
              <button className="btn-cta-white" onClick={() => showPage('contact')}>
                Diskusikan Proyek →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div className={`modal-overlay${modalOpen ? ' open' : ''}`} onClick={closeModal}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal}>
            ✕
          </button>
          {selectedItem && (
            <>
              <div
                className="modal-img"
                style={
                  selectedItem.customBg
                    ? { background: selectedItem.customBg }
                    : selectedItem.gradient
                    ? {}
                    : {}
                }
              >
                <div className={selectedItem.gradient || ''}>{selectedItem.emoji}</div>
              </div>
              <div className="modal-body">
                <div className="pi-cat">{selectedItem.cat}</div>
                <h3 className="section-title" style={{ fontSize: '1.8rem', marginTop: '0.5rem' }}>
                  {selectedItem.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: 1.7 }}>
                  Proyek ini merupakan kolaborasi luar biasa dengan klien kami. Kami menciptakan solusi digital yang tidak hanya estetis tetapi juga fungsional dan berorientasi pada hasil bisnis.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-orange">{selectedItem.year}</span>
                  <span className="badge badge-dark">{selectedItem.cat.split('·')[0].trim()}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
