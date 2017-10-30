import React from 'react'
import {withReduxSaga} from 'configureStore'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import moment from 'moment'
import NoSSR from 'react-no-ssr'
import Layout from 'components/Layout'
import Meta from 'components/Meta'
import Title from 'components/Title'
import DescriptionText from 'components/DescriptionText'
import Guests from 'components/Guests'
import DownloadLinks from 'components/DownloadLinks'
import AudioPlayer from 'components/AudioPlayer'
import Replays from 'components/Replays'

import { loadProgram } from 'actions/program'
import { makeProgram } from 'selectors/program'

class ProgramPage extends React.Component {
  static getInitialProps ({ store, query: { id } }) {
    store.dispatch(loadProgram(id))

    return { id }
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
              <NoSSR>
                <AudioPlayer url={program.get('url')} />
              </NoSSR>
            </div>
            <div className='container' >
              <DescriptionText text={program.get('description')} />
              <Guests guests={program.get('guests')} />
              <hr />
              <div className='columns'>
                <div className='column'>
                  <DownloadLinks main={program.get('url')} links={program.get('subPrograms')} />
                </div>
                <div className='column'>
                  <Replays replays={program.get('replays')} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

ProgramPage.propTypes = {
  program: PropTypes.object
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
