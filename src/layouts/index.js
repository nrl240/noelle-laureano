import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header, About, Projects, Resume, Test } from '../components'

import './index.css'

// NEW
// ;(function() {
//   function VerticalTimeline(element) {
//     this.element = element
//     this.blocks = this.element.getElementsByClassName('jsCdBlock')
//     this.images = this.element.getElementsByClassName('jsCdImg')
//     this.contents = this.element.getElementsByClassName('jsCdContent')
//     this.offset = 0.8
//     this.hideBlocks()
//   }

//   VerticalTimeline.prototype.hideBlocks = function() {
//     //hide timeline blocks which are outside the viewport
//     if (!'classList' in document.documentElement) {
//       return
//     }
//     var self = this
//     for (var i = 0; i < this.blocks.length; i++) {
//       ;(function(i) {
//         if (
//           self.blocks[i].getBoundingClientRect().top >
//           window.innerHeight * self.offset
//         ) {
//           self.images[i].classList.add('cdIsHidden')
//           self.contents[i].classList.add('cdIsHidden')
//         }
//       })(i)
//     }
//   }

//   VerticalTimeline.prototype.showBlocks = function() {
//     if (!'classList' in document.documentElement) {
//       return
//     }
//     var self = this
//     for (var i = 0; i < this.blocks.length; i++) {
//       ;(function(i) {
//         if (
//           self.contents[i].classList.contains('cdIsHidden') &&
//           self.blocks[i].getBoundingClientRect().top <=
//             window.innerHeight * self.offset
//         ) {
//           // add bounce-in animation
//           self.images[i].classList.add('cdIimelineImg--bounce-in')
//           self.contents[i].classList.add('cdTimelineContent--bounce-in')
//           self.images[i].classList.remove('cdIsHidden')
//           self.contents[i].classList.remove('cdIsHidden')
//         }
//       })(i)
//     }
//   }

//   var verticalTimelines = document.getElementsByClassName('jsCdTimeline'),
//     verticalTimelinesArray = [],
//     scrolling = false
//   if (verticalTimelines.length > 0) {
//     for (var i = 0; i < verticalTimelines.length; i++) {
//       ;(function(i) {
//         verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]))
//       })(i)
//     }

//     //show timeline blocks on scrolling
//     window.addEventListener('scroll', function(event) {
//       if (!scrolling) {
//         scrolling = true
//         !window.requestAnimationFrame
//           ? setTimeout(checkTimelineScroll, 250)
//           : window.requestAnimationFrame(checkTimelineScroll)
//       }
//     })
//   }

//   function checkTimelineScroll() {
//     verticalTimelinesArray.forEach(function(timeline) {
//       timeline.showBlocks()
//     })
//     scrolling = false
//   }
// })()

// NEW END

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <About />
    <Projects />
    <Test />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
