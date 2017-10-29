import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import { searchChange } from 'actions/programs'
import { makeSearch } from 'selectors/programs'

export class SearchBar extends React.PureComponent {
  render () {
    return (
      <div className='container'>
        <div className='search-bar field'>
          <input type='text' className='input' value={this.props.search} placeholder='Rechercher une émission' onChange={this.props.onChange} />
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  search: PropTypes.string,
  onChange: PropTypes.func
}
const mapStateToProps = createStructuredSelector({
  search: makeSearch()
})

export function mapDispatchToProps (dispatch) {
  return {
    onChange: (e) => {
      dispatch(searchChange(e.target.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
