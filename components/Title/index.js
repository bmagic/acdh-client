import React from 'react'
import PropTypes from 'prop-types'

const Title = (props) => (
  <div>
    <section className='hero is-dark'>
      <div className='hero-body'>
        <div className='container'>
          <h1 className='title'>{props.title}</h1>
          <h2 className='subtitle'>{props.subtitle}</h2>
        </div>
      </div>
    </section>
  </div>
)

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Title
