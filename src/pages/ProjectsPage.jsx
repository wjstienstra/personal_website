import React from 'react';
import styles from './ProjectsPage.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectsPage() {
  // Manual Archive Data
  // This allows you to list things that aren't on GitHub yet, or private work.
  const allProjects = [
    {
      year: "2025",
      title: "AI News Aggregator",
      madeAt: "CS50x Final Project",
      builtWith: ["Flask", "Python", "SQL", "Jinja2"],
      link: "https://github.com/wjstienstra", // Can be null if private
    },
    {
      year: "2024",
      title: "Crypto Trading CLI",
      madeAt: "CS50 Python",
      builtWith: ["Python", "Pandas", "APIs"],
      link: "https://github.com/wjstienstra",
    },
    {
      year: "2024",
      title: "Construction Logistics App",
      madeAt: "Freelance Client",
      builtWith: ["React Native", "Expo", "Firebase"],
      link: null, // Private client work
    },
    {
      year: "2023",
      title: "Portfolio v1",
      madeAt: "Personal",
      builtWith: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/wjstienstra",
    },
     {
      year: "2016",
      title: "Growth Dashboard",
      madeAt: "Plot Projects",
      builtWith: ["Excel", "VBA", "Analytics"],
      link: null, 
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Archive</h1>
          <p className={styles.subtitle}>A list of things I’ve built.</p>
        </header>

        {/* The Table Layout */}
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.yearCol}>Year</th>
                        <th className={styles.titleCol}>Project</th>
                        <th className={styles.madeCol}>Made at</th>
                        <th className={styles.techCol}>Built with</th>
                        <th className={styles.linkCol}>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {allProjects.map((project, index) => (
                        <tr key={index} className={styles.row}>
                            <td className={styles.yearCell}>{project.year}</td>
                            <td className={styles.titleCell}>{project.title}</td>
                            <td className={styles.madeCell}>{project.madeAt}</td>
                            <td className={styles.techCell}>
                                <div className={styles.techTags}>
                                    {project.builtWith.map((tech, i) => (
                                        <span key={i} className={styles.techTag}>{tech}</span>
                                    ))}
                                </div>
                            </td>
                            <td className={styles.linkCell}>
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="View Project">
                                        <FaGithub className={styles.icon} />
                                    </a>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;