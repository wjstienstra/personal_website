import React from 'react';
import styles from './ProjectsPage.module.css';
import { FaGithub, FaExternalLinkAlt, FaPython, FaLaptopCode } from 'react-icons/fa';

import JavaScript_Calculator from '../assets/JavaScript_Calculator.png';
import Pomodoro_clock from '../assets/Pomodoro_clock.png';
import Scatter_Plot from '../assets/Scatter_Plot.png';
import CS50p_screenshot from '../assets/CS50p_screenshot.png';
import CS50x_screenshot from '../assets/CS50x_screenshot.png';

// Data Array met al je projecten
const projectsData = [
  // --- De "Big Three" (CodePen) ---
  {
    id: 1,
    title: 'Productivity Session Timer',
    category: 'React App',
    description: 'Een configureerbare timer die wisselt tussen werk- en pauzesessies. Gebouwd om React Lifecycle Methods en state management diepgaand te leren beheersen.',
    tags: ['React', 'Moment.js', 'Bootstrap'],
    links: {
      demo: 'https://codepen.io/wjstienstra/full/KEBxKv', 
      code: 'https://codepen.io/wjstienstra/pen/KEBxKv'
    },
    image: Pomodoro_clock
  },
  {
    id: 2,
    title: 'Doping in Cycling Visualization',
    category: 'Data Visualization',
    description: 'Interactieve scatterplot die historische wielren-data plot. Visualiseert de correlatie tussen toptijden en dopingbeschuldigingen middels D3.js.',
    tags: ['D3.js', 'JSON', 'SVG'],
    links: {
      demo: 'https://codepen.io/wjstienstra/full/agbbNe', // Vul ID in
      code: 'https://codepen.io/wjstienstra/pen/agbbNe'
    },
    image: Scatter_Plot
  },
  {
    id: 3,
    title: 'React Calculator',
    category: 'Web Tool',
    description: 'Een volledig functionele rekenmachine. Bevat complexe logica voor decimalen, volgorde van bewerkingen en input-validatie.',
    tags: ['React', 'JavaScript Logic', 'CSS Grid'],
    links: {
      demo: 'https://codepen.io/wjstienstra/full/arbMPa',
      code: 'https://codepen.io/wjstienstra/pen/arbMPa'
    },
    image: JavaScript_Calculator
  },
  // --- CS50 Final Projects (GitHub) ---
  {
    id: 4,
    title: 'CS50x Final Project', 
    category: 'Full Stack Web App',
    description: 'Mijn afstudeerproject voor CS50x. Een webapplicatie die [BESCHRIJF KORT WAT HET DOET, BIJV: aandelen trackt / sportuitslagen bijhoudt].',
    tags: ['Python', 'Flask', 'SQL', 'HTML/CSS'],
    links: {
      // Als je geen live demo hebt, laat je deze null of leeg
      demo: null, 
      code: 'https://github.com/wjstienstra/CS50x-Final-Project'
    },
    image: CS50x_screenshot
  },
  {
    id: 5,
    title: 'CS50P Final Project',
    category: 'Python Automation',
    description: 'Eindproject voor de Python specialisatie. Een command-line tool die [BESCHRIJF FUNCTIE, BIJV: PDF bestanden converteert / data scrapet].',
    tags: ['Python', 'Pytest', 'Libraries'],
    links: {
      demo: null,
      code: 'https://github.com/wjstienstra/NAAM-VAN-REPO'
    },
    image: CS50p_screenshot
  }
];

function ProjectsPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        
        <header className={styles.header}>
          <h1 className={styles.title}>Projects</h1>
          <p className={styles.intro}>
            A collection of web applications, data visualizations, and scripts built during my journey from FreeCodeCamp to Harvard's CS50.
          </p>
        </header>

        <div className={styles.projectsList}>
          {projectsData.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              
              <div className={styles.cardHeader}>
                <span className={styles.category}>{project.category}</span>
                <h2 className={styles.projectTitle}>{project.title}</h2>
              </div>

              <div className={styles.imageContainer}>
                <img src={project.image} alt={project.title} className={styles.projectImage} /> 
              </div>

              <div className={styles.cardBody}>
                <p className={styles.description}>{project.description}</p>
                
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  {/* Alleen tonen als er een demo link is */}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>
                      <FaExternalLinkAlt style={{marginRight: '8px'}}/> Live Demo
                    </a>
                  )}
                  
                  {/* Code link (GitHub of CodePen) */}
                  <a href={project.links.code} target="_blank" rel="noopener noreferrer" className={styles.linkBtnOutline}>
                    {/* Toon GitHub icoon als het een github link is, anders Code icoon */}
                    {project.links.code.includes('github') ? <FaGithub style={{marginRight: '8px'}}/> : <FaLaptopCode style={{marginRight: '8px'}}/>} 
                    View Code
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectsPage;