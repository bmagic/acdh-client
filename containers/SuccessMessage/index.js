import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { resetSuccess } from 'actions/global'
import { makeSuccess } from 'selectors/global'

import stylesheet from './style.scss'

export class SuccessMessage extends React.PureComponent {
  static translateSuccessMessage (message) {
    switch (message) {
      case 'SAVE_PROGRAM_SUCCESS':
        return 'Le programme a été sauvegardé'
      default:
        return 'Désolé une erreur inconnue est survenue et elle dit : ' + message
    }
  }

  render () {
    const displaySuccess = ['SAVE_PROGRAM_SUCCESS']

    if (this.props.success && displaySuccess.includes(this.props.success)) {
      setTimeout(this.props.onResetSuccess, 5000)
      return (
        <div className='success-message column is-one-quarter'>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <div onClick={this.props.onResetSuccess} className='notification is-success'>
            <button className='delete' />
            {SuccessMessage.translateSuccessMessage(this.props.success)}
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

SuccessMessage.propTypes = {
  success: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onResetSuccess: PropTypes.func
}

const mapStateToProps = createStructuredSelector({
  success: makeSuccess()
})

export function mapDispatchToProps (dispatch) {
  return {
    onResetSuccess: () => {
      dispatch(resetSuccess())
    }
  }
}

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default compose(
  withConnect
)(SuccessMessage)
