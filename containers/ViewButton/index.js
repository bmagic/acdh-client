import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import Head from 'next/head'

import { addView, deleteView } from 'actions/user'
import { makeEmail, makeViewList, makeLoading } from 'selectors/user'

import stylesheet from './style.scss'

class ViewButton extends React.Component {
  constructor (props) {
    super(props)
    this.handleAddView = this.handleAddView.bind(this)
    this.handleDeleteView = this.handleDeleteView.bind(this)
  }

  handleDeleteView () {
    this.props.onDeleteView(this.props.id)
  }

  handleAddView () {
    this.props.onAddView(this.props.id)
  }

  render () {
    if (this.props.loading || !this.props.email) return null
    const isViewed = this.props.viewList && this.props.viewList.includes(this.props.id)

    return (
      <div className='view-button'>
        <Head>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        {isViewed && <i className='fa fa-eye' onClick={this.handleDeleteView} />}
        {!isViewed && <i className='fa fa-eye-slash' onClick={this.handleAddView} />}
      </div>
    )
  }
}

ViewButton.propTypes = {
  email: PropTypes.string,
  viewList: PropTypes.array,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onAddView: PropTypes.func,
  onDeleteView: PropTypes.func
}
const mapStateToProps = createStructuredSelector({
  email: makeEmail(),
  viewList: makeViewList(),
  loading: makeLoading()
})

export function mapDispatchToProps (dispatch) {
  return {
    onAddView: (id) => {
      dispatch(addView(id))
    },
    onDeleteView: (id) => {
      dispatch(deleteView(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewButton)
