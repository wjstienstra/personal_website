import React from 'react';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

function Projects() {
  // Ideally, this data could come from a separate JSON file or API later
  const projectData = [
    {
      title: "AI News Aggregator",
      description: "A full-stack Flask application that allows users to track companies and receive AI-generated news summaries. It handles user authentication, database relationships, and external API integrations to process data.",
      techStack: ["Python", "Flask", "SQL", "OpenAI API", "Jinja2"],
      link: "https://github.com/wjstienstra" // Update with specific link if available
    },
    {
      title: "Mobile Business App",
      description: "Currently developing a cross-platform mobile application for a client in the construction industry. Focusing on modern React Native principles, clean UI/UX, and solving real business administrative problems.",
      techStack: ["React Native", "JavaScript", "Mobile UI", "Expo"],
      link: "https://github.com/wjstienstra"
    }
  ];

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Featured Projects</h2>
        
        <div className={styles.grid}>
          {projectData.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;