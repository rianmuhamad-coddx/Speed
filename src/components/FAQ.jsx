import { useState, useEffect, useRef } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
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

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: 'Apakah perlu booking dulu atau bisa langsung datang?',
      a: 'Bisa langsung datang, tapi kami sangat menyarankan booking dulu via WhatsApp agar tidak antri. Untuk service yang membutuhkan waktu lebih lama seperti full overhaul atau custom build, booking wajib minimal 2 hari sebelumnya.'
    },
    {
      q: 'Berapa lama waktu pengerjaan service?',
      a: 'Tune-up standar biasanya selesai dalam 1–3 jam. Full overhaul 1 hari kerja. Custom build 3–7 hari tergantung ketersediaan part. Kami selalu update progress via WhatsApp.'
    },
    {
      q: 'Apakah tersedia layanan antar-jemput sepeda?',
      a: 'Ya! Kami menyediakan layanan pick-up & delivery sepeda untuk area Bandung dengan biaya tambahan. Hubungi kami via WhatsApp untuk info tarif dan jadwal yang tersedia.'
    },
    {
      q: 'Apakah bisa konsultasi masalah sepeda sebelum service?',
      a: 'Tentu! Konsultasi awal via WhatsApp atau telepon sepenuhnya gratis. Ceritakan gejala masalah sepedamu, kami akan bantu diagnosa dan berikan estimasi biaya sebelum kamu datang.'
    },
    {
      q: 'Metode pembayaran apa saja yang diterima?',
      a: 'Kami menerima cash, transfer bank, QRIS (GoPay, OVO, Dana, ShopeePay), dan kartu debit/kredit. Tidak ada biaya tambahan untuk pembayaran digital.'
    }
  ];

  return (
    <section className="sec" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }} className="rev">
          <div className="chip">❓ FAQ</div>
          <h2 className="stitle">
            GOT<br /><span className="y">QUESTIONS?</span>
          </h2>
        </div>
        <div className="rev" ref={sectionRef}>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-q" onClick={() => toggleFaq(index)}>
                {faq.q}
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
