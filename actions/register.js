
export function changeEmail (email) {
  return {
    type: 'CHANGE_EMAIL_REGISTER',
    email
  }
}

export function changePassword (password) {
  return {
    type: 'CHANGE_PASSWORD_REGISTER',
    password
  }
}

export function changePassword2 (password2) {
  return {
    type: 'CHANGE_PASSWORD2_REGISTER',
    password2
  }
}
