import { useEffect, useRef } from 'react';

export default function Gallery() {
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
    <section id="galeri" style={{ background: 'var(--bg)', padding: '100px 0 0' }}>
      {/* HEADER */}
      <div style={{ padding: '0 80px', maxWidth: 1400, margin: '0 auto 56px' }} className="rev">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
          <div>
            <div className="chip">📸 Galeri Bengkel</div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(60px, 8vw, 120px)', lineHeight: 0.88, letterSpacing: 2, color: 'var(--text)' }}>
              BEHIND<br />THE <span style={{ color: 'var(--y)' }}>WRENCH</span><span style={{ color: 'var(--border)' }}>.</span>
            </h2>
          </div>
          <div style={{ maxWidth: 340 }}>
            <p style={{ color: 'var(--muted)', fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
              Dokumentasi nyata dari setiap pekerjaan kami — dari tune-up harian sampai custom build yang butuh berminggu-minggu.
            </p>
            <a href="#" className="btn-dark">Lihat Semua Foto →</a>
          </div>
        </div>
      </div>

      {/* ROW 1: HERO STRIP */}
      <div style={{ padding: '0 80px', maxWidth: 1400, margin: '0 auto 12px' }} className="rev">
        <div style={{ display: 'grid', gridTemplateColumns: '2.2fr 1fr 1fr', gap: 12, height: 420 }}>
          {/* BIG HERO TILE */}
          <div
            className="pg-tile"
            style={{
              background: 'linear-gradient(160deg, #1a1208, #2d1f06)',
              borderRadius: 16,
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer'
            }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 160, opacity: 0.9 }}>🚴</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }}></div>
            <div style={{ position: 'absolute', top: 24, left: 24 }}>
              <div style={{ background: 'var(--y)', color: '#000', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase', padding: '5px 12px', borderRadius: 4 }}>
                Featured
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 32 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 3.5vw, 52px)', lineHeight: 0.95, color: 'white', letterSpacing: 1, marginBottom: 10 }}>
                TREK DOMANE SL6<br /><span style={{ color: 'var(--y)' }}>CUSTOM BUILD</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
                  Shimano Ultegra Di2 · 2024
                </div>
                <div style={{ width: 4, height: 4, background: 'var(--y)', borderRadius: '50%' }}></div>
                <div style={{ fontSize: 12, color: 'var(--y)', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>
                  8 Hari Pengerjaan
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              className="pg-tile"
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #0d0d0d, #1e1a0a)',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>⚙️</div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'white' }}>
                  Drivetrain Overhaul
                </div>
                <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>
                  SRAM XX1 Eagle
                </div>
              </div>
            </div>
            <div
              className="pg-tile"
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #0a100d, #0d1a14)',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>🔩</div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'white' }}>
                  Wheelbuilding 29er
                </div>
                <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>
                  Hunt × DT Swiss
                </div>
              </div>
            </div>
          </div>

          {/* FAR RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div
              className="pg-tile"
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #12060a, #200d0d)',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>🩸</div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'white' }}>
                  Brake Bleed
                </div>
                <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>
                  Shimano XT · DOT
                </div>
              </div>
            </div>
            <div
              className="pg-tile"
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #080a14, #0d1020)',
                borderRadius: 16,
                overflow: 'hidden',
                position: 'relative',
                cursor: 'pointer'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>🛞</div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
              <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'white' }}>
                  Tubeless Conversion
                </div>
                <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>
                  Maxxis Assegai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 2: TYPOGRAPHY QUOTE STRIP */}
      <div
        style={{
          background: 'var(--y)',
          padding: '32px 80px',
          overflow: 'hidden',
          position: 'relative'
        }}
        className="rev"
      >
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0,0,0,0.04) 10px, rgba(0,0,0,0.04) 20px)' }}></div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 40, position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px, 4vw, 52px)', color: '#000', letterSpacing: 2, lineHeight: 1 }}>
            EVERY BIKE TELLS A STORY.
          </div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, color: 'rgba(0,0,0,0.5)', letterSpacing: 2, textTransform: 'uppercase', maxWidth: 300 }}>
            — dan kami ada di setiap bab perjalananmu.
          </div>
          <div style={{ display: 'flex', gap: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: '#000', lineHeight: 1 }}>800+</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginTop: 2 }}>Proyek</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: '#000', lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginTop: 2 }}>Custom Build</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 40, color: '#000', lineHeight: 1 }}>10th</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginTop: 2 }}>Pengalaman</div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 3: MASONRY 5-COLUMN */}
      <div style={{ padding: '12px 80px 0', maxWidth: 1400, margin: '0 auto' }} className="rev">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr 1fr 1fr 1.2fr', gridTemplateRows: '220px 220px', gap: 12 }}>
          {/* col 1 - TALL */}
          <div
            className="pg-tile"
            style={{ gridRow: 'span 2', background: 'linear-gradient(180deg, #1a1208, #0d0a04)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 100 }}>🔧</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}></div>
            <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 1, color: 'white', lineHeight: 1, marginBottom: 6 }}>
                WORKSHOP<br /><span style={{ color: 'var(--y)' }}>TOOLS</span>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>
                Park Tool · Pedro's
              </div>
            </div>
            <div style={{ position: 'absolute', top: '50%', left: -28, transform: 'translateY(-50%) rotate(-90deg)', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: 3, textTransform: 'uppercase', color: 'var(--y)', whiteSpace: 'nowrap' }}>
              PRO GRADE
            </div>
          </div>

          {/* col 2 top - WIDE */}
          <div
            className="pg-tile"
            style={{ background: 'linear-gradient(135deg, #0f1a0a, #1a2d10)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 90 }}>🚵</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
            <div style={{ position: 'absolute', top: 16, right: 16, background: 'rgba(234,179,8,0.15)', border: '1px solid rgba(234,179,8,0.3)', color: 'var(--y)', fontSize: 10, fontWeight: 800, letterSpacing: 1.5, textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4 }}>
              MTB
            </div>
            <div style={{ position: 'absolute', bottom: 16, left: 20, right: 20 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1, color: 'white' }}>
                Polygon Siskiu T8<br />Full Suspension Setup
              </div>
            </div>
          </div>

          {/* col 3 top */}
          <div
            className="pg-tile"
            style={{ background: 'linear-gradient(135deg, #1a0808, #2d1010)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>🏋️</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
            <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', color: 'white' }}>
                BB Replacement
              </div>
              <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, marginTop: 2 }}>
                Shimano Hollowtech
              </div>
            </div>
          </div>

          {/* col 4 top */}
          <div
            className="pg-tile"
            style={{ background: 'linear-gradient(135deg, #080f1a, #10182d)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>💡</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
            <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', color: 'white' }}>
                Lighting Setup
              </div>
              <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, marginTop: 2 }}>
                Garmin Varia RTL515
              </div>
            </div>
          </div>

          {/* col 5 - TALL */}
          <div
            className="pg-tile"
            style={{ gridRow: 'span 2', background: 'linear-gradient(180deg, #14080a, #200d10)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 100 }}>🎯</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}></div>
            <div style={{ position: 'absolute', top: 20, left: 0, right: 0, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: 4, color: 'rgba(255,255,255,0.15)', textTransform: 'uppercase' }}>
                PRECISION
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: 24, left: 20, right: 20 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, letterSpacing: 1, color: 'white', lineHeight: 1, marginBottom: 6 }}>
                BIKE<br /><span style={{ color: 'var(--y)' }}>FITTING</span>
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: 1, textTransform: 'uppercase' }}>
                Retul · BikeFit Pro
              </div>
            </div>
          </div>

          {/* col 2 bottom - WIDE text-heavy */}
          <div
            className="pg-tile"
            style={{ background: 'var(--y)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(0,0,0,0.03) 8px, rgba(0,0,0,0.03) 16px)' }}></div>
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: 24 }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(32px, 3vw, 46px)', color: '#000', lineHeight: 0.9, letterSpacing: 2 }}>
                GARANSI<br />30 HARI
              </div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', marginTop: 8 }}>
                untuk semua pekerjaan service
              </div>
            </div>
          </div>

          {/* col 3 bottom */}
          <div
            className="pg-tile"
            style={{ background: 'linear-gradient(135deg, #0a0a14, #141420)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>🏎️</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
            <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', color: 'white' }}>
                Road Bike Setup
              </div>
              <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, marginTop: 2 }}>
                Aerodynamic Position
              </div>
            </div>
          </div>

          {/* col 4 bottom */}
          <div
            className="pg-tile"
            style={{ background: 'linear-gradient(135deg, #0a140a, #101e10)', borderRadius: 16, overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>🔗</div>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 60%)' }}></div>
            <div style={{ position: 'absolute', bottom: 14, left: 16, right: 16 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 16, fontWeight: 800, textTransform: 'uppercase', color: 'white' }}>
                Chain Replacement
              </div>
              <div style={{ fontSize: 11, color: 'var(--y)', fontWeight: 600, marginTop: 2 }}>
                KMC DLC 12spd
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 4: HORIZONTAL SCROLL STRIP */}
      <div style={{ padding: '12px 80px 0', maxWidth: 1400, margin: '0 auto' }} className="rev">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, height: 180 }}>
          <div className="pg-tile" style={{ background: 'var(--bg3)', borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 64 }}>🔦</div>
            <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)' }}>Headlight Install</div>
          </div>
          <div className="pg-tile" style={{ background: 'linear-gradient(135deg, var(--bg3), rgba(234,179,8,0.05))', borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer', border: '1px solid rgba(234,179,8,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 64 }}>🧴</div>
            <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)' }}>Chain Lube</div>
          </div>
          <div className="pg-tile" style={{ background: 'var(--bg2)', borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: 'var(--y)', lineHeight: 1, letterSpacing: 1 }}>SAME DAY</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 36, color: 'var(--text)', lineHeight: 1, letterSpacing: 1 }}>SERVICE</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginTop: 6 }}>untuk tune-up & minor repair</div>
            </div>
          </div>
          <div className="pg-tile" style={{ background: 'var(--bg3)', borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 64 }}>🪛</div>
            <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)' }}>Precision Tools</div>
          </div>
          <div className="pg-tile" style={{ background: 'var(--bg3)', borderRadius: 12, overflow: 'hidden', position: 'relative', cursor: 'pointer', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ fontSize: 64 }}>🏆</div>
            <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--muted)' }}>Award Winning</div>
          </div>
        </div>
      </div>

      {/* ROW 5: FULL BLEED DARK DIVIDER */}
      <div style={{ padding: '56px 80px', textAlign: 'center', position: 'relative', overflow: 'hidden', marginTop: 0 }} className="rev">
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(234,179,8,0.04) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(20px, 2.5vw, 32px)', letterSpacing: 6, color: 'var(--border)', textTransform: 'uppercase', marginBottom: 12 }}>
          INSTAGRAM @SPEEDWRENCH.BDG
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4 }}>#SpeedWrenchBDG</span>
          <span style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4 }}>#BengkelSepedaBandung</span>
          <span style={{ background: 'var(--bg3)', border: '1px solid var(--border)', color: 'var(--muted)', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4 }}>#CustomBuild</span>
          <span style={{ background: 'rgba(234,179,8,0.1)', border: '1px solid rgba(234,179,8,0.2)', color: 'var(--y)', fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4 }}>#RideEverywhere</span>
        </div>
      </div>
    </section>
  );
}
