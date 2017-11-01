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
            <p className='notification is-warning content has-text-centered'>
              Ce site est actuellement en développement actif. Merci de ne pas tenir compte des dysfonctionnements pour le moment.
            </p>
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
