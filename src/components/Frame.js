import React from 'react'
import styles from './Frame.module.css'

const Frame = () => (
  <div className={styles.frame}>
    <h2>Listen conmigo</h2>
    <div className={styles.spotifyContainer}>
      <iframe
        title="Noelle Laureano's Spotify Playlist 'conmigo'"
        src='https://open.spotify.com/embed/playlist/3q1O39ufBx8G9vhdrv2VpW'
        width='300'
        height='380'
        frameBorder='0'
        allowtransparency='true'
        allow='encrypted-media'
      ></iframe>
    </div>
  </div>
)

export default Frame
