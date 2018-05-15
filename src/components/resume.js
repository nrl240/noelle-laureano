import React from 'react'
import Link from 'gatsby-link'
import styles from './resume.module.css'
import Container from '../components/container'

import {
  excelImg,
  sqlserverImg,
  vbaImg,
  bbgImg,
  apiImg,
  murexImg,
} from '../images/tech'

const Resume = props => {
  const techImgs = props.techImgs

  return (
    <div>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.content}>
            <h4>{props.dates}</h4>
            <h4>{props.companyName}</h4>
            <h4>{props.department}</h4>
            <span>{props.jobTitle}</span>
          </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div className={styles.content}>
            <h2>2016</h2>
            <p>Lorem ipsum..</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default () => (
  <div className={styles.resumeSection}>
    <h1>Résumé</h1>
    <div className={styles.projectsContainer}>
      <Resume
        companyName="Mizuho Bank, Ltd"
        jobTitle="Officer"
        department="Risk Management Department, Portfolio Analytics & Modeling"
        dates="Apr 2017 - Jan 2018"
        descriptions={[
          'Built and maintained an automated, comprehensive daily risk management dashboard for C-Suite executives that utilizes and manipulates data fed from several files, Bloomberg API, and Microsoft SQL database tables',
          'Authored monthly cross-asset market and macroeconomic recaps for senior management risk committee meetings',
          'Performed data cleansing on large data sets in order to identify and correct erroneous records',
        ]}
        siteUrl="https://map-it-fsa.firebaseapp.com/"
      />

      <Resume
        companyName="Mizuho Bank, Ltd"
        jobTitle="Officer"
        department="Portfolio Management Department, Strategic Credit Hedge Office"
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
      />

      <Resume
        companyName="Lord, Abbett & Co LLC"
        jobTitle="Associate Trader"
        department="Fixed Income, Municipal Bonds"
        dates="Oct 2013 - Sep 2015"
        descriptions={[
          'Developed and maintain a database of obligors by security in order to analyze differences in market value weighting and duration contribution between each fund and its internal benchmark',
          'Maintained a database of new issue pricing scales to determine the maximum returning maturity, and evaluate spreads versus other new issue deals and existing markets in the secondary',
          'Filtered sell-side prices, market information and research to identify relative value opportunities and relay information to portfolio managers with $10 billion in assets under management',
          'Analyzed performance attribution using Barclays POINT to distinguish deficiencies and strengths in fund asset allocation and security selection on a monthly, quarterly and yearly basis',
        ]}
        siteUrl="https://symbalplayer.firebaseapp.com/"
      />

      <Resume
        companyName="Lord, Abbett & Co LLC"
        jobTitle="Portfolio Analyst"
        department="Fixed Income, Municipal Bonds"
        dates="Jun 2011 - Sep 2013"
        descriptions={[
          'Constructed a database using VBA and Barclays POINT to present and maintain weekly year-to-date total return changes within the Barclays Aggregate and High Yield indices using several partitions',
          'Collaborated with the technology team to create a heat map that highlights fund versus internal index differences in yield curve, quality, time to next call, price, sector, and state positioning',
        ]}
      />
    </div>
  </div>
)
