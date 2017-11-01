import { call, put, fork, takeLatest, select } from 'redux-saga/effects'
import { fromJS } from 'immutable'
import qs from 'qs'
import moment from 'moment'
import Router from 'next/router'
import request from 'utils/request'

import {
  userLoaded,
  userLoadingError,
  logoutError,
  logoutSuccess,
  loginSuccess,
  loginError,
  registerSuccess,
  registerError
} from 'actions/user'
import { loadProgramsSuccess, loadProgramsError } from 'actions/programs'
import { loadProgramSuccess, loadProgramError, saveProgramSuccess, saveProgramError, deleteProgramSuccess, deleteProgramError } from 'actions/program'
import { makeSearch, makePage } from 'selectors/programs'

/**
 * GET USER SAGA
 */
export function * getUser () {
  try {
    const requestURL = `${process.env.BACKEND_URL}/users/profile`

    const user = yield call(request, requestURL, {credentials: 'include'})
    yield put(userLoaded(fromJS(user)))
  } catch (err) {
    yield put(userLoadingError(err))
  }
}

export function * userData () {
  yield takeLatest('LOAD_USER', getUser)
}

/**
 * LOUGOUT SAGA
 */
export function * logout () {
  try {
    const requestURL = `${process.env.BACKEND_URL}/users/logout`

    yield call(request, requestURL, {credentials: 'include'})
    yield put(logoutSuccess())
    yield Router.push('/')
  } catch (err) {
    yield put(logoutError(err))
  }
}

export function * userLogout () {
  yield takeLatest('LOGOUT_USER', logout)
}

/**
 * LOGIN SAGA
 */
export function * login (action) {
  try {
    const requestURL = `${process.env.BACKEND_URL}/users/login`
    let data = action.data.toJS()

    const user = yield call(request, requestURL, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: qs.stringify(data)
    })
    yield put(loginSuccess(fromJS(user)))
  } catch (err) {
    yield put(loginError(err))
  }
}

export function * userLogin () {
  yield takeLatest('LOGIN_USER', login)
}

/**
 * REGISTER SAGA
 */
export function * register (action) {
  try {
    const requestURL = `${process.env.BACKEND_URL}/users/register`
    let data = action.data.toJS()

    const user = yield call(request, requestURL, {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: qs.stringify(data)
    })
    yield put(registerSuccess(fromJS(user)))
  } catch (err) {
    yield put(registerError(err))
  }
}

export function * userRegister () {
  yield takeLatest('REGISTER_USER', register)
}

/**
 * PROGRAMS SAGA
 */
export function * getPrograms () {
  const search = yield select(makeSearch())
  const page = yield select(makePage())

  const requestURL = `${process.env.BACKEND_URL}/programs?search=${search}&page=${page}`

  try {
    const result = yield call(request, requestURL, {
      credentials: 'include'
    })
    yield put(loadProgramsSuccess(fromJS(result)))
  } catch (err) {
    yield put(loadProgramsError(err))
  }
}

export function * programsLoad () {
  yield takeLatest('LOAD_PROGRAMS', getPrograms)
}

/**
 * LOAD PROGRAM SAGA
 */
export function * getProgram (action) {
  const requestURL = `${process.env.BACKEND_URL}/programs/` + action.id
  try {
    const program = yield call(request, requestURL, {
      credentials: 'include'
    })
    program.date = moment(program.date).format('YYYY-MM-DD')

    if (program.replays) {
      program.replays.forEach(function (replay, index) {
        program.replays[index] = moment(replay).format('YYYY-MM-DD')
      })
    }

    yield put(loadProgramSuccess(fromJS(program)))
  } catch (err) {
    yield put(loadProgramError(err))
  }
}

export function * programLoad () {
  yield takeLatest('LOAD_PROGRAM', getProgram)
}
/**
 * SAVE PROGRAM SAGA
 */
export function * putProgram (action) {
  let requestURL = `${process.env.BACKEND_URL}/programs`
  let data = action.data.toJS()
  data.date = new Date(data.date).getTime()
  if (data.replays) {
    data.replays.forEach(function (replay, index) {
      data.replays[index] = new Date(replay).getTime()
    })
  }
  if (data._id) {
    requestURL += '/' + data._id
  }
  try {
    yield call(request, requestURL, {
      credentials: 'include',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    yield put(saveProgramSuccess())
    yield Router.push('/')
  } catch (err) {
    yield put(saveProgramError(err))
  }
}

export function * programSave () {
  yield takeLatest('SAVE_PROGRAM', putProgram)
}

/**
 * DELETE PROGRAM SAGA
 */
export function * deleteProgram (action) {
  let requestURL = `${process.env.BACKEND_URL}/programs/${action.id}`
  try {
    yield call(request, requestURL, {
      credentials: 'include',
      method: 'DELETE'
    })
    yield put(deleteProgramSuccess())
    yield Router.push('/')
  } catch (err) {
    yield put(deleteProgramError(err))
  }
}

export function * programDelete () {
  yield takeLatest('DELETE_PROGRAM', deleteProgram)
}

/**
 * Root saga manages watcher lifecycle
 */
export default function * root () {
  yield fork(userData)
  yield fork(userLogout)
  yield fork(userLogin)
  yield fork(userRegister)
  yield fork(programsLoad)
  yield fork(programLoad)
  yield fork(programSave)
  yield fork(programDelete)
}
