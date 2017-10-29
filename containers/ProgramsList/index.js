import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PropTypes from 'prop-types'

import ProgramLine from 'components/ProgramLine'

import { makePrograms, makeSearch, makeLoading } from 'selectors/programs'
import { loadPrograms } from 'actions/programs'

export class ProgramsList extends React.PureComponent {
  componentWillUpdate (nextProps) {
    if (nextProps.search !== this.props.search) { this.props.onLoadPrograms() }
  }

  componentDidMount () {
    this.props.onLoadPrograms()
  }

  render () {
    if (!this.props.loading && this.props.programs) {
      const programLines = this.props.programs.map(function (program) {
        return <ProgramLine key={program.get('_id')} id={program.get('_id')} title={program.get('title')} date={program.get('date')} url={program.get('url')} />
      })

      return (
        <div className='container'>
          {programLines}
        </div>
      )
    } else {
      return <div>"Loading..."</div>
    }
  }
}

ProgramsList.propTypes = {
  programs: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ]),
  onLoadPrograms: PropTypes.func,
  search: PropTypes.string,
  loading: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  programs: makePrograms(),
  search: makeSearch(),
  loading: makeLoading()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLoadPrograms: () => {
      dispatch(loadPrograms())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsList)
