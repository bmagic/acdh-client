import { fromJS } from 'immutable'

const initialState = fromJS({
  error: false,
  success: false
})

function globalReducer (state = initialState, action) {
  if (action.type === 'RESET_ERROR') {
    return state
      .set('error', false)
  } else if (action.type === 'RESET_SUCCESS') {
    return state
      .set('success', false)
  } else if (action.type.includes('ERROR')) {
    return state
      .set('error', action.error)
  } else if (action.type.includes('SUCCESS')) {
    return state
      .set('success', action.type)
  }

  return state
}

export default globalReducer
