// CodingProfiles.js
import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/CodingProfiles.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function CodingProfiles() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const profiles = [
    {
      platform: "LeetCode",
      username: "sachinrajawat38",
      stats: [
        { label: "Problems Solved", value: "800+" },
        { label: "Contest Rating", value: "1786" }
      ],
      icon: "fas fa-code",
      link: "https://leetcode.com/u/sachinrajawat38/",
      color: "#FFA116",
      gradient: "linear-gradient(135deg, #FFA116 0%, #FF6B6B 100%)",
      ratingData: {
        labels: ['Jun24', 'Jul24', 'Aug24', 'Sep24', 'Oct24', 'Nov24', 'Dec24', 'Jan25', 'Feb25', 'Mar25','Apr25'],
        ratings: [1409, 1416, 1494, 1541, 1515, 1535, 1538, 1576, 1625, 1786, 1751]
      }
    },
    {
      platform: "CodeForces",
      username: "sachinrajawat38",
      stats: [
        { label: "Max Rating", value: "1071" },
        { label: "Status", value: "Active" }
      ],
      icon: "fas fa-terminal",
      link: "https://codeforces.com/profile/sachinrajawat38",
      color: "#1F8ACB",
      gradient: "linear-gradient(135deg, #1F8ACB 0%, #4A90E2 100%)",
      ratingData: {
        labels: ['Sep24', 'Oct24', 'Nov24', 'Dec24', 'Jan25', 'Feb25', 'Mar25', 'Apr25'],
        ratings: [615, 700, 737, 778, 824, 909, 1066, 1071]
      }
    },
    {
      platform: "CodeChef",
      username: "sachin_raj38",
      stats: [
        { label: "Rating", value: "1519" },
        { label: "Rank", value: "2⭐" }
      ],
      icon: "fas fa-code-branch",
      link: "https://www.codechef.com/users/sachin_raj38",
      color: "#FFB800", // Changed to yellow
      gradient: "linear-gradient(135deg, #FFB800 0%, #FFDA33 100%)", 
      ratingData: {
        labels: ['Sep24', 'Oct24', 'Nov24', 'Dec24', 'Jan25', 'Feb25', 'Mar25'],
        ratings: [1377, 1472, 1445, 1398, 1132, 1275, 1405]
      }
    },
    {
      platform: "GeeksforGeeks",
      username: "sachinramdrj",
      stats: [
        { label: "Problems Solved", value: "100+" },
        { label: "Coding Score", value: "308" }
      ],
      icon: "fas fa-laptop-code",
      link: "https://www.geeksforgeeks.org/user/sachinramdrj/",
      color: "#2F8D46",
      gradient: "linear-gradient(135deg, #2F8D46 0%, #4CAF50 100%)",
      ratingData: {
        labels: ['Sep24', 'Oct24', 'Nov24', 'Dec24', 'Jan25', 'Feb25', 'Mar25'],
        ratings: [1300, 1350, 1450, 1430, 1520, 1580, 1645]
      }
    }
  ];

  const getChartOptions = (platform) => ({
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        borderWidth: 1
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutQuart'
    }
  });

  const getChartData = (profile) => ({
    labels: profile.ratingData.labels,
    datasets: [
      {
        label: 'Rating',
        data: profile.ratingData.ratings,
        borderColor: profile.color,
        backgroundColor: `rgba(${hexToRgb(profile.color)}, 0.1)`,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#fff',
        pointBorderColor: profile.color,
        pointHoverRadius: 6,
        borderWidth: 3
      }
    ]
  });

  const handleScrollClick = () => {
    const contactSection = document.getElementById('certificates');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
      : '255, 255, 255';
  };

  return (
    <section id="coding-profiles">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Coding Profiles
        </motion.h2>

        <div className="profiles-grid" ref={ref}>
          {profiles.map((profile, index) => (
            <motion.div 
              className="profile-card" 
              key={index}
              style={{ 
                '--accent-color': profile.color,
                '--accent-gradient': profile.gradient
              }}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.5,
                    delay: index * 0.2 
                  }
                }
              }}
            >
              <div className="profile-header">
                <div className="platform-icon">
                  <i className={profile.icon}></i>
                </div>
                <h3 className="platform-name">{profile.platform}</h3>
                <p className="username">@{profile.username}</p>
              </div>

              {profile.ratingData && (
                <div className="rating-graph">
                  <h4>Rating Progress</h4>
                  <div className="graph-container">
                    <Line 
                      data={getChartData(profile)} 
                      options={getChartOptions(profile.platform)}
                    />
                  </div>
                </div>
              )}

              <div className="profile-stats">
                {profile.stats.map((stat, idx) => (
                  <motion.div 
                    className="stat-item" 
                    key={idx}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-value">{stat.value}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a 
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Profile <i className="fas fa-external-link-alt"></i>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="scroll-indicator" 
          onClick={handleScrollClick} 
          role="button" 
          tabIndex={0}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CodingProfiles;