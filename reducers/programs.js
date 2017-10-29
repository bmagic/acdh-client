import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: false,
  error: false,
  data: false,
  search: ''
})

function programsReducer (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PROGRAMS':
      return state
        .set('loading', true)
        .set('error', false)
    case 'LOAD_PROGRAMS_SUCCESS':
      return state
        .set('loading', false)
        .set('data', action.programs)
    case 'LOAD_PROGRAMS_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'SEARCH_CHANGE':
      return state
        .set('search', action.data)
    default:
      return state
  }
}

export default programsReducer
