import { useEffect, useRef } from 'react';

export default function Location() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in');
            }, 60);
          }
        });
      },
      { threshold: 0.08 }
    );

    const elements = sectionRef.current?.querySelectorAll('.rev, .rev-l, .rev-r');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="lokasi" className="loc-split" itemScope itemType="https://schema.org/AutoRepair">
      <meta itemProp="name" content="SpeedWrench Bengkel Sepeda" />
      <meta itemProp="telephone" content="+6281299990000" />
      <meta itemProp="email" content="speedwrench.bdg@gmail.com" />
      <meta itemProp="priceRange" content="Rp 50.000 - Rp 450.000" />
      <div className="loc-left rev-l" ref={sectionRef}>
        <div className="chip">📍 Temukan Kami</div>
        <h2 className="stitle" style={{ marginBottom: 32 }}>
          VISIT THE<br /><span className="y">SHOP.</span>
        </h2>
        <div className="info-row">
          <div className="info-ico">📍</div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>Alamat</div>
            <div style={{ color: 'var(--muted)', fontSize: 13 }} itemProp="address">Jl. Setiabudi No. 88, Ledeng, Kota Bandung, Jawa Barat 40143</div>
            <meta itemProp="streetAddress" content="Jl. Setiabudi No. 88, Ledeng" />
            <meta itemProp="addressLocality" content="Bandung" />
            <meta itemProp="addressRegion" content="Jawa Barat" />
            <meta itemProp="postalCode" content="40143" />
            <meta itemProp="addressCountry" content="ID" />
          </div>
        </div>
        <div className="info-row">
          <div className="info-ico">⏰</div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>Jam Buka</div>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>Senin – Sabtu · 08.00 – 20.00 · Minggu 09.00 – 17.00</div>
          </div>
        </div>
        <div className="info-row">
          <div className="info-ico">📞</div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>Kontak</div>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>0812-9999-0000 · speedwrench.bdg@gmail.com</div>
          </div>
        </div>
        <div className="info-row" style={{ marginBottom: 28 }}>
          <div className="info-ico">🅿️</div>
          <div>
            <div style={{ fontWeight: 700, marginBottom: 2 }}>Parkir</div>
            <div style={{ color: 'var(--muted)', fontSize: 13 }}>Parkir motor & mobil gratis di halaman bengkel. Kamera 24 jam.</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="btn-y">
            🗺️ Buka di Maps
          </a>
          <a href="https://wa.me/6281299990000" className="btn-dark">
            💬 WhatsApp
          </a>
        </div>
      </div>
      <div className="loc-right rev-r">
        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="map-pin">📍</div>
          <div style={{ background: 'var(--bg2)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: 10, padding: '16px 24px', display: 'inline-block', marginTop: -10, boxShadow: '0 12px 40px rgba(0,0,0,0.6)' }}>
            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: 2 }}>SPEEDWRENCH BENGKEL</div>
            <div style={{ color: 'var(--y)', fontSize: 13, fontWeight: 700, marginTop: 4 }}>⭐ 4.9 · 200+ Ulasan Google</div>
          </div>
        </div>
      </div>
    </section>
  );
}
