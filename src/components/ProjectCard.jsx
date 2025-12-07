import React from 'react';
import styles from './ProjectCard.module.css';

// We pass data to this component via 'props' to make it reusable
function ProjectCard({ title, description, techStack, link }) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        <p className={styles.description}>
            {description}
        </p>
        
        {/* Render the tech stack tags */}
        <div className={styles.techStack}>
            {techStack.map((tech, index) => (
                <span key={index} className={styles.tag}>
                    {tech}
                </span>
            ))}
        </div>

        {/* Conditional rendering: only show button if a link exists */}
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View Project &rarr;
            </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;