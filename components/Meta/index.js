import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = (props) => {
  const title = props.title ? `${props.title} | ACDH.fr` : 'ACDH.fr'
  const description = props.description ? props.description : 'Recherchez et écoutez vos émissions préférées "Au cœur de l\'histoire"'
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      {/* <meta name='image' content='GENERAL IMAGE URL' /> */}
      <meta itemProp='name' content={title} />
      <meta itemProp='description' content={description} />
      {/* <meta itemProp='image' content='GENERAL IMAGE URL' /> */}
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='og:title' content={title} />
      <meta name='og:description' content={description} />
      {/* <meta name='og:image' content='FACEBOOK SITE IMAGE' /> */}
      {/* <meta name='og:url' content={window.location.href} /> */}
      <meta name='og:site_name' content={title} />
      <meta name='og:locale' content='en_FR' />
      <meta name='og:type' content='website' />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ])
}

export default Meta
