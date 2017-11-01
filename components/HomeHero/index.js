import React from 'react'
import Link from 'next/link'

const HomeHero = () => (
  <div>
    <section className='hero is-dark'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <div className='media '>
                <figure className='media-left'>
                  <p className='image is-64x64'>
                    <img src='/static/img/logo.png' />
                  </p>
                </figure>
                <div className='media-content is-vcentered '>
                  <h1 className='title'>ACDH.fr</h1>
                  <h2 className='subtitle'>Recherchez et écoutez vos émissions "Au cœur de l'histoire"</h2>
                </div>
              </div>
            </div>
            <div className='column'>
              <p className='notification is-warning content has-text-centered'>
                Ce site est actuellement en développement actif.<br />Pour plus d'informations sur son évolution, consultez <Link href='/roadmap'><a>la feuille de route</a></Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
)

export default HomeHero
