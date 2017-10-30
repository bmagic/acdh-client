import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form/immutable'

const RenderReplay = ({ fields }) => (
  <div>
    <div className='field'>
      <button className='button' type='button' onClick={() => fields.push('1970-01-01')}>
        Ajouter une rediffusion
      </button>
    </div>
    {fields.map((replay, index) => (
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
              <Field className='input' name={replay} component='input' type='date' />
            </div>
          </div>
        </div>

      </div>
    ))}
  </div>
)

RenderReplay.propTypes = {
  fields: PropTypes.object
}

export default RenderReplay
