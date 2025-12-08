import React from 'react';
import styles from './TechStack.module.css';
import { FaPython, FaReact, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiFlask, SiJavascript, SiPostgresql, SiTailwindcss, SiVite } from 'react-icons/si';
import { MdBusinessCenter } from 'react-icons/md';

function TechStack() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "CSS Modules", icon: <SiTailwindcss /> }, // Using generic icon or specific if available
      ]
    },
    {
      category: "Backend & Data",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Flask", icon: <SiFlask /> },
        { name: "SQL / Postgres", icon: <SiPostgresql /> },
        { name: "REST APIs", icon: <FaDocker /> }, // Generic placeholder or specific icon
      ]
    },
    {
      category: "Tools & Core",
      items: [
        { name: "Git & GitHub", icon: <FaGitAlt /> },
        { name: "VS Code", icon: null },
        { name: "Command Line", icon: null },
        { name: "Problem Solving", icon: null },
      ]
    },
    {
      category: "Business Value",
      items: [
        { name: "Entrepreneurship", icon: <MdBusinessCenter /> },
        { name: "Project Mgmt", icon: null },
        { name: "Stakeholder Comms", icon: null },
        { name: "Strategic Thinking", icon: null },
      ]
    }
  ];

  return (
    <section className={styles.stackSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Toolbox</h2>
        <p className={styles.subtitle}>
            A mix of technical skills and business acumen.
        </p>

        <div className={styles.grid}>
            {skills.map((group, index) => (
                <div key={index} className={styles.card}>
                    <h3 className={styles.categoryTitle}>{group.category}</h3>
                    <ul className={styles.list}>
                        {group.items.map((skill, i) => (
                            <li key={i} className={styles.listItem}>
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