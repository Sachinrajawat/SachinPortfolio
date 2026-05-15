// Experience.js
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      company: "MAQ Software",
      role: "Associate Software Engineer",
      location: "Noida, Uttar Pradesh",
      duration: "May 2025 – May 2026",
      icon: "fas fa-building",
      color: "#FF9100",
      responsibilities: [
        "Migrated 200+ applications to a centralized dependency management system by replacing manually pinned versions with standardized references across JVM services",
        "Resolved build and dependency validation issues during onboarding, standardizing 7–14 libraries per application to ensure compatible and stable releases",
        "Implemented dual write logic for a large scale configuration migration, updating schemas and protobufs, and validating changes across 8+ Premium flows in test and production environments"
      ],
      tech: ["Java", "JVM", "gRPC", "Protobuf", "Docker"]
    },
    {
      company: "Outlier",
      role: "AI Data Specialist",
      location: "Remote",
      duration: "Sept 2024 – Jan 2025",
      icon: "fas fa-robot",
      color: "#64ffda",
      responsibilities: [
        "Designed 200+ evaluation prompts across coding, math, and reasoning domains to assess large language model performance and instruction-following capability",
        "Ranked 400+ model-generated responses across multiple model versions, improving post-training data quality through structured feedback aligned with RLHF evaluation workflows"
      ],
      tech: ["LLMs", "RLHF", "Prompt Engineering", "Model Evaluation"]
    }
  ];

  const handleScrollClick = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="experience">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              className="experience-card"
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ '--accent-color': exp.color }}
            >
              <div className="experience-icon">
                <i className={exp.icon}></i>
              </div>

              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title-block">
                    <h3 className="company-name">{exp.company}</h3>
                    <p className="role-name">{exp.role}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="duration">
                      <i className="far fa-calendar-alt"></i>
                      {exp.duration}
                    </span>
                    <span className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                {exp.tech && exp.tech.length > 0 && (
                  <div className="experience-tech">
                    {exp.tech.map((t, idx) => (
                      <span className="tech-pill" key={idx}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
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
      </div>
    </section>
  );
}

export default Experience;
