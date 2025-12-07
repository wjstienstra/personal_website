import React from 'react';
import styles from './FeaturedProjects.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function FeaturedProjects() {
  // Project Data: focused on the "Problem vs Solution" narrative
  const projects = [
    {
      id: 1,
      title: "AI News Aggregator",
      category: "Full Stack Web App",
      description: "In a world of information overload, tracking specific company news is time-consuming. I built a solution that aggregates real-time data and uses AI to generate concise summaries, allowing users to stay informed in minutes instead of hours.",
      techStack: ["Python", "Flask", "OpenAI API", "SQLAlchemy", "Jinja2"],
      links: {
        github: "https://github.com/wjstienstra", // Add specific repo link
        demo: null // Add live link if available
      },
      imageColor: "#1E4D55" // Placeholder color (Teal) until you have screenshots
    },
    {
      id: 2,
      title: "Construction Logistics App",
      category: "Mobile Application (React Native)",
      description: "Developing a cross-platform mobile solution for a construction client to streamline administrative tasks. The app replaces paper-based workflows with a digital interface, reducing errors and saving on-site reporting time.",
      techStack: ["React Native", "Expo", "JavaScript", "Mobile UX"],
      links: {
        github: "https://github.com/wjstienstra",
        demo: null
      },
      imageColor: "#C0A062" // Placeholder color (Gold)
    }
  ];

  return (
    <section id="projects" className={styles.projectSection}>
      <div className={styles.container}>
        
        <h2 className={styles.sectionTitle}>Featured Work</h2>
        
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            // We use the index to determine layout direction (even vs odd)
            <article key={project.id} className={styles.projectItem}>
              
              {/* Image Column */}
              <div className={styles.imageColumn}>
                <div 
                    className={styles.imagePlaceholder} 
                    style={{ backgroundColor: project.imageColor }}
                >
                    {/* Ideally, put an <img /> here later */}
                    <span className={styles.placeholderText}>{project.title} Screenshot</span>
                </div>
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