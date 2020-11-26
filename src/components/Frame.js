import React from 'react'
import styles from './Frame.module.css'
import { initScroll } from './Header'
// import { turntable } from '../images'

let marginY = 0
let destination = 0
let speed = 20
let scroller = null

const toTop = elementId => {
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

const Frame = () => (
  <div className={styles.frame}>
    <h2>Listen conmigo</h2>
    <div className={styles.spotifyContainer}>
      <iframe src="https://open.spotify.com/embed/playlist/3q1O39ufBx8G9vhdrv2VpW" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  </div>
)

// width="100%"
// height="500"
// frameBorder="0"
// allowTransparency="true"
// allow="encrypted-media"

export default Frame
