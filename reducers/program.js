import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
  error: false,
  data: {
    title: '',
    date: '1970-01-01',
    url: '',
    subPrograms: [],
    guests: [],
    description: ''
  }
})

function programReducer (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PROGRAM':
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', initialState.get('data'))
    case 'LOAD_PROGRAM_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.data)
    case 'LOAD_PROGRAM_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'SAVE_PROGRAM':
      return state
        .set('loading', true)
        .set('error', false)
    case 'SAVE_PROGRAM_SUCCESS':
      return state
        .set('loading', false)
        .set('data', initialState.get('data'))
    case 'SAVE_PROGRAM_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'DELETE_PROGRAM':
      return state
        .set('loading', true)
        .set('error', false)
    case 'DELETE_PROGRAM_SUCCESS':
      return state
        .set('loading', false)
        .set('data', initialState.get('data'))
    case 'DELETE_PROGRAM_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'RESET_PROGRAM':
      return state
        .set('data', initialState.get('data'))
        .set('loading', false)
    default:
      return state
  }
}

export default programReducer
