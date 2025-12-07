import React from 'react';
import styles from './Navbar.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <a href="#" className={styles.logo}>
                WJ Stienstra<span className={styles.logoAccent}>.</span>
            </a>
            <ul className={styles.navList}>.
                <li className={styles.navItem}>Home</li>
                <li className={styles.navItem}>Projects</li>
                <li className={styles.navItem}>About me</li>
                <li className={styles.navItem}>Contact</li>

                <li className={styles.separator}>|</li>
                <li className={styles.iconItem}>
                    <a href="https://github.com..." aria-label="GitHub"><FaGithub /></a>
                </li>
                <li className={styles.iconItem}>
                    <a href="https://linkedin.com..." aria-label="LinkedIn"><FaLinkedin /></a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;