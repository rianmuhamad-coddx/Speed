import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Paket', href: '#paket' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Review', href: '#review' },
    { label: 'Lokasi', href: '#lokasi' }
  ];

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
        <a className="nav-brand" href="#">
          <div className="nav-brand-icon">🔧</div>
          <span className="nav-brand-name">SPEED<span>WRENCH</span></span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          <a href="https://wa.me/6281234567890" className="nav-cta">📞 Booking</a>
        </div>
        <div id="hamburger" onClick={toggleMobileMenu}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div id="mob-menu" className={mobileMenuOpen ? 'open' : ''}>
        <span id="mob-close" onClick={closeMobileMenu}>✕</span>
        <a href="#layanan" onClick={closeMobileMenu}>Layanan</a>
        <a href="#paket" onClick={closeMobileMenu}>Paket</a>
        <a href="#galeri" onClick={closeMobileMenu}>Galeri</a>
        <a href="#review" onClick={closeMobileMenu}>Review</a>
        <a href="#lokasi" onClick={closeMobileMenu}>Lokasi</a>
        <a href="https://wa.me/6281234567890" className="mob-cta" onClick={closeMobileMenu}>📞 Booking Sekarang</a>
      </div>
    </>
  );
}
