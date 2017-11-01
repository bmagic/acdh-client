import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import ProgramLine from 'components/ProgramLine'

import { makePrograms, makeSearch, makeLoading, makePage } from 'selectors/programs'
import { loadPrograms } from 'actions/programs'

export class ProgramsList extends React.PureComponent {
  componentWillUpdate (nextProps) {
    if ((nextProps.search !== this.props.search) || (nextProps.page !== this.props.page)) { this.props.onLoadPrograms() }
  }

  render () {
    let programLines = []

    if (this.props.programs) {
      programLines = this.props.programs.map(function (program) {
        return <ProgramLine key={program.get('_id')} id={program.get('_id')} title={program.get('title')}
          date={program.get('date')} url={program.get('url')} />
      })
    }

    return (
      <div className='programs-list'>
        <div >
          {programLines}
        </div>
      </div>
    )
  }
}

ProgramsList.propTypes = {
  programs: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  onLoadPrograms: PropTypes.func,
  search: PropTypes.string,
  page: PropTypes.number
}

const mapStateToProps = createStructuredSelector({
  programs: makePrograms(),
  search: makeSearch(),
  loading: makeLoading(),
  page: makePage()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLoadPrograms: () => {
      dispatch(loadPrograms())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsList)
