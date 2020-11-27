import React from 'react'
import styles from './Extra.module.css'

import { concert, realmadrid, plane } from '../images/extra'

const Extra = () => (
  <div className={styles.aboutExtra}>
    <h2>When I'm not coding, you can find me...</h2>

    <div className={styles.extrasContainer}>
      <div className={styles.extra}>
        <img alt='Real Madrid' src={realmadrid} />
        <p>Watching soccer</p>
      </div>

      <div className={styles.extra}>
        <img alt='Concerts' src={concert} />
        <p>At a concert</p>
      </div>

      <div className={styles.extra}>
        <img alt='Traveling to visit friends' src={plane} />
        <p>Visiting friends</p>
      </div>
    </div>
  </div>
)

export default Extra
