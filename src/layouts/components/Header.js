import React from 'react'
import Link from 'gatsby-link'
import styles from './Header.module.css'
import noelle from '../../images/noelle.jpg'

let marginY = 0
let destination = 0
let speed = 15
let scroller = null

const initScroll = (elementId) => {
  destination = document.getElementById(elementId).offsetTop
  scroller = setTimeout(() => {
    initScroll(elementId)
  }, 1)
  marginY += speed
  if (marginY >= destination) {
    clearTimeout(scroller)
  }
  window.scroll(0, marginY)
}

const toTop = () => {
  destination = document.getElementById(elementId).offsetTop
  scroller = setTimeout(() => {
    initScroll(elementId)
  }, 1)
  marginY -= speed
  if (marginY <= 0) {
    clearTimeout(scroller)
  }
  window.scroll(0, marginY)
}

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
                <a
                  onClick={() => initScroll('projects')}
                  href="#projects"
                >
                  <span>PROJECTS</span>
                </a>
              </li>
              <li>
                <a
                  onClick={() => initScroll('resume')}
                  href="#resume"
                >
                  <span>EXPERIENCE</span>
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