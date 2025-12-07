import React, { useState } from 'react'; // 1. Import useState
import styles from './Navbar.module.css';
// 2. Importeer de hamburger (Bars) en sluit (Times) iconen
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'; 

function Navbar() {
  // 3. De State: is het menu open of dicht? (Standaard dicht: false)
  const [isOpen, setIsOpen] = useState(false);

  // Functie om de state om te draaien (toggle)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        WJ Stienstra<span className={styles.logoAccent}>.</span>
      </a>

      {/* 4. De Hamburger Knop (Alleen zichtbaar op mobiel via CSS) */}
      <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
        {/* Wissel icoon: Kruisje als open, Hamburger als dicht */}
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* 5. De Navigatie Lijst */}
      {/* We voegen een extra class 'open' toe als de state true is */}
      <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
        
        <li className={styles.navItem} onClick={toggleMenu}><a href="#">Home</a></li>
        <li className={styles.navItem} onClick={toggleMenu}><a href="#projects">Projects</a></li>
        <li className={styles.navItem} onClick={toggleMenu}><a href="#about">About</a></li>
        <li className={styles.navItem} onClick={toggleMenu}><a href="#contact">Contact</a></li>
        
        {/* De Social Icons (ook in het mobiele menu) */}
        <li className={styles.separator}>|</li>
        <li className={styles.iconItem}>
            <a href="https://github.com/wjstienstra"><FaGithub /></a>
        </li>
        <li className={styles.iconItem}>
            <a href="https://linkedin.com"><FaLinkedin /></a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;