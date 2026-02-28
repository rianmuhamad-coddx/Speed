import { useEffect } from 'react';
import { usePage } from '../context/PageContext';

export default function Services() {
  const { showPage, openFaq, toggleFaq } = usePage();

  useEffect(() => {
    const initFadeUp = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );

      const elements = document.querySelectorAll('.fade-up');
      elements.forEach((el) => observer.observe(el));
    };

    setTimeout(() => initFadeUp(), 100);
  }, []);

  const services = [
    {
      num: '01',
      icon: '🎨',
      title: 'UI/UX Design',
      desc: 'Desain antarmuka yang tidak hanya indah, tapi juga intuitif dan berbasis riset pengguna. Kami memastikan setiap pixel memiliki tujuan dan setiap interaksi terasa natural.',
      features: ['User Research & Persona', 'Wireframing & Prototyping', 'UI Design & Design System', 'Usability Testing'],
      price: 'Rp 2.500.000'
    },
    {
      num: '02',
      icon: '💻',
      title: 'Web Development',
      desc: 'Website modern dan berperforma tinggi menggunakan teknologi terdepan. Dari landing page sederhana hingga web app kompleks, kami kerjakan dengan standar kode terbaik.',
      features: ['Frontend Development (React/Vue)', 'Backend API Development', 'CMS Integration (WordPress)', 'Performance Optimization'],
      price: 'Rp 3.500.000'
    },
    {
      num: '03',
      icon: '🚀',
      title: 'Digital Branding',
      desc: 'Bangun identitas merek yang kuat, konsisten, dan tak terlupakan. Kami merancang visual identity yang mencerminkan nilai dan kepribadian bisnis kamu secara autentik.',
      features: ['Logo Design & Brand Mark', 'Brand Guidelines Document', 'Social Media Kit', 'Brand Strategy'],
      price: 'Rp 1.800.000'
    },
    {
      num: '04',
      icon: '📱',
      title: 'Mobile App Design',
      desc: 'Desain aplikasi mobile iOS dan Android yang memperhatikan setiap detail UX. Dari onboarding hingga screen terdalam, semua dirancang untuk memberikan pengalaman terbaik.',
      features: ['iOS & Android UI Design', 'Interactive Prototype', 'App Icon & Assets', 'Developer Handoff (Zeplin/Figma)'],
      price: 'Rp 4.000.000'
    },
    {
      num: '05',
      icon: '🛒',
      title: 'E-Commerce Setup',
      desc: 'Toko online yang tidak hanya terlihat bagus, tapi juga dioptimalkan untuk penjualan. Dari pemilihan platform, setup produk, hingga integrasi payment gateway lokal.',
      features: ['Platform Setup (Shopify/WooCommerce)', 'Product Page Optimization', 'Payment Gateway Integration', 'Conversion Rate Optimization'],
      price: 'Rp 3.000.000'
    },
    {
      num: '06',
      icon: '📊',
      title: 'Landing Page',
      desc: 'Halaman landing yang dioptimalkan untuk konversi dengan copywriting persuasif, desain memikat, dan A/B testing untuk memaksimalkan hasil kampanye marketing kamu.',
      features: ['Copywriting & Content Strategy', 'High-Converting Design', 'A/B Testing Setup', 'Analytics Integration'],
      price: 'Rp 1.200.000'
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery', desc: 'Memahami bisnis, target audiens, dan tujuan proyek kamu secara mendalam.' },
    { num: '02', title: 'Strategi', desc: 'Merencanakan pendekatan terbaik, milestone, dan timeline yang realistis.' },
    { num: '03', title: 'Desain', desc: 'Menciptakan wireframe, mockup, dan prototype untuk mendapatkan feedback.' },
    { num: '04', title: 'Development', desc: 'Mengeksekusi desain menjadi produk yang berfungsi dengan standar kode terbaik.' },
    { num: '05', title: 'Launch', desc: 'Peluncuran, testing final, dan dukungan pasca-launch untuk memastikan segalanya berjalan sempurna.' }
  ];

  const faqs = [
    {
      question: 'Berapa lama proses pengerjaan proyek?',
      answer: 'Durasi pengerjaan bergantung pada kompleksitas proyek. Landing page biasanya 3–5 hari kerja, website lengkap 2–4 minggu, dan aplikasi mobile bisa 4–8 minggu. Kami selalu memberikan estimasi yang akurat di awal diskusi.'
    },
    {
      question: 'Apakah ada revisi yang disertakan?',
      answer: 'Ya! Setiap paket sudah termasuk 2–3 putaran revisi. Kami memastikan hasil akhir benar-benar sesuai dengan visi dan kebutuhan kamu sebelum dianggap selesai.'
    },
    {
      question: 'Bagaimana sistem pembayarannya?',
      answer: 'Kami menggunakan sistem DP 50% di awal dan 50% setelah proyek selesai dan disetujui. Untuk proyek besar, bisa dibagi menjadi 3 termin: 40% awal, 30% pertengahan, 30% akhir.'
    },
    {
      question: 'Apakah menyediakan maintenance setelah selesai?',
      answer: 'Ya, kami menyediakan paket maintenance bulanan mulai dari Rp 300.000/bulan yang mencakup update konten, backup, security monitoring, dan support teknis prioritas.'
    },
    {
      question: 'Apakah bisa bekerja remote?',
      answer: 'Tentu saja! Kami terbiasa bekerja dengan klien dari seluruh Indonesia secara remote. Komunikasi via WhatsApp, email, atau video call. Tidak ada hambatan jarak untuk menghasilkan karya terbaik.'
    }
  ];

  return (
    <div className="page" id="page-services">
      <div className="page-hero">
        <div className="container">
          <div className="label-tag">Layanan Kami</div>
          <h2 className="section-title">
            Solusi Digital <span className="hl">Lengkap</span>
          </h2>
          <p className="section-desc">
            Dari konsep hingga peluncuran, kami hadir di setiap tahap perjalanan digital bisnis kamu.
          </p>
        </div>
      </div>

      <section className="section-py">
        <div className="container">
          <div className="services-big-grid">
            {services.map((service) => (
              <div key={service.num} className="service-big-card">
                <div className="sbc-top">
                  <div className="sbc-icon">{service.icon}</div>
                  <div className="sbc-num">{service.num}</div>
                </div>
                <div className="sbc-title">{service.title}</div>
                <p className="sbc-desc">{service.desc}</p>
                <ul className="sbc-list">
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <div className="sbc-price">
                  <div className="from">Mulai dari</div>
                  <div className="amount">{service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-py" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>Cara Kerja</div>
            <h2 className="section-title">
              Proses <span className="hl">Kami</span>
            </h2>
            <p className="section-desc" style={{ margin: '1rem auto 0', textAlign: 'center' }}>
              Transparan, terstruktur, dan berorientasi hasil.
            </p>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div
                key={step.num}
                className={`process-step fade-up${index > 0 ? ` d${index}` : ''}`}
              >
                <div className="ps-num">{step.num}</div>
                <div className="ps-title">{step.title}</div>
                <p className="ps-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>FAQ</div>
            <h2 className="section-title">
              Pertanyaan <span className="hl">Umum</span>
            </h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item${openFaq === index ? ' open' : ''}`}
              >
                <button
                  className="faq-q"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-a">
                  <div className="faq-a-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-title">
              Tertarik Bekerja<br />
              Sama dengan Kami?
            </h2>
            <p className="cta-desc">
              Dapatkan konsultasi gratis dan estimasi harga tanpa komitmen dalam 24 jam.
            </p>
            <div className="cta-actions">
              <button className="btn-cta-white" onClick={() => showPage('contact')}>
                Konsultasi Gratis →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
