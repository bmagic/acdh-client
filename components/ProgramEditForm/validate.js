const validate = values => {
  const errors = {}

  if (!values.get('title')) {
    errors.title = 'Ce champs est requis'
  }

  if (!values.get('date')) {
    errors.date = 'Ce champs est requis'
  }

  if (!values.get('url')) {
    errors.url = 'Ce champs est requis'
  }
  return errors
}

export default validate
