import React from 'react';
import styles from './AboutPage.module.css';
// Je kunt hier t.z.t. andere foto's importeren, bijv:
// import triathlonImg from '../assets/triathlon.jpg';

function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        {/* HEADER: The Personal Intro */}
        <header className={styles.header}>
          <h1 className={styles.title}>More than just code.</h1>
          <p className={styles.intro}>
            From construction sites to musical compositions, my journey has never been linear. 
            But one thread connects it all: <strong>The urge to create.</strong>
          </p>
        </header>

        {/* SECTION 1: The Origin (Willie Wortel) */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.subtitle}>The Inventor's Mindset</h2>
            <p>
              As a kid, I had a vivid imagination. I dreamt of becoming an inventor, a sort of 
              "Willie Wortel" (Gyro Gearloose). I realized early on that creating something new 
              was my guiding principle.
            </p>
            <p>
              Whether it's finding a smarter solution on a construction site or debugging a complex 
              Python script, that childhood curiosity is still what drives me today. I don't just 
              want to use software; I want to understand how it works and build it better.
            </p>
          </div>
        </section>

        {/* SECTION 2: The Discipline (Sports & Music) */}
        <section className={`${styles.section} ${styles.reverse}`}>
           {/* If you have a photo of triathlon/music, putting it here would be awesome */}
           {/* <div className={styles.imageBlock}><img src={triathlonImg} /></div> */}
           
          <div className={styles.textBlock}>
            <h2 className={styles.subtitle}>Endurance & Creativity</h2>
            <p>
              <strong>Triathlon:</strong> Training for a triathlon taught me that big goals are achieved 
              through small, consistent steps. It requires discipline, grit, and the mental fortitude 
              to keep going when things get tough—skills that transfer directly to solving difficult coding problems.
            </p>
            <p>
              <strong>Music:</strong> Writing music is about structure, rhythm, and flow. 
              Surprisingly, writing clean code feels very similar. It’s about composing logic 
              that is not only functional but also elegant and readable.
            </p>
          </div>
        </section>

        {/* SECTION 3: The World View (Travel & Business) */}
        <section className={styles.section}>
          <div className={styles.textBlock}>
            <h2 className={styles.subtitle}>Global Perspective</h2>
            <p>
              My background isn't typical. I hold an <strong>MSc in Entrepreneurship</strong> and have 
              managed construction projects across the Netherlands, Belgium, and Germany. 
              I've traveled through India and Nepal, experiencing everything from silent meditation to earthquakes.
            </p>
            <p>
              This diverse experience allows me to communicate effectively with stakeholders from all walks of life. 
              I understand the business goals behind the code, and I know how to deliver value in the real world.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}

export default AboutPage;