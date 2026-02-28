export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-main">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 40, height: 40, background: 'var(--y)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
              🔧
            </div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: 2 }}>
                SPEED<span style={{ color: 'var(--y)' }}>WRENCH</span>
              </div>
              <div style={{ fontSize: 10, color: 'var(--muted)', letterSpacing: 1.5, textTransform: 'uppercase' }}>
                Bengkel Sepeda Profesional
              </div>
            </div>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: 13, lineHeight: 1.8, maxWidth: 260, marginBottom: 22 }}>
            Melayani para pengendara Bandung sejak 2014. Karena setiap kilometer perjalananmu dimulai dari bengkel yang tepat.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <div
              style={{
                width: 34, height: 34,
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, cursor: 'pointer', transition: 'all .2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--y)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              📘
            </div>
            <div
              style={{
                width: 34, height: 34,
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, cursor: 'pointer', transition: 'all .2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--y)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              📸
            </div>
            <div
              style={{
                width: 34, height: 34,
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, cursor: 'pointer', transition: 'all .2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--y)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              ▶️
            </div>
            <div
              style={{
                width: 34, height: 34,
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 15, cursor: 'pointer', transition: 'all .2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--y)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              💬
            </div>
          </div>
        </div>
        <div>
          <div className="fhead">Layanan</div>
          <a className="flink" href="#">Tune-Up Standar</a>
          <a className="flink" href="#">Indexing & Shifting</a>
          <a className="flink" href="#">Brake Bleed</a>
          <a className="flink" href="#">Wheelbuilding</a>
          <a className="flink" href="#">Upgrade Komponen</a>
          <a className="flink" href="#">Custom Build</a>
        </div>
        <div>
          <div className="fhead">Info</div>
          <a className="flink" href="#">Tentang Kami</a>
          <a className="flink" href="#">Paket Service</a>
          <a className="flink" href="#">Galeri Bengkel</a>
          <a className="flink" href="#">Blog & Tips</a>
          <a className="flink" href="#">Syarat & Ketentuan</a>
          <a className="flink" href="#">FAQ</a>
        </div>
        <div>
          <div className="fhead">Kontak</div>
          <a className="flink" href="#">📍 Jl. Setiabudi No. 88</a>
          <a className="flink" href="#">📞 0812-9999-0000</a>
          <a className="flink" href="#">📧 speedwrench.bdg@gmail.com</a>
          <a className="flink" href="#">⏰ Sen–Sab: 08.00–20.00</a>
          <div style={{ marginTop: 16 }}>
            <a
              href="https://wa.me/6281299990000"
              style={{
                background: 'var(--y)',
                color: '#000',
                fontWeight: 800,
                fontSize: 12,
                padding: '10px 18px',
                borderRadius: 6,
                textDecoration: 'none',
                letterSpacing: 1,
                textTransform: 'uppercase',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="foot-bottom">
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>
          © 2025 SpeedWrench Bengkel Sepeda. All rights reserved.
        </div>
        <div style={{ fontSize: 12, color: 'var(--muted)' }}>
          Website oleh <strong style={{ color: 'var(--y)' }}>CODEXStore</strong> · Mulai dari Rp 500.000
        </div>
      </div>
    </footer>
  );
}
