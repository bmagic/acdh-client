import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const Replays = (props) => {
  if (props.replays && props.replays.size > 0) {
    const replays = props.replays.map((replay, index) => {
      return <li key={index}><Moment locale='fr' format='DD/MM/YYYY'>{replay}</Moment></li>
    })
    return (
      <div className='replays content'>
        <h4>{props.replays.size === 1 ? 'Rediffusion' : 'Rediffusions'} :</h4>
        <ul>
          {replays}
        </ul>
      </div>
    )
  } else return null
}

Replays.propTypes = {
  replays: PropTypes.array
}

export default Replays
