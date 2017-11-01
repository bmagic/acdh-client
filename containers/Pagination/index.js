import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'
import Head from 'next/head'

import {makePage, makeCount, makeLoading} from 'selectors/programs'
import {pageChange} from 'actions/programs'

import stylesheet from './style.scss'

export class Pagination extends React.PureComponent {
  constructor (props) {
    super(props)

    this.handleNextClick = this.handleNextClick.bind(this)
    this.handlePrevClick = this.handlePrevClick.bind(this)
  }

  handleNextClick () {
    this.props.onChange(this.props.page + 1)
  }

  handlePrevClick () {
    this.props.onChange(this.props.page - 1)
  }

  render () {
    if (this.props.loading === null) return null
    else {
      return (
        <nav className='pagination is-centered' role='navigation' aria-label='pagination'>
          <Head>
            <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          </Head>
          <button className='button is-small pagination-previous' disabled={this.props.page === 0} onClick={this.handlePrevClick}>Previous</button>
          <div className='pagination-list'>{this.props.page + 1} / {Math.trunc(this.props.totalCount / this.props.pageCount + 1)}</div>
          <button className='button is-small pagination-next' disabled={this.props.page + 1 >= this.props.totalCount / this.props.pageCount} onClick={this.handleNextClick}>Next page</button>
        </nav>
      )
    }
  }
}

Pagination.propTypes = {
  page: PropTypes.number,
  totalCount: PropTypes.number,
  loading: PropTypes.bool,
  pageCount: PropTypes.number.isRequired,
  onChange: PropTypes.func
}
const mapStateToProps = createStructuredSelector({
  page: makePage(),
  totalCount: makeCount(),
  loading: makeLoading()
})

export function mapDispatchToProps (dispatch) {
  return {
    onChange: (page) => {
      dispatch(pageChange(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
