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
            <div className='notification is-warning content has-text-centered'>
              Ce site en version Alpha est actuellement en développement actif. Merci de ne pas tenir compte des disfonctionnements pour le moment.
            </div>
            <SearchBar />
            <ProgramsList />
          </section>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(HomePage)
