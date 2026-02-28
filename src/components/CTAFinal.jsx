import { useEffect, useRef } from 'react';

export default function CTAFinal() {
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
    <section className="cta-final">
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 700, margin: '0 auto' }} className="rev" ref={sectionRef}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, letterSpacing: 4, color: 'rgba(0,0,0,0.4)', textTransform: 'uppercase', marginBottom: 16 }}>
          Ready to roll?
        </div>
        <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(56px, 8vw, 96px)', color: '#000', lineHeight: 0.9, letterSpacing: 2, marginBottom: 20 }}>
          YOUR BIKE<br />DESERVES<br />THE BEST.
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(0,0,0,0.6)', lineHeight: 1.8, maxWidth: 480, margin: '0 auto 36px' }}>
          Jangan biarkan sepedamu menderita. Booking service sekarang dan rasakan perbedaannya.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/6281299990000"
            style={{
              background: '#000',
              color: 'var(--y)',
              fontWeight: 800,
              fontSize: 14,
              padding: '15px 34px',
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: 1,
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            🔧 Booking Service
          </a>
          <a
            href="#layanan"
            style={{
              background: 'rgba(0,0,0,0.15)',
              color: '#000',
              fontWeight: 800,
              fontSize: 14,
              padding: '15px 28px',
              borderRadius: 6,
              textDecoration: 'none',
              letterSpacing: 1,
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '2px solid rgba(0,0,0,0.2)'
            }}
          >
            Lihat Paket
          </a>
        </div>
        <div style={{ marginTop: 28, fontSize: 13, color: 'rgba(0,0,0,0.45)', letterSpacing: 0.5 }}>
          📍 Jl. Setiabudi No. 88, Bandung &nbsp;·&nbsp; ⏰ Senin–Sabtu 08.00–20.00 &nbsp;·&nbsp; 📞 0812-9999-0000
        </div>
      </div>
    </section>
  );
}
