import React from 'react';
import styles from './About.module.css';

function About() {
  const timelineData = [
    {
      year: "2025 - Present",
      title: "Full Stack Engineer",
      role: "Open for Work / Personal Projects",
      description: "Building a production-grade client portal for a private crypto fund using React and Next.js. Implemented complex financial visualizations using Recharts and Supabase.",
      tech: ["Next.js", "TypeScript", "Recharts", "React", "Supabase"]
    },
    {
      year: "2024 - 2025",
      title: "Harvard University / Career Switch",
      role: "Computer Science (CS50x & CS50p)",
      description: "The definitive switch to software engineering. Completed rigorous CS curriculum, mastering low-level concepts (C, pointers, Memory Management) before specializing in modern Python web development (Flask).",
      tech: ["Python", "C", "SQL", "Flask", "Algorithms", "Data Structures"]
    },
    {
      year: "2014 - Present",
      title: "Staalvlechter Stien",
      role: "Owner / Construction Lead",
      description: "Managed complex, large-scale reinforcement projects. Responsible for quality, logistics, stakeholder management and leading teams under strict deadlines.",
      tech: ["Project Management", "Operations", "Leadership", "Technical execution"]
    },
    {
      year: "2012 - 2014",
      title: "MSc Business Administration",
      role: "VU Amsterdam - Entrepreneurship",
      description: "Specialized in Entrepreneurship. Thesis on 'Open Entrepreneurship in Crowdsourcing Start-ups'. Developed the analytical skills to dissect business models and understand the commercial context of technical innovation.",
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

          <div className={styles.ctaWrapper} style={{ marginTop: '3rem', textAlign: 'center' }}>
            <a href="/about" className={styles.ctaButton}>
                Read full story &rarr;
            </a>
</div>

      </div>
    </section>
  );
}

export default About;