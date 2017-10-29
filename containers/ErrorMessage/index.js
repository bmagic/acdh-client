import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { resetError } from 'actions/global'
import { makeError } from 'selectors/global'

import stylesheet from './style.scss'

export class ErrorMessage extends React.PureComponent {
  static translateErrorMessage (message) {
    switch (message) {
      case 'Failed to fetch':
        return 'Erreur : Impossible de contacter le serveur'
      case 'Unauthorized':
        return 'Impossible de se connecter, vérifiez votre adresse email et votre mot de passe'
      case 'Conflict':
        return 'Cet email existe déja dans notre base.'
      case 'Forbidden':
        return 'Vous n\'avez pas la permission d\'effectuer cette action'
      default:
        return 'Désolé une erreur inconnue est survenue et elle dit : ' + message
    }
  }

  render () {
    if (this.props.error && this.props.error.message) {
      setTimeout(this.props.onResetError, 5000)
      return (
        <div className='error-message column is-one-quarter'>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

          <div onClick={this.props.onResetError} className='notification is-danger'>
            <button className='delete' />
            {ErrorMessage.translateErrorMessage(this.props.error.message)}

          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

ErrorMessage.propTypes = {
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  onResetError: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  error: makeError()
})

export function mapDispatchToProps (dispatch) {
  return {
    onResetError: () => {
      dispatch(resetError())
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect
)(ErrorMessage)
