import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        
        {/* Top Section: Call to Action */}
        <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to build something robust?</h2>
            <p className={styles.ctaText}>
                I am currently open for new opportunities as a Full Stack Developer.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <a href="mailto:wjstienstra@gmail.com" className={styles.ctaButton}>
                Say Hello <FaEnvelope className={styles.btnIcon} />
            </a>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Section: Links & Copyright */}
        <div className={styles.bottomSection}>
            
            <div className={styles.brand}>
                <span className={styles.name}>WJ Stienstra</span>
                <span className={styles.copyright}>&copy; {currentYear} — Built with React & Vite.</span>
            </div>

            <div className={styles.socials}>
                <a 
                    href="https://github.com/wjstienstra" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a 
                    href="https://linkedin.com/in/jouw-profiel" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;