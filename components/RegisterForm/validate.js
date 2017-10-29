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

  if (!values.get('password2')) {
    errors.password2 = 'Ce champs est requis'
  } else if (values.get('password') !== values.get('password2')) {
    errors.password2 = 'Les mots de passe ne sont pas identiques'
  }
  return errors
}

export default validate
