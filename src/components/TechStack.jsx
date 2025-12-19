import React from 'react';
import styles from './TechStack.module.css';

// Using ONLY standard FontAwesome icons to prevent white-screen crashes
import { 
  FaReact, 
  FaJs, 
  FaCss3Alt, 
  FaBootstrap, 
  FaPython, 
  FaDatabase, 
  FaServer,      // Good generic icon for Flask/Backend
  FaGitAlt, 
  FaTerminal, 
  FaCode,        // Generic code icon for VS Code
  FaChartLine,   // For Strategic Thinking
  FaHandshake,   // For Stakeholder Comms
  FaLightbulb,   // For Entrepreneurship
  FaTasks        // For Project Mgmt
} from 'react-icons/fa';

function TechStack() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript (ES6+)", icon: <FaJs /> },
        { name: "CSS Modules", icon: <FaCss3Alt /> }, 
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ]
    },
    {
      category: "Backend & Data",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Flask", icon: <FaServer /> }, // Using Server icon as safe Flask alternative
        { name: "SQL / SQLAlchemy", icon: <FaDatabase /> }, 
        { name: "Web Scraping", icon: <FaCode /> }, // Code icon fits scripting
      ]
    },
    {
      category: "Tools & Core",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "VS Code", icon: <FaCode /> },
        { name: "Command Line", icon: <FaTerminal /> },
        { name: "Problem Solving", icon: <FaLightbulb /> }, 
      ]
    },
    {
      category: "Business Value",
      items: [
        { name: "Entrepreneurship", icon: <FaLightbulb /> },
        { name: "Project Mgmt", icon: <FaTasks /> },
        { name: "Stakeholder Comms", icon: <FaHandshake /> },
        { name: "Strategic Thinking", icon: <FaChartLine /> },
      ]
    }
  ];

  return (
    <section className={styles.stackSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Toolbox</h2>
        <p className={styles.subtitle}>
            Bridging the gap between technical logic and business strategy.
        </p>

        <div className={styles.grid}>
            {skills.map((group, index) => (
                <div key={index} className={styles.card}>
                    <h3 className={styles.categoryTitle}>{group.category}</h3>
                    <ul className={styles.list}>
                        {group.items.map((skill, i) => (
                            <li key={i} className={styles.listItem}>
                                {/* Check if icon exists before rendering */}
                                {skill.icon && <span className={styles.icon}>{skill.icon}</span>}
                                {skill.name}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;