import React from 'react'
import PropTypes from 'prop-types'

import Header from 'components/Header'
import Meta from 'components/Meta'
import ErrorMessage from 'containers/ErrorMessage'
import SuccessMessage from 'containers/SuccessMessage'

const Layout = ({ children }) => (
  <div className='acdh-app'>
    <Meta />
    <ErrorMessage />
    <SuccessMessage />
    <Header />
    { children }
  </div>
)

Layout.propTypes = {
  children: PropTypes.element.isRequired
}

export default Layout
