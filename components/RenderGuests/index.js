import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form/immutable'

const RenderGuests = ({ fields }) => (
  <div>
    <div className='field'>
      <button className='button' type='button' onClick={() => fields.push({})}>
        Ajouter un invité
      </button>
    </div>
    {fields.map((guest, index) => (
      <div key={index}>
        <div className='field-body'>
          <div className='field is-narrow'>
            <div className='control '>
              <button className='button' onClick={() => fields.remove(index)}>
                <i className='fa fa-trash' />
              </button>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <Field className='input' name={`${guest}.name`} component='input' label='Url' type='text' />
            </div>
          </div>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <Field className='textarea' name={`${guest}.description`} component='textarea' />
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
)

RenderGuests.propTypes = {
  fields: PropTypes.object
}

export default RenderGuests
