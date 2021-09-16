import React from 'react'
import * as styles from './Header.module.css'

let marginY = 0
let destination = 0
let speed = 15
let scroller = null

export const initScroll = (elementId) => {
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

const Header = () => (
  <header className={styles.header}>
    <div className={styles.titleNavWrapper}>
      <div className={styles.nameContainer}>
        <h1 className={styles.siteTitle}>
          <a href='/' id='top'>
            NOELLE LAUREANO
          </a>
        </h1>
      </div>

      <div className={styles.desktopNav}>
        <nav className={styles.mainNav}>
          <div>
            <ul>
              <li>
                <a onClick={() => initScroll('resume')} href='#resume'>
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a onClick={() => initScroll('projects')} href='#projects'>
                  PROJECTS
                </a>
              </li>
              <li>
                <a href='mailto:nrlaureano@gmail.com?subject=HELLO!'>CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
)

export default Header
