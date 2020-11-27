import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { Header, About, Extra, Projects, Resume, Frame, Footer } from './'

import './layout.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title='Noelle Laureano'
      meta={[
        { name: 'description', content: 'Check me out' },
        { name: 'keywords', content: 'noelle laureano' }
      ]}
    />
    <Header />
    <About />
    <Extra />
    <Projects />
    <Resume />
    <Frame />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout
