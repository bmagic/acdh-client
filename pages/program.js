import React from 'react'
import {withReduxSaga} from 'configureStore'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import moment from 'moment'
import dynamic from 'next/dynamic'

import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Title from 'components/Title'
import DescriptionText from 'components/DescriptionText'
import Guests from 'components/Guests'
import DownloadLinks from 'components/DownloadLinks'

import { loadProgram } from 'actions/program'
import { makeProgram } from 'selectors/program'

const AudioPlayer = dynamic(import('components/AudioPlayer'), {
  ssr: false
})

class ProgramPage extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }
  componentDidMount () {
    if (this.props.id !== 'new') {
      this.props.onLoadProgram(this.props.id)
    }
  }

  render () {
    const {program} = this.props

    return (
      <Layout>
        <div id='program-edit-page'>
          <Meta title={program.get('title')} description={program.get('description').length > 0 ? program.get('description') : false} />
          <Title
            title={program.get('title')} subtitle={moment(program.get('date')).format('DD/MM/YYYY')} />
          <section className='section'>
            <div className='container content'>
              <AudioPlayer url={program.get('url')} />
            </div>
            <div className='container' >
              <DescriptionText text={program.get('description')} />
              <Guests guests={program.get('guests')} />
              <DownloadLinks main={program.get('url')} links={program.get('subPrograms')} />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

ProgramPage.propTypes = {
  onLoadProgram: PropTypes.func,
  program: PropTypes.object,
  id: PropTypes.string
}
const mapStateToProps = createStructuredSelector({
  program: makeProgram()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLoadProgram: (id) => {
      dispatch(loadProgram(id))
    }
  }
}

export default withReduxSaga(connect(mapStateToProps, mapDispatchToProps)(ProgramPage))
