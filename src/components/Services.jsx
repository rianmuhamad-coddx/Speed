import { useEffect, useRef } from 'react';

export default function Services() {
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

  const services = [
    {
      icon: '🔧',
      title: 'Tune-Up Standar',
      desc: 'Pembersihan menyeluruh, pelumasan rantai, adjusting rem, indexing gear, cek tekanan ban. Cocok untuk perawatan rutin setiap bulan.',
      price: 'Mulai Rp 75.000'
    },
    {
      icon: '⚙️',
      title: 'Indexing & Shifting',
      desc: 'Penyetelan derailleur depan & belakang, kalibrasi shifter, cek dan ganti kabel inner/outer. Pindah gigi jadi mulus.',
      price: 'Mulai Rp 50.000'
    },
    {
      icon: '🩸',
      title: 'Brake Bleed',
      desc: 'Bleeding rem hidrolik dengan mineral oil atau Dot fluid. Rem kembali responsif dan firm. Support Shimano, SRAM, Magura.',
      price: 'Mulai Rp 120.000'
    },
    {
      icon: '🛞',
      title: 'Wheelbuilding',
      desc: 'Rakit roda custom dari hub, rim, dan jari-jari pilihan. Truing & tensioning presisi. Tersedia spoke pattern 2x, 3x, atau radial.',
      price: 'Mulai Rp 200.000'
    },
    {
      icon: '🔩',
      title: 'Upgrade Komponen',
      desc: 'Pasang groupset baru, upgrade cockpit, fork, suspensi, atau drivetrain. Tersedia brand Shimano, SRAM, Campagnolo, dan lainnya.',
      price: 'Mulai Rp 50.000'
    },
    {
      icon: '🧰',
      title: 'Custom Build',
      desc: 'Bangun sepeda impian dari frame kosong. Konsultasi spesifikasi, pemilihan part, assembly, hingga final setup. All-inclusive.',
      price: 'Konsultasi Gratis'
    }
  ];

  return (
    <section id="layanan" className="sec" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }} className="rev">
          <div>
            <div className="chip">🔧 Layanan Kami</div>
            <h2 className="stitle">
              WHAT WE<br /><span className="y">FIX.</span>
            </h2>
          </div>
          <a href="#" className="btn-dark" style={{ whiteSpace: 'nowrap' }}>
            Semua Layanan →
          </a>
        </div>
        <div className="services-grid rev">
          {services.map((svc, index) => (
            <div key={index} className="svc-card">
              <div className="svc-icon">{svc.icon}</div>
              <div className="svc-title">{svc.title}</div>
              <div className="svc-desc">{svc.desc}</div>
              <div className="svc-price">{svc.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
