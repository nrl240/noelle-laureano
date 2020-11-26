import React from 'react'
import { Link } from "gatsby"
import { initScroll } from './Header'
import styles from './Resume.module.css'
// import Container from './'

import {
  porterandsailImg,
  fsaImg,
  mizuhoImg,
  lordabbettImg,
  nyuImg,
  browserImg,
  bankImg,
  fundImg,
  diplomaImg,
} from '../images/resume'

import { chevronWhite } from '../images'

// import { nlaureanoResume } from '../../NLaureano_Resume.pdf'

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

const ResumeItem = props => {
  return (
    <div className={`${styles.cdTimelineBlock} jsCdBlock`}>
      <div
        className={`${styles.cdTimelineImg} ${
          styles.cdTimelineImgPicture
        } jsCdImg`}
      >
        <img src={props.timelineIcon} alt="Picture" />
      </div>

      <div className={`${styles.cdTimelineContent} jsCdContent`}>
        <div className={styles.wrapCollabsible}>
          <input id={props.id} className={styles.toggle} type="checkbox" />

          <label htmlFor={props.id} className={styles.lblToggle}>
            <div className={styles.jobTopContainer}>
              <h4>{props.jobTitle}</h4>
              <img src={props.logo} />
            </div>

            <h5>{props.department}</h5>
            <h5>{props.group}</h5>
          </label>

          <div className={styles.collapsibleContent}>
            <div className={styles.contentInner}>
              <ul>
                {props.descriptions &&
                  props.descriptions.map(description => <li>{description}</li>)}
              </ul>
            </div>
          </div>

          <span className={styles.cdTimelineDate}>{props.dates}</span>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div id="resume" className={styles.resumeSection}>
    <div className={styles.resumeBar}>
      <h1>Experience</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevronWhite} />
      </a>
    </div>
    <section className={`${styles.cdTimeline} jsCdTimeline`}>
      <div className={styles.tapForDetails}>
        <span>tap card for details</span>
      </div>
      <div className={styles.cdTimelineContainer}>
        <ResumeItem
          id="PorterAndSail"
          companyName="Porter & Sail"
          jobTitle="Software Engineer"
          department=""
          group=""
          dates="Aug 2018 - Present"
          descriptions={[ 'A fresh way to book, plan and experience the modern hotel stay. Download the app!'
          ]}
          siteUrl="https://www.porterandsail.com/"
          logo={porterandsailImg}
          timelineIcon={browserImg}
        />

        <ResumeItem
          id="FullstackTF"
          companyName="Fullstack Academy"
          jobTitle="Software Engineering Teaching Fellow"
          department="NYC Web Development Fellowship"
          group="Software Engineering Immersive"
          dates="Apr 2018 - Jul 2018"
          descriptions={[
            'Mentored 35 students on development concepts, algorithms, debugging strategies, software architecture and clean code structure',
            'Conducted technical interviews for applicants',
            'Led interactive reviews for students to solidify material ',
            'Directed team building exercises to strengthen class cohesion and community',
          ]}
          siteUrl="https://www.fullstackacademy.com/"
          logo={fsaImg}
          timelineIcon={browserImg}
        />

        <ResumeItem
          id="MizuhoRM"
          companyName="Mizuho Bank, Ltd"
          jobTitle="Risk Management Officer"
          department="Risk Management Department"
          group="Portfolio Analytics & Modeling"
          dates="Apr 2017 - Jan 2018"
          descriptions={[
            'Built and maintained an automated, comprehensive daily risk management dashboard for C-Suite executives that utilizes and manipulates data fed from several files, Bloomberg API, and Microsoft SQL database tables',
            'Authored monthly cross-asset market and macroeconomic recaps for senior management risk committee meetings',
            'Performed data cleansing on large data sets in order to identify and correct erroneous records',
          ]}
          siteUrl="https://map-it-fsa.firebaseapp.com/"
          logo={mizuhoImg}
          timelineIcon={bankImg}
        />

        <ResumeItem
          id="MizuhoPMDS"
          companyName="Mizuho Bank, Ltd"
          jobTitle="Portfolio Management Officer"
          department="Portfolio Management Department"
          group="Strategic Credit Hedge"
          dates="Sep 2015 - Mar 2017"
          descriptions={[
            'Developed and automated portfolio analytics for the group’s $55.6 billion loan portfolio in order to determine potential trade ideas based on single-name CDS relative value',
            'Built an archive and tracking tool to review trade performance using Bloomberg API and VBA',
            'Created a post-trade evaluation template, which pulls in and manipulates data from the archive in order to identify and attribute performance across an array of metrics versus a relevant benchmark',
            'Tested portfolio management system patches by drawing up test scenarios, simulating dummy trades and debugging results with third party vendor, Murex, and internal technology personnel',
            'Created a tool to track research blog traffic and identify users using VBA and Python knowledge',
            'Generated a portfolio profit and loss simulation report to assess potential market scenarios',
            'Produced a number of comprehensive manuals outlining procedures and operations',
          ]}
          siteUrl="https://saucesome-fsa.herokuapp.com/"
          logo={mizuhoImg}
          timelineIcon={bankImg}
        />

        <ResumeItem
          id="LordAbbettAT"
          companyName="Lord, Abbett & Co LLC"
          jobTitle="Associate Trader"
          department="Fixed Income Mutual Funds"
          group="Municipal Bonds"
          dates="Oct 2013 - Sep 2015"
          descriptions={[
            'Developed and maintain a database of obligors by security in order to analyze differences in market value weighting and duration contribution between each fund and its internal benchmark',
            'Maintained a database of new issue pricing scales to determine the maximum returning maturity, and evaluate spreads versus other new issue deals and existing markets in the secondary',
            'Filtered sell-side prices, market information and research to identify relative value opportunities and relay information to portfolio managers with $10 billion in assets under management',
            'Analyzed performance attribution using Barclays POINT to distinguish deficiencies and strengths in fund asset allocation and security selection on a monthly, quarterly and yearly basis',
          ]}
          siteUrl="https://symbalplayer.firebaseapp.com/"
          logo={lordabbettImg}
          timelineIcon={fundImg}
        />

        <ResumeItem
          id="LordAbbettPA"
          companyName="Lord, Abbett & Co LLC"
          jobTitle="Portfolio Analyst"
          department="Fixed Income Mutual Funds"
          group="Municipal Bonds"
          dates="Jun 2011 - Sep 2013"
          descriptions={[
            'Constructed a database using VBA and Barclays POINT to present and maintain weekly year-to-date total return changes within the Barclays Aggregate and High Yield indices using several partitions',
            'Collaborated with the technology team to create a heat map that highlights fund versus internal index differences in yield curve, quality, time to next call, price, sector, and state positioning',
          ]}
          logo={lordabbettImg}
          timelineIcon={fundImg}
        />

        <ResumeItem
          id="NYU"
          companyName="New York University"
          jobTitle="Bachelor of Arts"
          department="Economics, College of Arts & Science"
          group="Business Studies, Stern School of Business "
          dates="May 2011"
          descriptions={['NYU Florence semester abroad']}
          logo={nyuImg}
          timelineIcon={diplomaImg}
        />
      </div>
    </section>
  </div>
)
