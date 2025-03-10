import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';
import sachin from '../assets/sachin.jpeg';
import SachinCV from '../assets/SachinCV.pdf';

function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer',
        'MERN Stack Developer',
        'Web Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleScrollClick = () => {
    const projectsSection = document.getElementById('about');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home">
      <div className="section-container">
        <div className="home-content">
          <div className="profile-container">
            <img src={sachin} alt="Sachin Singh Rajawat" className="profile-image" />
          </div>
          <div className="home-text">
            <h1 className="main-title">
              Hi, I'm <span className="highlight rainbow-text">Sachin Singh Rajawat</span>
            </h1>
            <div className="typing-container">
              I'm a <span ref={typedRef} className="highlight"></span>
            </div>
            <p className="description">
              A passionate developer and Computer Science student at Lovely Professional University,
              specializing in creating comprehensive web solutions with expertise in MERN Stack development.
            </p>
          </div>

          <div className="cta-container">
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">
                View Projects
                <i className="fas fa-project-diagram ms-2"></i>
              </a>
              <a href="#contact" className="btn btn-outline-primary">
                Contact Me
                <i className="fas fa-envelope ms-2"></i>
              </a>
            </div>

            <a 
              href={SachinCV} 
              className="resume-button"
              download="SachinCV.pdf"
            >
            Download CV
            <i className="fas fa-download ms-2"></i>
          </a>
          </div>

          <div className="social-links">
            <a 
              href="https://github.com/Sachinrajawat" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="GitHub"
              className="social-link github"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/sachin-singh-rajawat" 
              target="_blank" 
              rel="noopener noreferrer" 
              title="LinkedIn"
              className="social-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a 
              href="mailto:sachinrajawat38@gmail.com" 
              title="Email"
              className="social-link email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a 
              href="tel:+919826161346" 
              title="Phone"
              className="social-link phone"
            >
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>

      <div 
        className="scroll-indicator" 
        onClick={handleScrollClick} 
        role="button" 
        tabIndex={0}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}

export default Home;