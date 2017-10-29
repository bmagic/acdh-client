import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from './validate'
import RenderField from 'components/RenderField'

let RegisterForm = (props) => {
  const { handleSubmit, invalid } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className='field'>
        <div className='control has-icons-left'>
          <Field className='input' name='email' label='E-mail' component={RenderField} type='email' />
          <span className='icon is-small is-left'><i className='fa fa-envelope' /></span>
        </div>
      </div>
      <div className='field'>
        <div className='control has-icons-left'>
          <Field className='input' name='password' label='Mot de passe' component={RenderField} type='password' />
          <span className='icon is-small is-left'><i className='fa fa-lock' /></span>
        </div>
      </div>
      <div className='field'>
        <div className='control has-icons-left'>
          <Field className='input' name='password2' label='Confirmation du mot de passe' component={RenderField} type='password' />
          <span className='icon is-small is-left'><i className='fa fa-lock' /></span>
        </div>
      </div>
      <div className='level'>
        <div className='level-left' />
        <div className='level-right'>
          <div className='level-item'>
            <div className='field'>
              <p className='control'>
                <button disabled={invalid} className='button is-dark' onClick={handleSubmit}>
                    S'enregistrer
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>

  )
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool
}

export default reduxForm({
  form: 'register',
  validate
})(RegisterForm)
