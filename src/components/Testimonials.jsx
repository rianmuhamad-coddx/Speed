import { useEffect, useRef } from 'react';

export default function Testimonials() {
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
    <section id="review" className="sec" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }} className="rev">
          <div className="chip">💬 Review Pelanggan</div>
          <h2 className="stitle">
            WHAT RIDERS<br /><span className="y">SAY.</span>
          </h2>
        </div>
        <div className="testi-grid rev" ref={sectionRef}>
          <div className="t-big">
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="t-stars">★★★★★</div>
              <p style={{ fontSize: 19, lineHeight: 1.7, color: 'var(--text)', marginBottom: 28, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, letterSpacing: 0.3 }}>
                "Brake bleed Shimano XT saya di SpeedWrench — hasilnya luar biasa. Rem balik firm kayak baru, responsnya lebih enak dari service di dealer resmi. <span style={{ color: 'var(--y)' }}>Definitely my go-to shop.</span>"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="t-av" style={{ width: 46, height: 46, fontSize: 17 }}>R</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15 }}>Rangga Pratama</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)' }}>Road Cyclist · Trek Domane</div>
                </div>
                <div style={{ marginLeft: 'auto', background: 'rgba(234,179,8,0.1)', color: 'var(--y)', padding: '5px 12px', borderRadius: 4, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  Via Google
                </div>
              </div>
            </div>
          </div>
          <div className="t-small-stack">
            <div className="t-small">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">
                "Wheelbuilding custom 29er saya selesai dalam 3 hari. Tensioning-nya presisi banget, sudah 6 bulan dipakai trail dan ga pernah keluar true. Recommended!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="t-av">A</div>
                <div>
                  <div className="t-name">Aldi Firmansyah</div>
                  <div className="t-role">MTB Rider · Polygon Siskiu</div>
                </div>
              </div>
            </div>
            <div className="t-small">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">
                "Full overhaul fixie saya butuh waktu 1 hari dan hasilnya impeccable. Mekaniknya ramah, kasih penjelasan detail tiap step. Harga juga sangat worth it!"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="t-av">D</div>
                <div>
                  <div className="t-name">Dinda Kusuma</div>
                  <div className="t-role">Urban Cyclist · Fixie Custom</div>
                </div>
              </div>
            </div>
            <div className="t-small">
              <div className="t-stars">★★★★★</div>
              <p className="t-quote">
                "Groupset upgrade dari 105 ke Ultegra dipasang dengan sangat rapi. Cable routing bersih, shift-nya smooth. Bengkel paling pro yang pernah saya kunjungi di Bandung."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="t-av">F</div>
                <div>
                  <div className="t-name">Fajar Nugroho</div>
                  <div className="t-role">Cyclist · Specialized Roubaix</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
