import React from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import UserMenu from 'containers/UserMenu'

const Header = (props) => (

  <header>
    <nav className='navbar ' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link href='/'>
          <a className='navbar-item is-size-4'>
            <strong>ACDH.fr</strong>
          </a>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link href='/'>
            <a className={classNames('navbar-item', {'is-active': props.router.pathname === '/'})}>&Eacute;missions</a>
          </Link>
          <Link href={'/faq'}>
            <a className={classNames('navbar-item', {'is-active': props.router.pathname === '/faq'})}>FAQ</a>
          </Link>
          <Link href={'/roadmap'}>
            <a className={classNames('navbar-item', {'is-active': props.router.pathname === '/roadmap'})}>Feuille de route</a>
          </Link>
        </div>
        <div className='navbar-end'>
          <UserMenu />
        </div>
      </div>
    </nav>
  </header>
  )

Header.propTypes = {
  router: PropTypes.object
}

export default withRouter(Header)
