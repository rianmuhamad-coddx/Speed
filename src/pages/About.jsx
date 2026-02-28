import { useEffect } from 'react';
import { usePage } from '../context/PageContext';

export default function About() {
  const { showPage } = usePage();

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

  const values = [
    { icon: '🎯', title: 'Berorientasi Hasil', desc: 'Setiap keputusan desain didorong oleh data dan tujuan bisnis yang nyata, bukan sekadar estetika semata.' },
    { icon: '💎', title: 'Kualitas Tanpa Kompromi', desc: 'Kami tidak menggunting kualitas untuk kecepatan. Setiap detail diperhatikan sampai benar-benar sempurna.' },
    { icon: '🤝', title: 'Kemitraan Sejati', desc: 'Klien bukan sekadar sumber kontrak, tapi mitra jangka panjang yang kesuksesannya adalah kesuksesan kami.' },
    { icon: '💡', title: 'Inovatif & Adaptif', desc: 'Dunia digital selalu berubah dan kami selalu belajar untuk memberikan solusi yang relevan dan terdepan.' },
    { icon: '⚡', title: 'Tepat Waktu', desc: 'Deadline bukan hambatan tapi komitmen. Kami merancang proses yang memastikan pengiriman selalu on-time.' },
    { icon: '🌐', title: 'Transparan', desc: 'Komunikasi terbuka, laporan progress rutin, dan tidak ada biaya tersembunyi. Kepercayaan dibangun lewat kejujuran.' }
  ];

  const team = [
    { avatar: 'ta-1', emoji: '👨‍🎨', name: 'Arkan Kurnia', role: 'Founder & Creative Director', socials: ['in', 'tw', 'dr'] },
    { avatar: 'ta-2', emoji: '👩‍💻', name: 'Fiona Sari', role: 'Lead UI/UX Designer', socials: ['in', 'tw', 'dr'] },
    { avatar: 'ta-3', emoji: '👨‍💻', name: 'Rizky Pratama', role: 'Frontend Developer', socials: ['in', 'gh', 'tw'] },
    { avatar: 'ta-4', emoji: '👩‍🎨', name: 'Nadia Putri', role: 'Brand Designer', socials: ['in', 'tw', 'be'] }
  ];

  return (
    <div className="page" id="page-about">
      <div className="page-hero">
        <div className="container">
          <div className="label-tag">Tentang Kami</div>
          <h2 className="section-title">
            Studio yang <span className="hl">Peduli Detail</span>
          </h2>
          <p className="section-desc">
            Kami adalah tim kecil yang passionate tentang desain dan teknologi, berkomitmen untuk menciptakan karya terbaik untuk setiap klien.
          </p>
        </div>
      </div>

      <section className="section-py">
        <div className="container">
          <div className="about-hero-grid">
            <div>
              <div className="label-tag">Cerita Kami</div>
              <h2 className="section-title">
                Dimulai dari <span className="hl">Passion</span>
                <br />
                Menuju Profesional
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '1.2rem' }}>
                Arkan Studio lahir dari keyakinan sederhana: desain yang bagus bisa mengubah bisnis. Kami berdiri sejak 2022 dengan visi membantu pelaku bisnis Indonesia tampil profesional di dunia digital.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginTop: '1rem' }}>
                Dari studio kecil di Jakarta, kami telah mengerjakan 150+ proyek untuk klien dari berbagai industri — mulai dari startup tech, brand fashion, restoran, hingga perusahaan fintech.
              </p>
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2.2rem', fontWeight: 800, color: 'var(--orange)', letterSpacing: '-0.03em' }}>
                    150<em style={{ fontStyle: 'normal' }}>+</em>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Proyek Selesai</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2.2rem', fontWeight: 800, color: 'var(--orange)', letterSpacing: '-0.03em' }}>
                    3<em style={{ fontStyle: 'normal' }}>+</em>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Tahun Pengalaman</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: '2.2rem', fontWeight: 800, color: 'var(--orange)', letterSpacing: '-0.03em' }}>
                    15<em style={{ fontStyle: 'normal' }}>+</em>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>Industri Dilayani</div>
                </div>
              </div>
            </div>
            <div className="about-img-stack">
              <div className="about-img-main">👨‍💻</div>
              <div className="about-img-badge">
                <div className="aib-num">98%</div>
                <div className="aib-label">Klien Puas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section-py" style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>Nilai Kami</div>
            <h2 className="section-title">
              Yang Menjadi <span className="hl">Fondasi</span> Kami
            </h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`value-card fade-up${index > 0 ? ` d${index % 3}` : ''}`}
              >
                <div className="vc-icon">{value.icon}</div>
                <div className="vc-title">{value.title}</div>
                <p className="vc-desc">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section-py">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="label-tag" style={{ justifyContent: 'center' }}>Tim</div>
            <h2 className="section-title">
              Orang-orang di <span className="hl">Balik Karya</span>
            </h2>
          </div>
          <div className="team-grid">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`team-card fade-up${index > 0 ? ` d${index}` : ''}`}
              >
                <div className={`team-avatar ${member.avatar}`}>{member.emoji}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-social">
                  {member.socials.map((social) => (
                    <a key={social} href="#">
                      {social}
                    </a>
                  ))}
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
              Bergabung Bersama<br />
              Tim Kami?
            </h2>
            <p className="cta-desc">
              Kami selalu mencari talenta berbakat yang passionate di bidang desain dan pengembangan digital.
            </p>
            <div className="cta-actions">
              <button className="btn-cta-white" onClick={() => showPage('contact')}>
                Kirim Portofolio →
              </button>
              <button className="btn-cta-ghost">Lihat Posisi Terbuka</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
