import React from 'react';
import styles from './AboutPage.module.css';
import { FaDownload, FaArrowRight } from 'react-icons/fa';

// Import je bikepacking foto hier
import bikeImg from '../assets/ierland.jpeg'; // Zorg dat je deze hebt

function AboutPage() {
  return (
    <div className={styles.pageWrapper}>

      <div className={styles.heroBanner}>
          <img src={bikeImg} alt="Cycling in Ireland" className={styles.bannerImage} />
      </div>

      <div className={styles.container}>        
        {/* HEADER */}
        <header className={styles.header}>
          <h1 className={styles.title}>Built to last.</h1>
          <p className={styles.intro}>
            From building concrete foundations to architecting software solutions. The materials have changed, but the principles remain:
            <strong> Structure, stability, and getting the job done.</strong>
          </p>
        </header>

        {/* SECTION 1: The Origin */}
        <section className={styles.textSection}>
          <h2 className={styles.subtitle}>The Entrepreneurial Mindset</h2>
          <p>
            I've always had the urge to create. As a kid, I wanted to be Willie Wortel (Gyro Gearloose)—inventing things from scratch. That curiosity to <span className={styles.highlight}>build new things</span> never left.</p>
          <p>
            During my Master's in Entrepreneurship—where I analyzed business models for my thesis, I became fascinated by software. How code is the <span className={styles.highlight}>ultimate leverage</span> to turn abstract ideas into scalable reality. I dove into the startup world as a growth hacker and even tried to launch my own company, all while working in construction to pay the bills—something I had started doing during university.</p>
          <p>
            I love to learn and take on new challenges, but looking back, it's obvious I was spread too thin. Great ideas require focused execution, and I've always had a wide range of interests—from running an investment club to training for a triathlon. I shelved the startup idea, but I kept coming back to programming. Entrepreneurship and investing taught me how to analyze value, but I didn't want to read about or pitch ideas. I wanted to <span className={styles.highlight}>engineer</span> them.</p>            
        </section>

        {/* SECTION 2: The Construction Experience (USP) */}
        <section className={styles.highlightSection}>
          <div className={styles.highlightContent}>
            <h2 className={styles.subtitle}>Why a former <span className={styles.highlight}>Steel Fixer</span> might be a good fit.</h2>
            <p>
                Working in construction as a project lead taught me skills that bootcamps can't teach. It wasn't just about heavy lifting; it was about <strong>precision engineering</strong>, about delivering under time pressure. Translating complex blueprints and managing both people and deadlines.
            </p>
            <ul className={styles.learningList}>
                <li>
                    <strong>From Blueprint to Reality:</strong> Plans on paper are perfect; reality is not. I learned to spot structural flaws early and find creative solutions with the resources at hand. I bring this <span className={styles.highlight}>pragmatic creativity</span> to software: strict on architecture, but flexible in execution.
                </li>
                <li>
                    <strong>The Communication Bridge:</strong> I’ve managed large teams and navigated stakeholders ranging from architects to laborers. 
                    I know how to translate abstract business goals into actionable tasks for the team—<span className={styles.highlight}>bridging the gap</span> between the boardroom and the build.
                </li>
                <li>
                    <strong>High-Stakes Deployment:</strong> In construction you can't "undo" a concrete pour. This taught me a rigorous approach to <span className={styles.highlight}>quality control</span>. I build robustly, test thoroughly, and don't rely on hotfixes.
                </li>
                <li>
                    <strong>Pressure Management:</strong> I’ve managed teams in rain, snow, and strict deadlines. 
                    Debugging a server error is stressful, but it’s nothing compared to a finishing a floor while concrete is already being poured. I learned to <span className={styles.highlight}>stay calm</span> when the heat is on.
                </li>
            </ul>
          </div>
        </section>



        {/* SECTION 3: Personal / Hobbies (Met Foto!) */}
        <section className={styles.personalSection}>            
            <div className={styles.personalText}>
                <h2 className={styles.subtitle}>Offline Mode</h2>
                <p>
                    When I’m not coding, I’m usually testing my endurance or my logic.
                </p>
                
                <div className={styles.hobbyItem}>
                    <h3>🚲 Bikepacking & Endurance</h3>
                    <p>
                        I love self-supported cycling trips and pushing my limits. Whether it's crossing the Alps or exploring local trails, 
                        it teaches you to prepare for the unexpected and just keep pedaling.
                    </p>
                </div>

                <div className={styles.hobbyItem}>
                    <h3>📈 The Investor</h3>
                    <p>
                        Running a private investment club is more than just a hobby. It sharpens my analytical skills and teaches me about human psychology and how to make decisions with imperfect knowledge. 
                    </p>
                </div>

                <div className={styles.hobbyItem}>
                    <h3>♟️ Music & Strategy</h3>
                    <p>
                        From playing chess to composing music: I'm always looking for patterns. 
                        Programming is simply the most powerful language to express those patterns.
                    </p>
                </div>
            </div>
        </section>

        {/* SECTION 4: CV Download */}
        <section className={styles.ctaSection}>
            <div className={styles.divider}></div>
            <p className={styles.ctaText}>
                Want to see the formal timeline?
            </p>
            <a href="/WJ_Stienstra_Resume.pdf" download className={styles.downloadBtn}>
                <FaDownload className={styles.btnIcon} /> Download Resume
            </a>
        </section>

      </div>
    </div>
  );
}

export default AboutPage;