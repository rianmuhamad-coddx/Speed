import { useState, useEffect, useRef } from 'react';

export default function PromoBand() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTimeLeft({
        hours: 23 - now.getHours(),
        minutes: 59 - now.getMinutes(),
        seconds: 59 - now.getSeconds()
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="promo-band rev" ref={sectionRef}>
      <div className="promo-text">
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginBottom: 8 }}>
          ⚡ Flash Promo
        </div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 4vw, 48px)', color: '#000', lineHeight: 1, marginBottom: 8 }}>
          TUNE-UP GRATIS UNTUK<br />MEMBER BARU!
        </div>
        <p style={{ fontSize: 14, color: 'rgba(0,0,0,0.6)', marginBottom: 20 }}>
          Daftar jadi member sekarang dan dapatkan 1x service tune-up standar gratis. Daftar via WhatsApp!
        </p>
        <a
          href="#"
          style={{
            background: '#000',
            color: 'var(--y)',
            fontWeight: 800,
            fontSize: 13,
            padding: '12px 24px',
            borderRadius: 6,
            textDecoration: 'none',
            letterSpacing: 1,
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8
          }}
        >
          Klaim Sekarang →
        </a>
      </div>
      <div className="promo-cdown">
        <div className="pcb">
          <div className="pcn" id="ph">{pad(timeLeft.hours)}</div>
          <div className="pcl">Jam</div>
        </div>
        <div className="pcb">
          <div className="pcn" id="pm">{pad(timeLeft.minutes)}</div>
          <div className="pcl">Menit</div>
        </div>
        <div className="pcb">
          <div className="pcn" id="ps">{pad(timeLeft.seconds)}</div>
          <div className="pcl">Detik</div>
        </div>
      </div>
    </div>
  );
}
