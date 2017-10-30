import React from 'react'
import PropTypes from 'prop-types'

import generateUrl from 'utils/urlGenerator'

const DownloadLinks = (props) => {
  const links = props.links.map((link, index) => {
    let name
    switch (link.get('type')) {
      case 'story':
        name = 'Le récit'
        break
      default:
        name = link.get('type')
    }
    return <li key={index}><a target='_blank' href={link.get('url')}>{name}</a></li>
  })
  return (
    <div className='download-links content'>
      <h4>{props.links.size === 0 ? 'Lien' : 'Liens'} de téléchargement :</h4>
      <ul>
        <li><a target='_blank' href={generateUrl(props.main)}>Emission complète</a></li>
        {links}
      </ul>
    </div>
  )
}

DownloadLinks.propTypes = {
  main: PropTypes.string.isRequired,
  links: PropTypes.object
}

export default DownloadLinks
