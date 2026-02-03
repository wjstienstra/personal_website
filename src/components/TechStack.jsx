import React from 'react';
import styles from './TechStack.module.css';

// Using ONLY standard FontAwesome icons to prevent white-screen crashes
import { 
  FaReact, 
  FaCss3Alt, 
  FaPython, 
  FaDatabase, 
  FaServer,      // Good generic icon for Flask/Backend
  FaGitAlt, 
  FaTerminal, 
  FaCode,        // Generic code icon for VS Code
  FaChartLine,   // For Strategic Thinking
  FaHandshake,   // For Stakeholder Comms
  FaLightbulb,   // For Entrepreneurship
  FaTasks,        // For Project Mgmt
  FaLock
} from 'react-icons/fa';

function TechStack() {
  const skills = [
    {
      category: "Modern Frontend",
      items: [
        { name: "Next.js (App Router)", icon: <FaReact /> },
        { name: "TypeScript", icon: <FaCode /> },
        { name: "Recharts / Data Vizualtion", icon: <FaChartLine /> }, 
        { name: "Tailwind / CSS Modules", icon: <FaCss3Alt /> },
      ]
    },
    {
      category: "Backend & Data",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Supabase(PostgreSQL)", icon: <FaDatabase /> }, 
        { name: "API Integration", icon: <FaServer /> }, // Code icon fits scripting
        { name: "Authentication & Security", icon: <FaLock /> },
      ]
    },
    {
      category: "The 'Business' Edge",
      items: [
        { name: "Entrepreneurial Mindset", icon: <FaLightbulb /> },
        { name: "Project Leadership", icon: <FaTasks /> },
        { name: "Stakeholder Mgmt", icon: <FaHandshake /> },
        { name: "Strategic Analysis", icon: <FaChartLine /> },
      ]
    }
  ];

  return (
    <section className={styles.stackSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>The Toolbox</h2>
        <p className={styles.subtitle}>
            From heavy machinery to lightweight frameworks. <br /> 
            <span style={{ opacity: 0.8 }}>The right equipment to get the job done.</span>
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