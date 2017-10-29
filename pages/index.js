import React from 'react'
import {withReduxSaga} from 'configureStore'

import Layout from 'components/Layout'
import HomeHero from 'components/HomeHero'
import ProgramsList from 'containers/ProgramsList'
import SearchBar from 'containers/SearchBar'

class HomePage extends React.Component {
  render () {
    return (
      <Layout>
        <div id='home-page'>
          <HomeHero />
          <section className='section'>
            <SearchBar />
            <ProgramsList />
          </section>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(HomePage)
