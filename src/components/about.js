import React from 'react'
import Link from 'gatsby-link'
import styles from './About.module.css'

import noelle from '../images/noelle.jpg'

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutPhoto}>
      <img src={noelle} />
    </div>
    <div className={styles.aboutText}>
      <h2>
        HELLO!
      </h2>
      <h4>
        I'm Noelle Laureano.<br></br>
        ....ENTER ABOUT ME....<br></br>
      </h4>
    </div>
  </div>
)

export default About

// With seven years of experience
// in finance, building and automating
// solutions for trading and risk
// management desks, I now specialize
// in full-stack web
// development.<br></br>
