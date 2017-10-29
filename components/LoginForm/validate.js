const validate = values => {
  const errors = {}

  if (!values.get('email')) {
    errors.email = 'Ce champs est requis'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'L\'adresse email est invalide'
  }
  if (!values.get('password')) {
    errors.password = 'Ce champs est requis'
  }

  return errors
}

export default validate
