import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import withRedux from 'next-redux-wrapper'
import nextReduxSaga from 'next-redux-saga'
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable'

import createReducer from 'reducers'
import rootSaga from 'saga'

const sagaMiddleware = createSagaMiddleware()

export function configureStore (initialState = {}) {
  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)
  return store
}

export function withReduxSaga (BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent))
}
