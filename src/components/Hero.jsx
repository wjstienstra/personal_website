import React from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaPython, FaReact } from 'react-icons/fa';
import { SiFlask, SiJavascript } from 'react-icons/si';

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        
        {/* 1. THE INTRO: Small, spaced out, Space Mono */}
        <span className={styles.intro}>
           MSc BA: Entrepreneurship <span className={styles.separator}>//</span> Self-taught Developer
        </span>
        
        {/* 2. THE HEADLINE: Lighter weight, focused on text color */}
        <h1 className={styles.headline}>
          Business Mindset.<br />
          <span className={styles.highlight}>Technical Craft.</span>
        </h1>
        
        {/* 3. THE SUBTEXT: Clean and readable */}
        <p className={styles.subtext}>
          Bridging the gap between commercial goals and deployed software solutions.
        </p>

        {/* 4. SECONDARY INFO: Tech Stack (The "Proof") */}
        {/* Visual separation: smaller, ghosted, labeled */}
        <div className={styles.techStackWrapper}>
            <span className={styles.techLabel}>Core Stack</span>
            <div className={styles.techIcons}>
                <FaPython />
                <SiFlask />
                <FaReact />
                <SiJavascript />
            </div>
        </div>
     

      </div>
    </section>
  );
}

export default Hero;