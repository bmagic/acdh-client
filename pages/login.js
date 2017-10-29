import React from 'react'
import {withReduxSaga} from 'configureStore'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Router from 'next/router'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Title from 'components/Title'
import LoginForm from 'components/LoginForm'

import { makeEmail } from 'selectors/user'
import { login } from 'actions/user'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }
  componentDidUpdate () {
    if (this.props.email) {
      Router.push('/')
    }
  }

  handleLogin (values) {
    this.props.onLogin(values)
  }

  render () {
    return (
      <Layout>
        <div id='login-page'>
          <Meta title='Connexion' />
          <Title title='Connexion' subtitle='Saisissez ici vos informations de connexion' />
          <section className='section'>
            <div className='container'>
              <div className='columns is-centered'>
                <div className='is-half column'>
                  <LoginForm onSubmit={this.handleLogin} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

LoginPage.propTypes = {
  email: PropTypes.string,
  onLogin: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  email: makeEmail()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLogin: (data) => {
      dispatch(login(data))
    }
  }
}

export default withReduxSaga(connect(mapStateToProps, mapDispatchToProps)(LoginPage))
