import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form/immutable'

const RenderSubPrograms = ({ fields }) => (
  <div>
    <div className='field'>
      <button className='button' type='button' onClick={() => fields.push({})}>
        Ajouter une sous-partie
      </button>
    </div>
    {fields.map((subProgram, index) => (
      <div key={index} className='field-body'>
        <div className='field is-narrow'>
          <div className='control '>
            <button className='button' onClick={() => fields.remove(index)}>
              <i className='fa fa-trash' />
            </button>
          </div>
        </div>
        <div className='field is-narrow'>
          <div className='control'>
            <div className='select is-fullwidth'>
              <Field className='select' name={`${subProgram}.type`} component='select' label='Type' type='select' >
                <option value='' />
                <option value='story'>Le récit</option>
                <option value='story_unheard'>L'histoire inouie</option>
              </Field>
            </div>
          </div>
        </div>
        <div className='field is-expanded'>
          <div className='control'>
            <Field className='input' name={`${subProgram}.url`} component='input' label='Url' type='text' />
          </div>
        </div>
      </div>
    ))}
  </div>
)

RenderSubPrograms.propTypes = {
  fields: PropTypes.object
}

export default RenderSubPrograms
