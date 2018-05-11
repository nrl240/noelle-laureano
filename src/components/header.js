import React from 'react'
import Link from 'gatsby-link'
import styles from './header.module.css'

import noelle from '../images/noelle.jpg'

const Header = () => (
  <header className={styles.header}>
    <div className={styles.titleNavWrapper}>
      <div className={styles.nameContainer}>
        <h1 className={styles.siteTitle}>
          <a href="/" id="top">
            NOELLE LAUREANO
          </a>
        </h1>
      </div>
      <div className={styles.desktopNav}>
        <nav className={styles.mainNav}>
          <div className={styles.navWrapper}>
            <ul>
              <li>
                <a href="#projects">
                  <span>PROJECTS</span>
                </a>
              </li>
              <li>
                <a href="#resume">
                  <span>RÉSUMÉ</span>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <span>CONTACT</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
