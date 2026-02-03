import React from 'react';
import styles from './FeaturedProjects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import cs50xScreenshot from '../assets/cs50x_screenshot.png'; // Placeholder image path
import cs50pScreenshot from '../assets/cs50p_screenshot.png'; // Placeholder image path

function FeaturedProjects() {
  // Project Data: focused on the "Problem vs Solution" narrative
  const projects = [
    
    {
      id: 1,
      title: "AI Stock News Feed",
      category: "CS50x Final Project • Full Stack Web App",
      description: "A personalized investor dashboard that aggregates real-time company news via the Finnhub API and uses Google's Gemini LLM to generate concise summaries. To optimize API usage and improve load times, I implemented a custom caching system within the SQLite database.",
      techStack: ["Python", "Flask", "Gemini API", "SQLite", "Bootstrap"],
      links: {
        github: "https://github.com/wjstienstra/CS50x-Final-Project", // Add specific repo link
        demo: "https://youtu.be/dqWKdGMhh_E"
      },
      image: cs50xScreenshot,
      imageColor: "#1E4D55" // Placeholder color (Teal) until you have screenshots
    },
    {
      id: 2,
      title: "Bitcoin Strategic Analyzer",
      category: "CS50p Final Project • Data Engineering",
      // Focus op: Data aggregatie, Scraping, en complexe logica
      description: "A Python-based analytical tool that calculates a 'Strategic Buy Score' (0-100) using live market data. The script combines API integration with web scraping (BeautifulSoup) to analyze three weighted metrics: Halving Cycles, Price Drawdown, and Market Sentiment.",
      techStack: ["Python", "BeautifulSoup", "APIs", "Algorithms"],
      links: {
        github: "https://github.com/wjstienstra/CS50p-Final-Project", // Vul hier de link naar je CS50p repo in
        demo: "https://youtu.be/0q0WB7jf-oU" // Je YouTube video!
      },
      image: cs50pScreenshot,
      imageColor: "#13343A" 
    }
  ];

  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.container}>
        
        <h2 className={styles.sectionTitle}>Featured Work</h2>
        
        <div className={styles.projectList}>
          {projects.map((project) => (
            // We use the index to determine layout direction (even vs odd)
            <article key={project.id} className={styles.projectItem}>
              
              {/* Image Column */}
              <div className={styles.imageColumn}>
                {/* Check: Is er een echt plaatje? Toon die. Anders de placeholder kleur. */}
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={`${project.title} Screenshot`} 
                    className={styles.projectImage} // We maken zo een class hiervoor
                  />
                ) : (
                  <div 
                    className={styles.imagePlaceholder} 
                    style={{ backgroundColor: project.imageColor }}
                  >
                    <span className={styles.placeholderText}>{project.title}</span>
                  </div>
                )}
              </div>

              {/* Content Column */}
              <div className={styles.contentColumn}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                
                <div className={styles.descriptionBox}>
                    <p>{project.description}</p>
                </div>

                <ul className={styles.techList}>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>

                <div className={styles.links}>
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                      <FaGithub />
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProjects;