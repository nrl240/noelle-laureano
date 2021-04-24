import React from 'react'
import styles from './About.module.css'

import { noelle } from '../images'

const About = () => (
  <div className={styles.about}>
    <div className={styles.aboutMeContainer}>
      <div className={styles.aboutPhoto}>
        <img src={noelle} alt='' />
      </div>

      <div className={styles.aboutText}>
        <h2>– Hey there! I'm Noelle Laureano, a full-stack engineer.</h2>
        <h4>
          After developing major dashboards in the finance industry for several
          years, the urge to switch contexts and dive further into tech grew too
          strong to ignore.
        </h4>
        <h4>
          In January 2018, I left the security and stability I had always known
          to focus solely on honing and growing my programming skills.
        </h4>
        <h4>
          My passion for developing is unmatched. Every day I wake up pumped to
          collaborate, design and code. I love every aspect of bringing an idea
          to fruition and find each step of the way exciting.
        </h4>

        <div className={styles.techStack}>
          <div>
            <h3>Front-End</h3>
            <h4>JavaScript • ReactJS • Redux • HTML5 • CSS3</h4>
          </div>
          <div>
            <h3>Back-End</h3>
            <h4>
              NodeJS • Express • Ruby on Rails • PostgreSQL
            </h4>
            <h4>
              MySQL • MS SQL Server • AWS
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default About
