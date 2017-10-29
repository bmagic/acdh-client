import React from 'react'
import {withReduxSaga} from 'configureStore'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Router from 'next/router'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Title from 'components/Title'
import RegisterForm from 'components/RegisterForm'

import { makeEmail } from 'selectors/user'
import { register } from 'actions/user'

class RegisterPage extends React.Component {
  constructor (props) {
    super(props)
    this.handleRegister = this.handleRegister.bind(this)
  }

  componentDidUpdate () {
    if (this.props.email) {
      Router.push('/')
    }
  }

  handleRegister (values) {
    this.props.onRegister(values)
  }

  render () {
    return (
      <Layout>
        <div id='register-page'>
          <Meta title='Inscription' />
          <Title title='Inscription' subtitle='Créez un compte pour pouvoir profiter de toutes les fonctionnalités du site' />
          <section className='section'>
            <div className='container'>
              <div className='columns is-centered'>
                <div className='is-half column'>
                  <RegisterForm onSubmit={this.handleRegister} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

RegisterPage.propTypes = {
  email: PropTypes.string,
  onRegister: PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onRegister: (data) => {
      dispatch(register(data))
    }
  }
}

const mapStateToProps = createStructuredSelector({
  email: makeEmail()
})

export default withReduxSaga(connect(mapStateToProps, mapDispatchToProps)(RegisterPage))
