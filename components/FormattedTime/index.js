import React, { Component } from 'react'
import PropTypes from 'prop-types'

const padZero = digit =>
  `${digit < 10 ? '0' : ''}${digit}`

class FormattedTime extends Component {
  getFormattedTime () {
    const { numSeconds } = this.props

    const prefix = numSeconds < 0 ? '-' : ''
    const absNumSeconds = Math.abs(numSeconds)

    const hours = Math.floor(absNumSeconds / 3600)
    const minutes = Math.floor((absNumSeconds % 3600) / 60)
    const seconds = Math.floor(absNumSeconds) % 60

    return hours > 0
      ? `${prefix}${hours}:${padZero(minutes)}:${padZero(seconds)}`
      : `${prefix}${minutes}:${padZero(seconds)}`
  }

  render () {
    return (
      <span>
        {this.getFormattedTime()}
      </span>
    )
  }
}

FormattedTime.propTypes = {
  numSeconds: PropTypes.number.isRequired
}

export default FormattedTime
