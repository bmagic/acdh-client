import React from 'react'
import PropTypes from 'prop-types'

const Guests = (props) => {
  if (props.guests.size > 0) {
    const guests = props.guests.map((guest, index) => {
      return <li key={index}><strong>{guest.get('name')},</strong> {guest.get('description')}</li>
    })
    return (
      <div className='guests content'>
        <h4>{props.guests.size === 1 ? 'Invité·e' : 'Invité·e·s'} :</h4>
        <ul>
          {guests}
        </ul>
      </div>
    )
  } else return null
}

Guests.propTypes = {
  guests: PropTypes.object
}

export default Guests
