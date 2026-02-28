import { useEffect } from 'react';
import { usePage } from '../context/PageContext';

export default function Products() {
  const { showPage, productFilter, filterProducts } = usePage();

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

  const products = [
    {
      id: 1,
      category: 'html',
      gradient: 'pc-gradient-1',
      emoji: '🛍️',
      tags: [{ text: '🔥 Terlaris', type: 'orange' }, { text: 'HTML/CSS', type: 'dark' }],
      title: 'E-Commerce Pro Kit',
      desc: '30+ halaman, dark mode, multi-currency, integrasi keranjang & checkout lengkap.',
      downloads: '1.2k',
      rating: '4.9',
      price: 'Rp 299rb',
      oldPrice: '499rb'
    },
    {
      id: 2,
      category: 'figma',
      gradient: 'pc-gradient-2',
      emoji: '💼',
      tags: [{ text: '✨ Baru', type: 'orange' }, { text: 'Figma', type: 'dark' }],
      title: 'Agency Portfolio Kit',
      desc: '15+ komponen premium, animasi halus, auto layout, dan fully responsive layout.',
      downloads: '860',
      rating: '4.8',
      price: 'Rp 199rb',
      oldPrice: '349rb'
    },
    {
      id: 3,
      category: 'wordpress',
      gradient: 'pc-gradient-3',
      emoji: '📋',
      tags: [{ text: '⭐ Populer', type: 'orange' }, { text: 'WordPress', type: 'dark' }],
      title: 'Blog & Magazine Theme',
      desc: 'Magazine layout, custom widgets, SEO-ready, dan kompatibel WooCommerce.',
      downloads: '970',
      rating: '4.7',
      price: 'Rp 249rb',
      oldPrice: '399rb'
    },
    {
      id: 4,
      category: 'react',
      gradient: 'pc-gradient-4',
      emoji: '🌿',
      tags: [{ text: '🆕 Baru', type: 'green' }, { text: 'React', type: 'dark' }],
      title: 'SaaS Landing Page',
      desc: 'Template landing page SaaS modern dengan animasi scroll, pricing table, dan testimonial section.',
      downloads: '540',
      rating: '4.9',
      price: 'Rp 179rb',
      oldPrice: '299rb'
    },
    {
      id: 5,
      category: 'figma',
      gradient: 'pc-gradient-5',
      emoji: '🎵',
      tags: [{ text: '💜 Premium', type: 'orange' }, { text: 'Figma', type: 'dark' }],
      title: 'Mobile App UI Kit',
      desc: '200+ komponen mobile, 50+ screen template, iOS & Android guidelines, design token siap pakai.',
      downloads: '1.4k',
      rating: '5.0',
      price: 'Rp 399rb',
      oldPrice: '649rb'
    },
    {
      id: 6,
      category: 'html',
      gradient: 'pc-gradient-6',
      emoji: '🏪',
      tags: [{ text: '🎯 Hot', type: 'orange' }, { text: 'HTML/CSS', type: 'dark' }],
      title: 'Restaurant Website Kit',
      desc: 'Template restoran premium dengan menu dinamis, reservasi online, galeri foto, dan Google Maps integration.',
      downloads: '720',
      rating: '4.8',
      price: 'Rp 219rb',
      oldPrice: '369rb'
    }
  ];

  const filteredProducts = productFilter === 'all'
    ? products
    : products.filter((p) => p.category === productFilter);

  return (
    <div className="page" id="page-products">
      <div className="page-hero">
        <div className="container">
          <div className="label-tag">Produk Digital</div>
          <h2 className="section-title">
            Template & Kit <span className="hl">Premium</span>
          </h2>
          <p className="section-desc">
            Koleksi produk digital berkualitas tinggi untuk mempercepat proyek kamu dengan harga yang terjangkau.
          </p>
        </div>
      </div>

      <section className="section-py">
        <div className="container">
          {/* FEATURED */}
          <div className="featured-product fade-up">
            <div>
              <div className="fp-label">⭐ Produk Unggulan</div>
              <h3 className="fp-title">
                Full-Stack SaaS<br />
                Dashboard Kit
              </h3>
              <p className="fp-desc">
                Kit lengkap untuk membangun produk SaaS profesional. Termasuk 80+ komponen, dark/light mode, auth flow, dan dokumentasi lengkap.
              </p>
              <div className="fp-features">
                <span className="badge badge-orange">React + TypeScript</span>
                <span className="badge badge-dark">Tailwind CSS</span>
                <span className="badge badge-green">Dark Mode</span>
                <span className="badge badge-dark">80+ Components</span>
              </div>
              <div className="fp-price">
                <div className="now">Rp 599.000</div>
                <div className="was">Rp 899.000</div>
              </div>
              <div className="fp-actions">
                <button className="btn btn-orange">Beli Sekarang →</button>
                <button
                  className="btn btn-outline"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#888' }}
                >
                  Preview Demo
                </button>
              </div>
            </div>
            <div className="fp-visual">🖥️</div>
          </div>

          {/* FILTER */}
          <div className="products-filter">
            <button
              className={`filter-btn${productFilter === 'all' ? ' active' : ''}`}
              onClick={() => filterProducts('all')}
            >
              Semua
            </button>
            <button
              className={`filter-btn${productFilter === 'html' ? ' active' : ''}`}
              onClick={() => filterProducts('html')}
            >
              HTML/CSS
            </button>
            <button
              className={`filter-btn${productFilter === 'figma' ? ' active' : ''}`}
              onClick={() => filterProducts('figma')}
            >
              Figma
            </button>
            <button
              className={`filter-btn${productFilter === 'wordpress' ? ' active' : ''}`}
              onClick={() => filterProducts('wordpress')}
            >
              WordPress
            </button>
            <button
              className={`filter-btn${productFilter === 'react' ? ' active' : ''}`}
              onClick={() => filterProducts('react')}
            >
              React
            </button>
          </div>

          {/* PRODUCTS GRID */}
          <div className="products-big-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`product-card-v2 fade-up${index > 0 ? ` d${index % 3}` : ''}`}
                data-cat={product.category}
              >
                <div className={`pc-img ${product.gradient}`}>
                  {product.emoji}
                  <div className="pc-img-overlay">
                    <span className="pc-preview">Preview →</span>
                  </div>
                </div>
                <div className="pc-body">
                  <div className="pc-tags">
                    {product.tags.map((tag) => (
                      <span key={tag.text} className={`badge badge-${tag.type}`}>
                        {tag.text}
                      </span>
                    ))}
                  </div>
                  <div className="pc-title">{product.title}</div>
                  <p className="pc-desc">{product.desc}</p>
                  <div className="pc-meta">
                    <div className="pc-meta-item">⬇ <span>{product.downloads}</span></div>
                    <div className="pc-meta-item">★ <span>{product.rating}</span></div>
                  </div>
                  <div className="pc-footer">
                    <div className="pc-price">
                      {product.price} <span className="old">{product.oldPrice}</span>
                    </div>
                    <button
                      className="btn btn-orange"
                      style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
                    >
                      Beli
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="newsletter-section">
            <h3 className="nl-title">
              Dapat Info Produk<br />
              & Diskon Eksklusif
            </h3>
            <p className="nl-desc">
              Daftar newsletter dan dapatkan 20% off untuk pembelian pertama kamu.
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
