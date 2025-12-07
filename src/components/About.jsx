import React from 'react';
import styles from './About.module.css';

function About() {
  // The Data: Your journey translated to value
  const timelineData = [
    {
      year: "2025",
      title: "CS50x Computer Science (Harvard)",
      role: "Full Stack Development",
      description: "Deep dive into computer science fundamentals (C, Algorithms, Memory). Final Project: A Full Stack Flask application integrating AI to generate news summaries for tracked companies. Proved ability to build complex, data-driven web apps.",
      tech: ["Flask", "SQL", "AI Integration", "JavaScript"]
    },
    {
      year: "2024",
      title: "CS50 Python (Harvard)",
      role: "Back-end Logic & Automation",
      description: "Focused on Pythonic programming and data processing. Final Project: A CLI tool analyzing real-time crypto market data via APIs to provide buy/sell signals. Learned to handle external data streams and logic.",
      tech: ["Python", "APIs", "Data Analysis", "CLI"]
    },
    {
      year: "2014 - Present",
      title: "Staalvlechter Stien",
      role: "Entrepreneur & Construction Lead",
      description: "Started as an apprentice, grew to manage complex reinforcement projects across NL, BE, and DE. Developed 'grit', project management skills, and the ability to deliver under strict deadlines and physical constraints.",
      tech: ["Project Management", "Leadership", "Client Relations"]
    },
    {
      year: "2012 - 2014",
      title: "MSc Business Administration",
      role: "University of Twente", // Or specific uni
      description: "Specialization in Entrepreneurship. Thesis on 'Open Entrepreneurship in Crowdsourcing Startups'. Developed the ability to analyze business models and understand the commercial context of innovation.",
      tech: ["Business Strategy", "Research", "Validation"]
    }
  ];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        
        {/* Section Header */}
        <h2 className={styles.sectionTitle}>The Journey</h2>
        <p className={styles.sectionSubtitle}>
            From business strategy to construction sites, and now: <span className={styles.highlight}>Building Software.</span>
        </p>

        {/* The Timeline */}
        <div className={styles.timeline}>
            {timelineData.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                    
                    {/* The Left Column: Year */}
                    <div className={styles.yearColumn}>
                        <span className={styles.year}>{item.year}</span>
                    </div>

                    {/* The Middle Column: The Line & Dot */}
                    <div className={styles.lineColumn}>
                        <div className={styles.dot}></div>
                        {/* Only show line if it's not the last item */}
                        {index !== timelineData.length - 1 && <div className={styles.line}></div>}
                    </div>

                    {/* The Right Column: Content */}
                    <div className={styles.contentColumn}>

                        <span className={styles.mobileYear}>{item.year}</span>
                        
                        <h3 className={styles.itemTitle}>{item.title}</h3>
                        <span className={styles.itemRole}>{item.role}</span>
                        <p className={styles.itemDescription}>{item.description}</p>
                        
                        {/* Mini tags for skills used in that era */}
                        <div className={styles.tagWrapper}>
                            {item.tech.map((t, i) => (
                                <span key={i} className={styles.tag}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
}

export default About;