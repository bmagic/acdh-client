import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import Link from 'next/link'

import { makeAdmin } from 'selectors/user'

export class EditButton extends React.PureComponent {
  render () {
    if (this.props.admin) {
      return (
        <Link href={`/programEdit?id=${this.props.id}`} as={`/program/edit/${this.props.id}`}>
          <a><i className='fa fa-pencil' /></a>
        </Link>
      )
    } else {
      return null
    }
  }
}

EditButton.propTypes = {
  admin: PropTypes.bool,
  id: PropTypes.string.isRequired
}

const mapStateToProps = createStructuredSelector({
  admin: makeAdmin()
})

export default connect(mapStateToProps)(EditButton)
