import React from 'react'

const HomeHero = () => (
  <div>
    <section className='hero is-dark'>
      <div className='hero-body'>
        <div className='container'>
          <div className='media '>
            <figure className='media-left'>
              <p className='image is-64x64'>
                <img src='/static/img/logo.png' />
              </p>
            </figure>
            <div className='media-content is-vcentered '>
              <h1 className='title'>ACDH.fr</h1>
              <h2 className='subtitle'>Au cœur de l'histoire est une émission diffusée sur Europe 1.</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default HomeHero
