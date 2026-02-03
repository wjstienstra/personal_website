import React from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaPython, FaReact } from 'react-icons/fa';
import { SiFlask, SiJavascript } from 'react-icons/si';

function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
    
        <span className={styles.intro}>
           MSc BA: Entrepreneurship <span className={styles.separator}>//</span> Full Stack Engineer
        </span>

        <h1 className={styles.headline}>
          From Concrete<br />
          <span className={styles.highlight}>To Clean Code.</span>
        </h1>

        <p className={styles.subtext}>
          Whether on a construction site or a web app, I take pride in quality. I bring a builder's discipline to software engineering: reliable, logical, and built to last.
        </p>

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