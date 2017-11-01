import { fromJS } from 'immutable'

const initialState = fromJS({
  loading: null,
  error: false,
  data: false,
  search: '',
  page: 0,
  count: 0
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
        .set('data', action.result.get('programs'))
        .set('count', action.result.get('count'))
    case 'LOAD_PROGRAMS_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false)
    case 'SEARCH_CHANGE':
      return state
        .set('search', action.data)
        .set('page', 0)
    case 'PAGE_CHANGE':
      return state
        .set('page', action.page)
    default:
      return state
  }
}

export default programsReducer
