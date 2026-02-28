import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WAFloat from './components/WAFloat';
import Home from './pages/Home';
import './styles/variables.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'SpeedWrench — Bengkel Sepeda Profesional di Bandung | Jasa Service Sepeda';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Bengkel sepeda profesional di Bandung dengan pengalaman 10+ tahun. Layanan tune-up, brake bleed, wheelbuilding, custom build. Garansi 30 hari.';

    // Global IntersectionObserver untuk semua reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('in');
            }, 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all reveal elements
    const observeElements = () => {
      const elements = document.querySelectorAll('.rev, .rev-l, .rev-r');
      elements.forEach((el) => observer.observe(el));
    };

    // Run after mount
    observeElements();

    // Also run on scroll for dynamically loaded content
    const handleScroll = () => {
      observeElements();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="top-stripe"></div>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <WAFloat />
    </>
  );
}

export default App;
