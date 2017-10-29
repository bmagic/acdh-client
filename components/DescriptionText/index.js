import React from 'react'
import PropTypes from 'prop-types'

const DescriptionText = (props) => {
  if (props.text.length > 0) {
    return (<div className='description-text content has-text-justified'>
      <h4>Description :</h4>
      {props.text}
    </div>
    )
  } else { return null }
}

DescriptionText.propTypes = {
  text: PropTypes.string
}

export default DescriptionText
