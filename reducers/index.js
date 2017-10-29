import { combineReducers } from 'redux-immutable'
import { reducer as form } from 'redux-form/immutable'

import globalReducer from 'reducers/global'
import userReducer from 'reducers/user'
import programsReducer from 'reducers/programs'
import programReducer from 'reducers/program'

export default function createReducer () {
  return combineReducers({
    global: globalReducer,
    user: userReducer,
    programs: programsReducer,
    program: programReducer,
    form: form
  })
}
