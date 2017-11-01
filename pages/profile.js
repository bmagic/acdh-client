import React from 'react'
import {withReduxSaga} from 'configureStore'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Moment from 'react-moment'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Title from 'components/Title'
import DeleteUserButton from 'containers/DeleteUserButton'

import { makeEmail, makeLastLogin } from 'selectors/user'

class ProfilePage extends React.Component {
  render () {
    return (
      <Layout>
        <div id='profile-page'>
          <Meta title='Mes informations' />
          <Title title='Mes informations' />
          <section className='section'>
            <div className='container'>
              <div className='content'>
                <ul>
                  <li>
                    Email : {this.props.email}
                  </li>
                  <li>
                    Dernière connexion <Moment locale='fr' fromNow unix>{Math.trunc(this.props.lastLogin / 1000)}</Moment>
                  </li>
                </ul>
              </div>
              <hr />
              <DeleteUserButton />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

ProfilePage.propTypes = {
  email: PropTypes.string,
  lastLogin: PropTypes.number
}

const mapStateToProps = createStructuredSelector({
  email: makeEmail(),
  lastLogin: makeLastLogin()
})

export default withReduxSaga(connect(mapStateToProps)(ProfilePage))
