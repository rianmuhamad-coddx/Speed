import { useEffect } from 'react';
import { usePage } from '../context/PageContext';

export default function Blog() {
  const { showPage } = usePage();

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

  const blogPosts = [
    {
      gradient: 'pc-gradient-1',
      emoji: '📱',
      category: 'Mobile Design',
      title: 'Panduan Lengkap Membuat Onboarding yang Tidak Mengganggu',
      excerpt: 'Onboarding yang buruk adalah alasan utama user churn. Pelajari cara membuat first impression yang sempurna.',
      author: 'Fiona Sari',
      authorInitials: 'FS',
      date: '12 Jan 2025'
    },
    {
      gradient: 'pc-gradient-2',
      emoji: '💻',
      category: 'Web Development',
      title: 'CSS Container Queries: Masa Depan Responsive Design',
      excerpt: 'Container Queries akhirnya stabil di semua browser utama. Ini cara menggunakannya secara efektif di proyek nyata.',
      author: 'Rizky Pratama',
      authorInitials: 'RP',
      date: '8 Jan 2025'
    },
    {
      gradient: 'pc-gradient-3',
      emoji: '🎯',
      category: 'Branding',
      title: 'Cara Membangun Brand Identity yang Konsisten di Era Digital',
      excerpt: 'Konsistensi visual adalah kunci kepercayaan audiens. Berikut framework yang kami gunakan untuk klien-klien kami.',
      author: 'Nadia Putri',
      authorInitials: 'NP',
      date: '5 Jan 2025'
    },
    {
      gradient: 'pc-gradient-4',
      emoji: '🚀',
      category: 'Bisnis',
      title: 'Mengapa Landing Page yang Bagus Bisa Tingkatkan Konversi 300%',
      excerpt: 'Studi kasus dari 5 klien kami yang berhasil meningkatkan konversi secara signifikan setelah redesign landing page.',
      author: 'Arkan Kurnia',
      authorInitials: 'AK',
      date: '29 Des 2024'
    },
    {
      gradient: 'pc-gradient-5',
      emoji: '🎨',
      category: 'UI/UX',
      title: 'Figma Variables: Cara Membangun Design System yang Scalable',
      excerpt: 'Figma Variables mengubah cara kita membangun design system. Tutorial lengkap dari zero sampai production-ready.',
      author: 'Fiona Sari',
      authorInitials: 'FS',
      date: '22 Des 2024'
    },
    {
      gradient: 'pc-gradient-6',
      emoji: '📊',
      category: 'Tools',
      title: 'Tailwind CSS vs CSS-in-JS: Mana yang Lebih Baik di 2025?',
      excerpt: 'Perbandingan mendalam antara dua pendekatan styling populer ini untuk membantu kamu memilih yang tepat.',
      author: 'Rizky Pratama',
      authorInitials: 'RP',
      date: '18 Des 2024'
    }
  ];

  return (
    <div className="page" id="page-blog">
      <div className="page-hero">
        <div className="container">
          <div className="label-tag">Blog & Artikel</div>
          <h2 className="section-title">
            Insight & <span className="hl">Inspirasi</span>
          </h2>
          <p className="section-desc">
            Kumpulan artikel, tutorial, dan tips seputar desain UI/UX, pengembangan web, dan dunia digital.
          </p>
        </div>
      </div>

      <section className="section-py">
        <div className="container">
          {/* FEATURED BLOG */}
          <div className="blog-featured fade-up">
            <div>
              <div className="bf-label">📌 Artikel Unggulan</div>
              <h3 className="bf-title">
                10 Tren UI/UX 2025 yang Wajib Kamu Ketahui sebagai Designer
              </h3>
              <p className="bf-excerpt">
                Dunia desain terus berevolusi. Dari glassmorphism yang kian matang hingga AI-assisted design workflow — inilah yang perlu kamu kuasai tahun ini untuk tetap relevan.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <div className="bc-footer" style={{ border: 'none', padding: 0, margin: 0 }}>
                  <div className="bc-av">AK</div>
                  <div className="bc-meta">
                    <strong>Arkan Kurnia</strong> · 15 Januari 2025
                  </div>
                </div>
                <span className="badge badge-orange">UI/UX</span>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>8 menit baca</span>
              </div>
              <button className="btn btn-orange" style={{ marginTop: '1.5rem' }}>
                Baca Selengkapnya →
              </button>
            </div>
            <div className="bf-img">🎨</div>
          </div>

          {/* BLOG GRID */}
          <div className="blog-grid">
            {blogPosts.map((post, index) => (
              <div
                key={post.title}
                className={`blog-card fade-up${index > 0 ? ` d${index % 3}` : ''}`}
              >
                <div className={`bc-img ${post.gradient}`}>{post.emoji}</div>
                <div className="bc-body">
                  <div className="bc-cat">{post.category}</div>
                  <div className="bc-title">{post.title}</div>
                  <p className="bc-excerpt">{post.excerpt}</p>
                  <div className="bc-footer">
                    <div className="bc-av">{post.authorInitials}</div>
                    <div className="bc-meta">
                      <strong>{post.author}</strong> · {post.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn btn-outline">Lihat Semua Artikel →</button>
          </div>
        </div>
      </section>

      <section className="section-py" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="newsletter-section">
            <h3 className="nl-title">
              Jangan Ketinggalan<br />
              Artikel Terbaru Kami
            </h3>
            <p className="nl-desc">
              Dapatkan artikel, tutorial, dan tips desain terbaik langsung di inbox kamu. Gratis selamanya.
            </p>
            <div className="nl-form">
              <input className="nl-input" type="email" placeholder="email@kamu.com" />
              <button className="btn btn-orange">Subscribe →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
