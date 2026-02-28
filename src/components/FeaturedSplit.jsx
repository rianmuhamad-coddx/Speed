import { useEffect, useRef } from 'react';

export default function FeaturedSplit() {
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
    <section className="featured-split rev" ref={sectionRef}>
      <div className="feat-left">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="feat-big-num">10</div>
          <div className="feat-head">TAHUN PENGALAMAN DI INDUSTRI</div>
          <p style={{ fontSize: 15, color: 'rgba(0,0,0,0.65)', lineHeight: 1.8, maxWidth: 400, marginBottom: 28 }}>
            Sejak 2014 kami sudah menangani ribuan sepeda dari berbagai brand dan tipe. Mulai dari fixie commuter sampai full-sus enduro 29er.
          </p>
          <div style={{ display: 'flex', gap: 32, marginBottom: 36, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, color: '#000', lineHeight: 1 }}>800+</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>Sepeda Diservice</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, color: '#000', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>Custom Build</div>
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 42, color: '#000', lineHeight: 1 }}>98%</div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)' }}>Pelanggan Puas</div>
            </div>
          </div>
          <a
            href="#"
            style={{
              background: '#000',
              color: 'var(--y)',
              fontWeight: 800,
              fontSize: 13,
              padding: '14px 28px',
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: 1,
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            Tentang Kami →
          </a>
        </div>
      </div>
      <div className="feat-right">
        <div className="chip">Kenapa SpeedWrench?</div>
        <h3 className="stitle" style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', marginBottom: 32 }}>
          WE CARE<br /><span className="y">YOUR BIKE.</span>
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44,
              background: 'rgba(234,179,8,0.1)',
              border: '1px solid rgba(234,179,8,0.2)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, flexShrink: 0
            }}>
              🎓
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>
                Mekanik Tersertifikasi
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
                Semua teknisi kami sudah mendapat pelatihan resmi dari brand-brand terkemuka seperti Shimano dan SRAM.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44,
              background: 'rgba(234,179,8,0.1)',
              border: '1px solid rgba(234,179,8,0.2)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, flexShrink: 0
            }}>
              ⏱️
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>
                Garansi Pekerjaan 30 Hari
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
                Semua pekerjaan service dilindungi garansi 30 hari. Kalau ada masalah, kami perbaiki tanpa biaya tambahan.
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <div style={{
              width: 44, height: 44,
              background: 'rgba(234,179,8,0.1)',
              border: '1px solid rgba(234,179,8,0.2)',
              borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 20, flexShrink: 0
            }}>
              🧩
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: 17, letterSpacing: 0.5, textTransform: 'uppercase', marginBottom: 4 }}>
                Part Original & Terpercaya
              </div>
              <div style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.7 }}>
                Hanya menggunakan spare part original dari distributor resmi. Tidak ada part KW di bengkel kami.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
