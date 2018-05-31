import React from 'react'
import Link from 'gatsby-link'
import styles from './Projects.module.css'
import Container from '../components/container'

import { mapStackMockup, saucesomeMockup, theListeningRoomMockup } from '../../images/projects'

import { chevronBlack } from '../../images'

import {
  reactImg,
  bootstrapImg,
  firebaseImg,
  googlemapsImg,
  herokuImg,
  nodeImg,
  postgresqlImg,
} from '../../images/tech'

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

const Project = props => {
  const techImgs = props.techImgs

  return (
    <div className={styles.project}>
      <div className={styles.description}>
        <div className={styles.projectname}>
          <h2>{props.projectname}</h2>
        </div>
        <div>
          <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
      </div>
      <div className={styles.mockupAndLinks}>
        <div className={styles.mockupContainer}>
          <img src={props.mockup} className={styles.mockup} alt="" />
          <div className={styles.mockupOverlay}>
            <div className={styles.techStack}>
              {techImgs
                ? techImgs.map(image => <img src={image} alt="" />)
                : 'Tech stack loading...'}
            </div>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <a href={props.siteUrl} target="_blank">
            Visit
          </a>
          <a href={props.githubUrl} target="_blank">
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="projects" className={styles.projectsSection}>
    <div className={styles.projectsBar}>
      <h1>Projects</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronBlack} />
      </a>
    </div>
    <div className={styles.projectsContainer}>
      <Project
        projectname="MapStack"
        mockup={mapStackMockup}
        excerpt="A social media platform that allows users to create, follow and stack maps on one another to curate a perfect collection of places to explore in their own neighborhood or halfway around the world."
        siteUrl="https://map-it-fsa.firebaseapp.com/"
        githubUrl="https://github.com/FSACapstone/MapIt"
        techImgs={[reactImg, firebaseImg, nodeImg, googlemapsImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="Saucesome"
        mockup={saucesomeMockup}
        excerpt="A mock e-commerce site that sells a carefully curated selection of gourmet hot sauces from small-match makers around the world. Saucesome also integrates the Mapbox API to show the shoppers where their desired hot sauce is made."
        siteUrl="https://saucesome-fsa.herokuapp.com/"
        githubUrl="https://github.com/saucesome-gs/saucesome"
        techImgs={[reactImg, nodeImg, postgresqlImg, bootstrapImg, herokuImg]}
      />
      <hr className={styles.projectHR} />
      <Project
        projectname="The Listening Room"
        mockup={theListeningRoomMockup}
        excerpt="Passionate about music, Luis Rincon and I developed The Listening Room during a four-day hackathon. By leveraging Firebase's Cloud Storage and Realtime Database, users are able to seamlessly upload mp3 files, and listen and chat about music simultaneously anywhere in the world, without skipping a beat. The minimalistic front-end was built using React and Flexbox."
        siteUrl="https://symbalplayer.firebaseapp.com/"
        githubUrl="https://github.com/TheListeningRoom/the-listening-room"
        techImgs={[reactImg, firebaseImg]}
      />
    </div>
  </div>
)

// Removed website and GitHub buttons:
// <div className={styles.buttons}>
//   <a href={props.siteUrl} target="_blank">
//     <button className="button">{props.projectname}</button>
//   </a>
//   <a href={props.githubUrl} target="_blank">
//     <button className="button">GitHub</button>
//   </a>
// </div>
