import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form/immutable'
import validate from './validate'
import RenderField from 'components/RenderField'

let LoginForm = (props) => {
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
          <span className='icon is-small is-left'><i className='fa fa-lock' />
          </span>
        </div>
      </div>
      <div className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <span>Vous n'avez pas de compte, <Link href='/register'><a>créez en un.</a></Link></span>
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            <div className='field'>
              <p className='control'>
                <button disabled={invalid} type='submit' className='button is-dark' onClick={handleSubmit}>
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

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool
}

LoginForm = reduxForm({
  form: 'login',
  validate
})(LoginForm)

export default LoginForm
