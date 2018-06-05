import React from 'react'
import styles from './About.module.css'

import { noelle } from '../images'
import { concert, realmadrid, plane } from '../images/extra'

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutMe}>
      <div className={styles.aboutPhoto}>
        <img src={noelle} />
      </div>
      <div className={styles.aboutText}>
        <h2>– Hey there! I'm Noelle Laureano, a full-stack developer.</h2>
        <h3>
          I believe in a thing called programming.<br />
          Collaborating, designing, and programming energize me. I love every
          aspect of bringing an idea to fruition and find each step of the way
          invigorating.
        </h3>
      </div>
    </div>
  </div>
)

export default About
