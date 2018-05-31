import React from 'react'
import Link from 'gatsby-link'
import styles from './About.module.css'

import { Container } from './'

import { chevronBlack, noelle } from '../images'
import { singer, realmadrid, plane, spain, denmark } from '../images/extra'

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutMe}>
      <div className={styles.aboutPhoto}>
        <img src={noelle} />
      </div>
      <div className={styles.aboutText}>
        <h2>– Hey there! I'm Noelle Laureano, a full-stack developer.</h2>
        <p>
          Collaborating, designing, and programming energize me. I love every
          aspect of bringing an idea to fruition and find each step of the way
          invigorating.
        </p>
      </div>
    </div>

    <div className={styles.aboutExtra}>
      <h2>When I'm not coding, you can find me...</h2>
      <div className={styles.extrasContainer}>
        <div className={styles.extra}>
          <img src={singer} />
          <p>
            At a concert<br />
            RIP Glasslands
          </p>
        </div>
        <div className={styles.extra}>
          <img src={realmadrid} />
          <p>
            Watching soccer<br />
            ¡Hala Madrid!
          </p>
        </div>
        <div className={styles.extra}>
          <img src={plane} />
          <p>
            Visiting friends<br />
            <img src={spain} />
            <img src={denmark} />
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default About
