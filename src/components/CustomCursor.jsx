import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Handle hover states for interactive elements
    const interactiveSelectors = 'a, button, .svc-card, .bc, .gi, .tc, .t-small, .pk, .faq-q, .info-row, .brand-item, .pg-tile';
    
    const handleMouseEnter = () => {
      cursor.classList.add('big');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('big');
    };

    document.querySelectorAll(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return <div id="cursor"></div>;
}
