import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { loadUser, logout } from 'actions/user'
import { makeEmail, makeAdmin, makeLoading } from 'selectors/user'

class UserMenu extends React.Component {
  componentDidMount () {
    this.props.onLoadUser()
  }

  render () {
    if (this.props.loading) {
      return null
    }
    if (this.props.email) {
      return (
        <div className='navbar-item has-dropdown is-hoverable'>
          <a className='navbar-link'>
            Mon compte
          </a>
          <div className='navbar-dropdown'>
            {
              this.props.admin && <Link href='/programEdit?id=new' as='/program/edit/new'><a className='navbar-item'>Ajouter une émission</a></Link>
            }
            <Link href='/profile'><a className='navbar-item'>Mes informations</a></Link>
            <a className='navbar-item' onClick={this.props.onLogout}>
              Me déconnecter
            </a>
          </div>
        </div>
      )
    } else {
      return (
        <div className='navbar-item'>
          <div className='field is-grouped'>
            <p className='control'>
              <Link href='/login' ><a className='button is-dark is-outlined'>Connexion</a></Link>
            </p>
            <p className='control'>
              <Link href='/register'><a className='button is-dark'>Inscription</a></Link>
            </p>
          </div>
        </div>
      )
    }
  }
}

UserMenu.propTypes = {
  email: PropTypes.string,
  loading: PropTypes.bool,
  admin: PropTypes.bool,
  onLoadUser: PropTypes.func,
  onLogout: PropTypes.func

}
const mapStateToProps = createStructuredSelector({
  email: makeEmail(),
  loading: makeLoading(),
  admin: makeAdmin()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLoadUser: () => {
      dispatch(loadUser())
    },
    onLogout: () => {
      dispatch(logout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
