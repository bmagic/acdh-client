import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form/immutable'

class ValidationForm extends React.Component {
  render () {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit}>
        <div className='field'>
          <div className='control'>
            <Field className='input' name='token' placeholder='Code de validation' component='input' type='text' />
          </div>
        </div>
        <div className='level'>
          <div className='level-left' />
          <div className='level-right'>
            <div className='level-item'>
              <div className='field'>
                <p className='control'>
                  <button className='button is-dark' onClick={handleSubmit}>
                    Valider votre inscription
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
ValidationForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'validation'
})(ValidationForm)
