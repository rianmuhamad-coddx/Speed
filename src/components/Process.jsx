import { useEffect, useRef } from 'react';

export default function Process() {
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

  const steps = [
    {
      num: '01',
      title: 'Booking via WA',
      desc: 'Chat kami untuk booking jadwal. Ceritakan masalah sepedamu, kami bantu diagnosa awal gratis.'
    },
    {
      num: '02',
      title: 'Drop-Off & Inspeksi',
      desc: 'Bawa sepeda ke bengkel. Mekanik kami akan inspeksi menyeluruh dan kasih estimasi biaya & waktu.'
    },
    {
      num: '03',
      title: 'Proses Pengerjaan',
      desc: 'Sepeda dikerjakan oleh mekanik berpengalaman. Update progress via WhatsApp setiap tahap.'
    },
    {
      num: '04',
      title: 'Pick-Up & Test Ride',
      desc: 'Ambil sepedamu setelah selesai. Test ride di lokasi, kami pastikan semua sempurna sebelum kamu pulang.'
    }
  ];

  return (
    <section className="sec-sm" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }} className="rev">
          <div className="chip">📋 Cara Kerja</div>
          <h2 className="stitle">
            HOW IT<br /><span className="y">WORKS.</span>
          </h2>
        </div>
        <div className="process-grid rev" ref={sectionRef}>
          {steps.map((step, index) => (
            <div key={index} className="proc">
              <div className="proc-num">{step.num}</div>
              <div className="proc-title">{step.title}</div>
              <div className="proc-sub">{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
