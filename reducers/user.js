import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
  error: false,
  data: false
})

function userReducer (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_USER':
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false)
    case 'LOAD_USER_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.user)
    case 'LOAD_USER_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'LOGOUT_USER':
      return state
        .set('loading', true)
    case 'LOGOUT_USER_SUCCESS':
      return state
        .set('loading', false)
        .set('data', false)
    case 'LOGOUT_USER_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'LOGIN_USER':
      return state
        .set('loading', true)
    case 'LOGIN_USER_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.user)
    case 'LOGIN_USER_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'REGISTER_USER':
      return state
        .set('loading', true)
    case 'REGISTER_USER_SUCCESS':
      return state
        .set('loading', false)
    case 'REGISTER_USER_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'VALIDATE_USER':
      return state
        .set('loading', true)
    case 'VALIDATE_USER_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.user)
    case 'VALIDATE_USER_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'DELETE_USER':
      return state
        .set('loading', true)
    case 'DELETE_USER_SUCCESS':
      return state
        .set('loading', false)
        .set('data', false)
    case 'DELETE_USER_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'DELETE_VIEW_USER_SUCCESS':
    case 'ADD_VIEW_USER_SUCCESS':
      return state
        .setIn(['data', 'viewList'], action.data)
    case 'ADD_VIEW_USER_ERROR':
    case 'DELETE_VIEW_USER_ERROR':
      return state
        .set('error', action.error)
    default:
      return state
  }
}

export default userReducer
