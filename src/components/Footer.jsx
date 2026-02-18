import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck, FaFileDownload } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = React.useState(false);
  const email = "wjstienstra@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        
          <div className={styles.ctaSection}>
            <h2 className={styles.ctaTitle}>Ready to build something robust?</h2>
            <p className={styles.ctaText}>
                I am currently open for opportunities as a Full Stack Engineer. Looking for a developer who understands both the code and the business case? Let's talk.
            </p>

            {/* De Smart Copy Button */}
            <button 
                onClick={handleCopyEmail} 
                className={styles.ctaButton}
                title="Click to copy email"
            >
                {/* Wissel icoon en tekst op basis van status */}
                {copied ? <FaCheck className={styles.btnIcon} /> : <FaEnvelope className={styles.btnIcon} />}
                <span style={{ marginLeft: '8px' }}>
                    {copied ? "Email Copied!" : email}
                </span>
            </button>
            <span className={styles.copyHint}>Click to copy email address</span>
        </div>

        <div className={styles.divider}></div>

        {/* Bottom Section: Links & Copyright */}
        <div className={styles.bottomSection}>
            
            <div className={styles.brand}>
                <span className={styles.name}>WJ Stienstra</span>
                <span className={styles.copyright}>&copy; {currentYear} — Built with React & Vite.</span>
            </div>


            <div className={styles.socialsWrapper}>
                <a 
                  href="/WJ_Stienstra_Resume.pdf" 
                  download 
                  className={styles.resumeLink}
                  aria-label="Download Resume"
                >
                   <FaFileDownload /> Resume
                </a>

                <div className={styles.verticalDivider}></div>
                
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
                        href="https://linkedin.com/in/willemjanstienstra" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;