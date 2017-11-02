import React from 'react'
import {withReduxSaga} from 'configureStore'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Title from 'components/Title'
import ValidationForm from 'components/ValidationForm'

import {validate} from 'actions/user'

class ValidationPage extends React.Component {
  constructor (props) {
    super(props)
    this.handleValidation = this.handleValidation.bind(this)
  }

  handleValidation (value) {
    this.props.onValidation(value)
  }

  static getInitialProps ({ query: { token } }) {
    return {token}
  }

  render () {
    return (
      <Layout>
        <div id='register-page'>
          <Meta title='Validation' />
          <Title title='Validation' subtitle='Entrez votre code de validation' />
          <section className='section'>
            <div className='container has-text-centered'>
              <div className='columns is-centered'>
                <div className='is-half column'>
                  <p className='content'>
                    Vérifiez votre boite email pour récupérer le code d'activation
                  </p>
                  <ValidationForm initialValues={{token: this.props.token}} onSubmit={this.handleValidation} />
                </div>
              </div>
              <hr />
              <p className='content'>
                Un soucis avec l'inscription? N'hésitez pas à me contacter <a href='mailto:balomosa@protonmail.com'>balomosa@protonmail.com</a>
              </p>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

ValidationPage.propTypes = {
  token: PropTypes.string,
  onValidation: PropTypes.func
}

export function mapDispatchToProps (dispatch) {
  return {
    onValidation: (data) => {
      dispatch(validate(data))
    }
  }
}

export default withReduxSaga(connect(null, mapDispatchToProps)(ValidationPage))
