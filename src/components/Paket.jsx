import { useEffect, useRef } from 'react';

export default function Paket() {
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
    <section id="paket" className="sec" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }} className="rev">
          <div className="chip">💳 Paket Service</div>
          <h2 className="stitle">
            CHOOSE YOUR<br /><span className="y">PACKAGE.</span>
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 15, marginTop: 14, maxWidth: 480, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}>
            Pilih paket yang sesuai kebutuhan sepedamu. Semua termasuk garansi 30 hari pekerjaan.
          </p>
        </div>
        <div className="paket-grid rev">
          {/* BASIC */}
          <div className="pk">
            <div className="pk-name">Paket Basic</div>
            <div className="pk-price">Rp 100K</div>
            <div className="pk-sub">/kunjungan · Cocok untuk sepeda harian</div>
            <hr style={{ borderColor: 'var(--border)', marginBottom: 16 }} />
            <div className="pk-feat">
              <div className="pck">✓</div> Pembersihan frame & komponen
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Pelumasan rantai & cable
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Adjusting rem dasar
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Cek & pompa tekanan ban
            </div>
            <div className="pk-feat" style={{ color: 'var(--border)' }}>
              <div className="pck pck-x">✗</div> Indexing gear
            </div>
            <div className="pk-feat" style={{ color: 'var(--border)', border: 'none' }}>
              <div className="pck pck-x">✗</div> Cek bearing & headset
            </div>
            <a href="#" className="btn-dark" style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
              Pilih Paket
            </a>
          </div>

          {/* PRO - Featured */}
          <div className="pk pk-featured">
            <div className="pk-name">Paket Pro</div>
            <div className="pk-price">Rp 200K</div>
            <div className="pk-sub">/kunjungan · Paling banyak dipilih</div>
            <hr style={{ borderColor: 'rgba(234,179,8,0.2)', marginBottom: 16 }} />
            <div className="pk-feat">
              <div className="pck">✓</div> Semua dari Paket Basic
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Full indexing drivetrain
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Cek & adjust brake pad
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Cek bearing, headset, BB
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Wheel truing minor
            </div>
            <div className="pk-feat" style={{ border: 'none' }}>
              <div className="pck">✓</div> Laporan kondisi sepeda
            </div>
            <a href="#" className="btn-y" style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
              ⚡ Pilih Paket
            </a>
          </div>

          {/* FULL */}
          <div className="pk" style={{ borderColor: 'var(--bg3)' }}>
            <div className="pk-name" style={{ color: 'var(--muted)' }}>Paket Full Overhaul</div>
            <div className="pk-price">Rp 450K</div>
            <div className="pk-sub">/kunjungan · Bongkar total & rebuild</div>
            <hr style={{ borderColor: 'var(--border)', marginBottom: 16 }} />
            <div className="pk-feat">
              <div className="pck">✓</div> Semua dari Paket Pro
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Full disassembly & deep clean
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Grease semua bearing
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Ganti cable inner/outer
            </div>
            <div className="pk-feat">
              <div className="pck">✓</div> Full wheel true & tension
            </div>
            <div className="pk-feat" style={{ border: 'none' }}>
              <div className="pck">✓</div> Foto dokumentasi proses
            </div>
            <a href="#" className="btn-dark" style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
              Pilih Paket
            </a>
          </div>
        </div>
        <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: 13, marginTop: 20, letterSpacing: 0.5 }}>
          ⚙️ Harga belum termasuk spare part · Konsultasi gratis via WhatsApp sebelum booking
        </p>
      </div>
    </section>
  );
}
