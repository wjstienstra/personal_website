import React from 'react';
import styles from './ProjectsPage.module.css';
import { FaGithub, FaExternalLinkAlt, FaPython, FaLaptopCode } from 'react-icons/fa';

import JavaScript_Calculator from '../assets/js_calculator.png';
import Pomodoro_clock from '../assets/pomodoro_clock.png';
import Scatter_Plot from '../assets/scatter_plot.png';
import CS50p_screenshot from '../assets/cs50p_screenshot.png';
import CS50x_screenshot from '../assets/cs50x_screenshot.png';

// New Array

const projectsData = [
  {
    id: 1,
    title: 'AI News Dashboard',
    category: 'CS50x Final Project',
    year: "2025",
    description: 'A personalized news aggregator that filters market noise. It pulls real-time data via the Finnhub API and leverages Google\'s Gemini LLM to generate concise news summaries for investors. Built with a custom SQLite caching layer for efficiency.',
    tags: ['Python', 'Flask', 'Gemini AI', 'SQLite'],
    links: {
      demo: 'https://youtu.be/dqWKdGMhh_E', 
      code: 'https://github.com/wjstienstra/CS50x-Final-Project'
    },
    image: CS50x_screenshot
  },
  {
    id: 2,
    title: 'Bitcoin Strategic Analyzer',
    category: 'CS50p Final Project',
    year: "2024",
    description: 'A pure Python analytical tool that calculates a "Strategic Buy Score" based on on-chain metrics. It combines API data with web scraping logic (BeautifulSoup) to analyze Halving Cycles and Market Sentiment, outputting a clear actionable signal.',
    tags: ['Python', 'Pandas', 'BeautifulSoup', 'APIs'],
    links: {
      demo: 'https://youtu.be/0q0WB7jf-oU',
      code: 'https://github.com/wjstienstra/CS50p-Final-Project'
    },
    image: CS50p_screenshot
  },

  {
    id: 3,
    title: 'Doping in Cycling',
    category: 'Data Visualization - FreeCodeCamp',
    year: "2019",
    description: 'Interactive scatterplot analyzing historical cycling data. It visualizes the correlation between top climb times and doping allegations using D3.js. Features custom tooltips and responsive axis scaling.',
    tags: ['D3.js', 'Data Viz', 'JSON', 'SVG'],
    links: {
      demo: 'https://codepen.io/wjstienstra/full/agbbNe', 
      code: 'https://codepen.io/wjstienstra/pen/agbbNe'
    },
    image: Scatter_Plot
  },
  {
    id: 4,
    title: 'JavaScript Calculator',
    category: 'React Component - FreeCodeCamp',
    year: "2019",
    description: 'A fully functional calculator with complex state management. Handles decimal logic, order of operations, and input validation without relying on `eval()`.',
    tags: ['React', 'Algorithms', 'CSS Grid'],
    links: {
      demo: 'https://codepen.io/wjstienstra/full/arbMPa',
      code: 'https://codepen.io/wjstienstra/pen/arbMPa'
    },
    image: JavaScript_Calculator
  },
  {
    id: 1,
    title: 'Productivity Session Timer',
    category: 'React App - FreeCodeCamp',
    year: "2019",
    description: 'Configurable "Pomodoro" timer, that switches between work and break sessions. Built to deeply understand React Lifecycle Methods and state management.',
    tags: ['React', 'Moment.js', 'Bootstrap'],
    links: {
      demo: 'https://codepen.io/wjstienstra/full/KEBxKv', 
      code: 'https://codepen.io/wjstienstra/pen/KEBxKv'
    },
    image: Pomodoro_clock
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
                <div className={styles.metaRow}>
                  <span className={styles.category}>{project.category}</span>
                  <span className={styles.year}>{project.year}</span>
                </div>
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