import React from 'react'
import {withReduxSaga} from 'configureStore'

import Layout from 'components/Layout'
import Title from 'components/Title'
import Meta from 'components/Meta'

class RoadmapPage extends React.Component {
  render () {
    return (
      <Layout>
        <div id='roadmap-page'>
          <Meta title='Feuille de route' description='Ce que vous pouvez et que vous pourrez faire sur ACDH.fr' />
          <Title title='Feuille de route' subtitle='Ce que vous pouvez et que vous pourrez faire sur ACDH.fr' />
          <section className='section'>
            <div className='container'>
              <div className='columns'>
                <div className='column'>
                  <div className='content has-text-justified'>
                    <p>
                    Le site ACDH.fr est construit en 3 versions : Alpha, Beta et Finale. Chacune d'entre elles marque une étapes importante au niveau technique.
                    </p>
                    <h3>Alpha</h3>
                    <p>
                       La version Alpha sert à tester le choix technique retenu pour la création du site.
                    </p>
                    <p>
                      Elle intègre donc toutes les fonctionnalités de base de gestion des utilisateurs mais aussi une recherche simple des émissions.
                    </p>
                    <h3>Beta</h3>
                    <p>
                      Avec l'arrivée de la version Beta, le site se dotera d'un moteur de recheche plus puissant. Afin de pouvoir "nourrir" ce moteur de recherche, je vais lancer en parallèle la transcription des émissions.
                    </p>
                    <p>
                      Cette transcription, en plus de permettre une meilleure indexation des émissions, permettra de les mettre à disposision des personnes sourdes et malentendantes. Je n'ai pas encore retenu de solution technique à la réalisation de cette transcription mais il est probable qu'elle ait un co&ucirc;t important et qu'elle sera donc faite par étape.
                    </p>
                    <h3>Version finale</h3>
                    <p>
                      La version finale ne signifie pas la fin du développement du site. Elle représente ce que j'ai imaginé pour le site avant de commencer son développement.
                    </p>
                    <p>
                      Cette version sera toujours enrichie des nouvelles fonctionnalités comme l'ajout de filtres.
                    </p>
                  </div>
                </div>
                <div className='column is-1' />
                <div className='column'>
                  <ul className='timeline'>
                    <li className='timeline-header'>
                      <span className='tag is-medium is-dark'>Version Alpha</span>
                    </li>
                    <li className='timeline-item'>
                      <div className='timeline-marker is-icon is-primary'>
                        <i className='fa fa-flag' />
                      </div>
                      <div className='timeline-content'>
                        <p className='heading'>Octobre 2017</p>
                        <ul>
                          <li>Création du site de base <i className='fa fa-check' /></li>
                          <li>Recherche texte simple <i className='fa fa-check' /></li>
                          <li>Gestion des utilisateurs (En cours)</li>
                        </ul>
                      </div>
                    </li>
                    <li className='timeline-item'>
                      <div className='timeline-marker is-icon'>
                        <i className='fa fa-flag' />
                      </div>
                      <div className='timeline-content'>
                        <p className='heading'>Novembre 2017</p>
                        <ul>
                          <li>Optimisation mobile</li>
                          <li>Marquer ses émissions écoutées et favorites</li>
                          <li>Tri des programmes par pertinence, date, ordre alphabétique</li>
                        </ul>
                      </div>
                    </li>
                    <li className='timeline-header'>
                      <span className='tag is-medium is-dark'>Version Beta</span>
                    </li>
                    <li className='timeline-item'>
                      <div className='timeline-marker is-icon'>
                        <i className='fa fa-flag' />
                      </div>
                      <div className='timeline-content'>
                        <p className='heading'>Décembre 2017</p>
                        <ul>
                          <li>Recherche texte avancée avec prédiction</li>
                          <li>Transcription des émissions</li>
                        </ul>
                      </div>
                    </li>
                    <li className='timeline-header'>
                      <span className='tag is-medium is-dark'>Version finale 1.0</span>
                    </li>
                    <li className='timeline-item'>
                      <div className='timeline-marker is-icon'>
                        <i className='fa fa-flag' />
                      </div>
                      <div className='timeline-content'>
                        <p className='heading'>Janvier 2018</p>
                        <ul>
                          <li>Nouvelles fonctionnalités à définir</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default withReduxSaga(RoadmapPage)
