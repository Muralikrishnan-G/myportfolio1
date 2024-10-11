import React, { useState } from "react";

import styles from "./Navbar.module.css";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return  (
        <nav classname={Styles.navbar}>
        <a className={styles.title} href="/">
            portfolio</a>
        <div className={styles.menu}>
            <ul className={styles.menuitems}>
            <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        ></ul>
                <li>
                    <a href="#about">about</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#about">contact</a>
                </li>
            </ul></div>
    </nav>
    );
};