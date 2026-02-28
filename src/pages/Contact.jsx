import { useEffect, useState } from 'react';
import { usePage } from '../context/PageContext';

export default function Contact() {
  const { showPage } = usePage();
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="page" id="page-contact">
      <div className="page-hero">
        <div className="container">
          <div className="label-tag">Kontak</div>
          <h2 className="section-title">
            Yuk, <span className="hl">Ngobrol</span> Dulu!
          </h2>
          <p className="section-desc">
            Ceritakan proyek kamu dan tim kami akan merespons dalam 24 jam kerja.
          </p>
        </div>
      </div>

      <section className="section-py">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="label-tag">Informasi Kontak</div>
              <h3 className="section-title" style={{ fontSize: '2rem' }}>
                Selalu Siap<br />
                <span className="hl">Membantu</span> Kamu
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.75, marginTop: '1rem' }}>
                Apapun pertanyaan atau kebutuhan kamu, jangan ragu untuk menghubungi kami. Konsultasi pertama selalu gratis!
              </p>

              <div className="contact-info-cards">
                <div className="ci-card">
                  <div className="ci-icon">📧</div>
                  <div>
                    <div className="ci-label">Email</div>
                    <div className="ci-val">halo@arkanstudio.id</div>
                  </div>
                </div>
                <div className="ci-card">
                  <div className="ci-icon">📱</div>
                  <div>
                    <div className="ci-label">WhatsApp</div>
                    <div className="ci-val">+62 812-3456-7890</div>
                  </div>
                </div>
                <div className="ci-card">
                  <div className="ci-icon">📍</div>
                  <div>
                    <div className="ci-label">Lokasi</div>
                    <div className="ci-val">Jakarta Selatan, Indonesia</div>
                  </div>
                </div>
                <div className="ci-card">
                  <div className="ci-icon">⏰</div>
                  <div>
                    <div className="ci-label">Jam Kerja</div>
                    <div className="ci-val">Senin–Jumat, 09.00–18.00 WIB</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
                  Ikuti Kami
                </div>
                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  {['in', 'ig', 'tw', 'dr'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '50%',
                        background: 'var(--gray-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.95rem',
                        transition: 'var(--transition)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.background = 'var(--orange)';
                        e.target.style.color = 'white';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.background = 'var(--gray-light)';
                        e.target.style.color = 'inherit';
                      }}
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form fade-up">
              <div className="form-title">Kirim Pesan 💬</div>
              <div className="form-subtitle">Isi form di bawah dan kami akan segera menghubungi kamu.</div>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Nama Lengkap *</label>
                    <input className="form-input" type="text" placeholder="Budi Irawan" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input className="form-input" type="email" placeholder="budi@email.com" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">No. WhatsApp</label>
                    <input className="form-input" type="tel" placeholder="08xx-xxxx-xxxx" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Layanan yang Diinginkan</label>
                    <select className="form-select">
                      <option value="">Pilih layanan...</option>
                      <option>UI/UX Design</option>
                      <option>Web Development</option>
                      <option>Digital Branding</option>
                      <option>Mobile App Design</option>
                      <option>E-Commerce Setup</option>
                      <option>Landing Page</option>
                      <option>Pembelian Produk</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Budget Proyek</label>
                    <select className="form-select">
                      <option value="">Pilih range budget...</option>
                      <option>&lt; Rp 1.000.000</option>
                      <option>Rp 1 – 5 Juta</option>
                      <option>Rp 5 – 15 Juta</option>
                      <option>Rp 15 – 50 Juta</option>
                      <option>&gt; Rp 50 Juta</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Deadline Proyek</label>
                    <input className="form-input" type="date" />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Ceritakan Proyek Kamu *</label>
                    <textarea
                      className="form-textarea"
                      placeholder="Jelaskan secara singkat tentang proyek, tujuan, dan apa yang kamu harapkan dari kami..."
                      required
                    ></textarea>
                  </div>
                </div>
                <button
                  className="btn btn-orange form-submit"
                  type="submit"
                  style={{
                    background: formSubmitted ? '#16A34A' : '',
                    opacity: formSubmitted ? 1 : ''
                  }}
                >
                  {formSubmitted ? '✅ Pesan Terkirim!' : 'Kirim Pesan → ✨'}
                </button>
              </form>
            </div>
          </div>

          <div className="map-placeholder fade-up">
            <div className="mp-emoji">🗺️</div>
            <div className="mp-text">
              Jakarta Selatan, Indonesia — Kami juga melayani secara remote ke seluruh Indonesia
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
