import { useEffect, useState } from 'react';
import './SectionNav.scss';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

function SectionNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(entry => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="section-nav">
      {sections.map((id) => (
        <div
          key={id}
          className={`nav-item ${activeSection === id ? 'active' : ''}`}
          onClick={() => scrollTo(id)}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </div>
      ))}
    </div>
  );
}

export default SectionNav;
