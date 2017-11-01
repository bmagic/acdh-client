import React from 'react'
import {withReduxSaga} from 'configureStore'

import Layout from 'components/Layout'
import HomeHero from 'components/HomeHero'
import ProgramsList from 'containers/ProgramsList'
import SearchBar from 'containers/SearchBar'
import Pagination from 'containers/Pagination'

import { loadPrograms } from 'actions/programs'

class HomePage extends React.Component {
  static getInitialProps ({store}) {
    store.dispatch(loadPrograms())
  }

  render () {
    return (
      <Layout>
        <div id='home-page'>
          <HomeHero />
          <section className='section'>
            <div className='container'>
              <SearchBar />
              <ProgramsList />
              <Pagination pageCount={10} />
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(HomePage)
