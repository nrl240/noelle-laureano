import React from 'react'
import Link from 'gatsby-link'
import styles from './Frame.module.css'
import Container from '../components/container'

import { chevronBlack } from '../images'

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
    <iframe
      src="https://open.spotify.com/embed/user/nrlaureano/playlist/3q1O39ufBx8G9vhdrv2VpW"
      width="100%"
      height="500"
      frameBorder="0"
      allowTransparency="true"
    />
  </div>
)

// allow="encrypted-media"

export default Frame

// src="https://open.spotify.com/embed/user/nrlaureano/playlist/4ZftPeokLbR8PHVfyFiyBV"
