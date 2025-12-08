import React from 'react';
import styles from './About.module.css';

function About() {
  // The Data: Your journey translated to value
  // The Data: Your journey translated to value
  const timelineData = [
    {
      year: "2024 - Present",
      title: "Full Stack Development",
      role: "CS50x & CS50 Python (Harvard)",
      description: "Made the definitive switch to software engineering. Completed rigorous computer science training. Built a full-stack Flask application with AI integration and a CLI crypto-trading tool. Focus on Python, clean code, and backend logic.",
      tech: ["Python", "Flask", "React", "SQL"]
    },
    {
      year: "2016",
      title: "Plot Projects",
      role: "Growth Hacking & Data Intern",
      description: "Immersed in a tech startup environment. Developed data analysis skills by building custom dashboards and optimizing growth strategies. Bridged the gap between data insights and sales/marketing execution.",
      tech: ["Data Analysis", "Dashboards", "Growth Hacking", "Startup XP"]
    },
    {
      year: "2014 - 2024",
      title: "Staalvlechter Stien",
      role: "Construction Lead & Entrepreneur",
      description: "Started as an apprentice, grew to manage complex reinforcement projects across the Netherlands, Belgium, and Germany. Developed 'grit', leadership skills, and the ability to deliver under strict deadlines and physical constraints.",
      tech: ["Project Management", "Leadership", "International Operations"]
    },
    {
      year: "2012 - 2014",
      title: "MSc Business Administration",
      role: "VU Amsterdam - Entrepreneurship",
      description: "Specialized in Entrepreneurship. Thesis on 'Open Entrepreneurship in Crowdsourcing Start-ups'. Learned to analyze business models and understand the commercial context of innovation.",
      tech: ["Business Strategy", "Research", "Crowdsourcing"]
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