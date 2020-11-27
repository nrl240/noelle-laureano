import React from 'react'
import styles from './Footer.module.css'

import { email, linkedin, github } from '../images/footer'

const Footer = () => (
  <div className={styles.imgsContainer}>
    <a href='mailto:nrlaureano@gmail.com?subject=HELLO!'>
      <img alt='@' src={email} className={styles.iconImg} />
    </a>
    <a
      href='https://www.linkedin.com/in/noellelaureano/'
      target='_blank'
      rel='noreferrer'
    >
      <img alt='LinkedIn' src={linkedin} className={styles.iconImg} />
    </a>
    <a href='https://github.com/nrl240' target='_blank' rel='noreferrer'>
      <img alt='GitHub' src={github} className={styles.iconImg} />
    </a>
  </div>
)

export default Footer
