import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const RenderField = (props) => {
  const { input, label, type, className, meta: { touched, error } } = props

  const passwordValidationClasses = classNames([
    className,
    {'is-danger': touched && error}
  ])

  return (
    <div>
      <input {...input} type={type} className={passwordValidationClasses} placeholder={label} />
      {touched && error && <p className='help is-danger'>{error}</p>}
    </div>)
}

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  className: PropTypes.string

}

export default RenderField
