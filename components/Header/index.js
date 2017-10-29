import React from 'react'
import Link from 'next/link'
import UserMenu from 'containers/UserMenu'

const Header = () => (
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
          <Link href='/faq'>
            <a className='navbar-item'>
        FAQ
            </a>
          </Link>
        </div>
        <div className='navbar-end'>
          <UserMenu />
        </div>
      </div>
    </nav>
  </header>
)

export default Header
