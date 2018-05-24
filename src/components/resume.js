import React from 'react'
import Link from 'gatsby-link'

import styles from './Resume.module.css'
import Container from '../components/container'

import { mizuhoImg, lordabbettImg, officeImg } from '../images'
import chevron from '../images/chevron.png'
import {
  excelImg,
  sqlserverImg,
  vbaImg,
  bbgImg,
  apiImg,
  murexImg,
} from '../images/tech'

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

function VerticalTimeline(element) {
  console.log('***** VerticalTimeline ran *****')
  this.element = element
  this.blocks = this.element.getElementsByClassName('jsCdBlock')
  this.images = this.element.getElementsByClassName('jsCdImg')
  this.contents = this.element.getElementsByClassName('jsCdContent')
  // ...
}

VerticalTimeline.prototype.showBlocks = function() {
  console.log('***** proto ran *****')
  var self = this
  for (var i = 0; i < this.blocks.length; i++) {
    ;(function(i) {
      if (
        self.contents[i].classList.contains('cdIsHidden') &&
        self.blocks[i].getBoundingClientRect().top <=
          window.innerHeight * self.offset
      ) {
        // add bounce-in animation
        self.images[i].classList.add('cdTimelineImg--bounce-in')
        self.contents[i].classList.add('cdTimelineContent--bounce-in')
        self.images[i].classList.remove('cdIsHidden')
        self.contents[i].classList.remove('cdIsHidden')
      }
    })(i)
  }
}
// within 2nd div <img src={props.logo} alt="Picture" />

const Test = props => {
  return (
    <div className={`${styles.cdTimelineBlock} jsCdBlock`}>
      <div
        className={`${styles.cdTimelineImg} ${
          styles.cdTimelineImgPicture
        } jsCdImg`}
      >
        <img src={officeImg} alt="Picture" />
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
      <h1>Résumé</h1>
      <a onClick={() => toTop('top')} href="#">
        <img src={chevron} />
      </a>
    </div>
    <section className={`${styles.cdTimeline} jsCdTimeline`}>
      <div className={styles.cdTimelineContainer}>
        <Test
          id="MizuhoRM"
          companyName="Mizuho Bank, Ltd"
          jobTitle="Officer"
          department="Risk Management Department"
          group="Portfolio Analytics & Modeling"
          dates="Apr 2017 - Jan 2018  (10 mos)"
          descriptions={[
            'Built and maintained an automated, comprehensive daily risk management dashboard for C-Suite executives that utilizes and manipulates data fed from several files, Bloomberg API, and Microsoft SQL database tables',
            'Authored monthly cross-asset market and macroeconomic recaps for senior management risk committee meetings',
            'Performed data cleansing on large data sets in order to identify and correct erroneous records',
          ]}
          siteUrl="https://map-it-fsa.firebaseapp.com/"
          logo={mizuhoImg}
        />

        <Test
          id="MizuhoPMDS"
          companyName="Mizuho Bank, Ltd"
          jobTitle="Officer"
          department="Portfolio Management Department"
          group="Strategic Credit Hedge Office"
          dates="Sep 2015 - Mar 2017  (1 yr 7 mos)"
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
        />

        <Test
          id="LordAbbettAT"
          companyName="Lord, Abbett & Co LLC"
          jobTitle="Associate Trader"
          department="Fixed Income Mutual Funds"
          group="Municipal Bonds"
          dates="Oct 2013 - Sep 2015  (2 yrs)"
          descriptions={[
            'Developed and maintain a database of obligors by security in order to analyze differences in market value weighting and duration contribution between each fund and its internal benchmark',
            'Maintained a database of new issue pricing scales to determine the maximum returning maturity, and evaluate spreads versus other new issue deals and existing markets in the secondary',
            'Filtered sell-side prices, market information and research to identify relative value opportunities and relay information to portfolio managers with $10 billion in assets under management',
            'Analyzed performance attribution using Barclays POINT to distinguish deficiencies and strengths in fund asset allocation and security selection on a monthly, quarterly and yearly basis',
          ]}
          siteUrl="https://symbalplayer.firebaseapp.com/"
          logo={lordabbettImg}
        />

        <Test
          id="LordAbbettPA"
          companyName="Lord, Abbett & Co LLC"
          jobTitle="Portfolio Analyst"
          department="Fixed Income Mutual Funds"
          group="Municipal Bonds"
          dates="Jun 2011 - Sep 2013  (2 yrs 5 mos)"
          descriptions={[
            'Constructed a database using VBA and Barclays POINT to present and maintain weekly year-to-date total return changes within the Barclays Aggregate and High Yield indices using several partitions',
            'Collaborated with the technology team to create a heat map that highlights fund versus internal index differences in yield curve, quality, time to next call, price, sector, and state positioning',
          ]}
          logo={lordabbettImg}
        />
      </div>
    </section>
  </div>
)

// Previously, just before section end tag
// <div className={`${styles.cdTimelineBlock} jsCdBlock`} />
