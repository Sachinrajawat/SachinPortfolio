// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setIsNavCollapsed(true);
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a 
          className="navbar-brand" 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <div className="brand-text">
            <span>S</span>
            <span>A</span>
            <span>C</span>
            <span>H</span>
            <span>I</span>
            <span>N</span>
          </div>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={handleNavCollapse}
          aria-expanded={!isNavCollapsed}
        >
          <div className={`hamburger ${!isNavCollapsed ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`}>
          <ul className="navbar-nav ms-auto">
            {[
              { id: 'home', label: 'Home', icon: '🏠' },
              { id: 'about', label: 'Education', icon: '🎓' },
              { id: 'experience', label: 'Experience', icon: '💼' },
              { id: 'skills', label: 'Skills', icon: '⚡' },
              { id: 'projects', label: 'Projects', icon: '💻' },
              { id: 'coding-profiles', label: 'Coding Profiles', icon: '👨‍💻' },
              { id: 'certificates', label: 'Certificates', icon: '🏆' },
              { id: 'contact', label: 'Contact', icon: '📧' }
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <a 
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  <span className="link-icon">{item.icon}</span>
                  <span className="link-text">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;