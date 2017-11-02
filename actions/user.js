
export function loadUser () {
  return {
    type: 'LOAD_USER'
  }
}

export function userLoaded (user) {
  return {
    type: 'LOAD_USER_SUCCESS',
    user
  }
}

export function userLoadingError (error) {
  return {
    type: 'LOAD_USER_ERROR',
    error
  }
}

export function logout () {
  return {
    type: 'LOGOUT_USER'
  }
}

export function logoutSuccess () {
  return {
    type: 'LOGOUT_USER_SUCCESS'
  }
}

export function logoutError (error) {
  return {
    type: 'LOGOUT_USER_ERROR',
    error
  }
}

export function login (data) {
  return {
    type: 'LOGIN_USER',
    data
  }
}

export function loginSuccess (user) {
  return {
    type: 'LOGIN_USER_SUCCESS',
    user
  }
}

export function loginError (error) {
  return {
    type: 'LOGIN_USER_ERROR',
    error
  }
}

export function register (data) {
  return {
    type: 'REGISTER_USER',
    data
  }
}

export function registerSuccess () {
  return {
    type: 'REGISTER_USER_SUCCESS'
  }
}

export function registerError (error) {
  return {
    type: 'REGISTER_USER_ERROR',
    error
  }
}

export function validate (data) {
  return {
    type: 'VALIDATE_USER',
    data
  }
}

export function validateSuccess (user) {
  return {
    type: 'VALIDATE_USER_SUCCESS',
    user
  }
}

export function validateError (error) {
  return {
    type: 'VALIDATE_USER_ERROR',
    error
  }
}

export function delete_ () {
  return {
    type: 'DELETE_USER'
  }
}

export function deleteSuccess () {
  return {
    type: 'DELETE_USER_SUCCESS'
  }
}

export function deleteError (error) {
  return {
    type: 'DELETE_USER_ERROR',
    error
  }
}
