import { useEffect, useRef } from 'react';

export default function Brands() {
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

  const brands = [
    { icon: '⚙️', name: 'Shimano' },
    { icon: '🔩', name: 'SRAM' },
    { icon: '🚴', name: 'Trek' },
    { icon: '🏔️', name: 'Polygon' },
    { icon: '💨', name: 'Giant' },
    { icon: '⚡', name: 'Specialized' }
  ];

  return (
    <section className="sec-sm" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }} className="rev">
          <div className="chip">🤝 Brand Support</div>
          <h2 className="stitle" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            WE WORK WITH<br /><span className="y">THE BEST.</span>
          </h2>
        </div>
        <div className="brands rev" ref={sectionRef}>
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <span className="brand-icon">{brand.icon}</span>
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
