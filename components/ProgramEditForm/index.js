import React from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray, reduxForm } from 'redux-form/immutable'
import { connect } from 'react-redux'

import validate from './validate'
import RenderField from 'components/RenderField'
import RenderSubPrograms from 'components/RenderSubPrograms'
import RenderGuests from 'components/RenderGuests'
import RenderReplays from 'components/RenderReplays'

let ProgramEditForm = (props) => {
  const { handleSubmit, invalid } = props
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <div className='control'>
            <Field className='input' name='title' label='Titre' component={RenderField} type='text' />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <Field className='input' name='date' component={RenderField} type='date' />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <Field className='input' name='url' label='Url' component={RenderField} type='text' />
          </div>
        </div>
        <div className='field'>
          <FieldArray name='subPrograms' component={RenderSubPrograms} />
        </div>
        <div className='field'>
          <div className='control'>
            <Field className='textarea' name='description' placeholder='Description' component='textarea' />
          </div>
        </div>
        <div className='field'>
          <FieldArray name='guests' component={RenderGuests} />
        </div>
        <div className='field'>
          <FieldArray name='replays' component={RenderReplays} />
        </div>
        <div className='level'>
          <div className='level-left' />
          <div className='level-right'>
            <div className='level-item'>
              <div className='field test'>
                <p className='control'>
                  <button disabled={invalid} type='submit' className='button is-dark' onClick={handleSubmit}>
                    Enregistrer
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

  )
}

ProgramEditForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool
}

ProgramEditForm = reduxForm({
  form: 'programEdit',
  validate,
  enableReinitialize: true
})(ProgramEditForm)

ProgramEditForm = connect(
  state => ({
    initialValues: state.getIn(['program', 'data'])
  })
)(ProgramEditForm)

export default ProgramEditForm
