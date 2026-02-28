import { useEffect, useRef } from 'react';

export default function Hero() {
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
    <section className="hero" ref={sectionRef}>
      <div className="hero-left" style={{ position: 'relative' }}>
        <div className="diag-stripe"></div>
        <div className="hero-label rev" style={{ position: 'relative', zIndex: 2 }}>
          <span className="live-dot"></span> Buka Hari Ini · 08.00 – 20.00
        </div>
        <h1 className="hero-h1 rev" style={{ position: 'relative', zIndex: 2 }}>
          <div>FIX YOUR</div>
          <div className="accent">RIDE.</div>
          <div className="stroke">FEEL FREE.</div>
        </h1>
        <p className="hero-tagline rev" style={{ position: 'relative', zIndex: 2, marginTop: 16 }}>
          Bengkel Sepeda Profesional · Bandung
        </p>
        <p className="hero-sub rev" style={{ position: 'relative', zIndex: 2 }}>
          Dari tune-up harian sampai upgrade komponen full-spec. Kami tangani semua jenis sepeda — road, MTB, gravel, fixie — dengan tangan mekanik berpengalaman 10+ tahun.
        </p>
        <div className="hero-btns rev" style={{ position: 'relative', zIndex: 2 }}>
          <a href="https://wa.me/6281234567890" className="btn-y">🔧 Booking Service</a>
          <a href="#layanan" className="btn-dark">Lihat Layanan ↓</a>
        </div>
        <div className="hero-stats rev" style={{ position: 'relative', zIndex: 2 }}>
          <div className="hs">
            <div className="hs-n">800+</div>
            <div className="hs-l">Sepeda Diservice</div>
          </div>
          <div className="hs">
            <div className="hs-n">10th</div>
            <div className="hs-l">Pengalaman</div>
          </div>
          <div className="hs">
            <div className="hs-n">4.9⭐</div>
            <div className="hs-l">Rating Google</div>
          </div>
          <div className="hs">
            <div className="hs-n">1 Hari</div>
            <div className="hs-l">Rata-rata Selesai</div>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div
          className="hero-badge hb1"
          style={{ animation: 'bikeFloat 3.5s ease-in-out infinite 0.5s' }}
        >
          <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
            ⚡ Sedang Dikerjakan
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Trek Domane SL5</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Full tune-up + indexing</div>
        </div>
        <div
          className="hero-badge hb2"
          style={{ animation: 'bikeFloat 4s ease-in-out infinite 1s' }}
        >
          <div style={{ fontSize: 11, color: '#22C55E', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
            ✅ Selesai Hari Ini
          </div>
          <div style={{ fontSize: 14, fontWeight: 700 }}>Polygon Siskiu T8</div>
          <div style={{ fontSize: 12, color: 'var(--muted)' }}>Brake bleed + cassette</div>
        </div>
        <div className="hero-bike">🚴</div>
      </div>
    </section>
  );
}
