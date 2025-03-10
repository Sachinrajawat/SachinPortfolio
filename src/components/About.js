// About.js
import React from 'react';
import '../styles/About.css';

function About() {
  const education = [
    {
      degree: "Bachelor of Technology - Computer Science",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      duration: "2022 - 2026",
      score: "CGPA: 8.19"
    },
    {
      degree: "Class XII",
      institution: "St.Michael School",
      location: "Bhind, MP",
      duration: "2020 - 2021",
      score: "Percentage: 78.4%"
    },
    {
      degree: "Class X",
      institution: "Excellence Valley International School",
      location: "Bhind, MP",
      duration: "2018 - 2019",
      score: "Percentage: 88.2%"
    }
  ];

  const handleScrollClick = () => {
    const projectsSection = document.getElementById('skills');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">Education Journey</h2>
        <div className="education-container">
          {education.map((edu, index) => (
            <div className="education-card" key={index}>
              <div className="education-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="education-content">
                <h3 className="degree">{edu.degree}</h3>
                <p className="institution">{edu.institution}</p>
                <p className="location">{edu.location}</p>
                <div className="education-details">
                  <span className="duration">
                    <i className="far fa-calendar-alt"></i> {edu.duration}
                  </span>
                  <span className="score">
                    <i className="fas fa-star"></i> {edu.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
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

export default About;