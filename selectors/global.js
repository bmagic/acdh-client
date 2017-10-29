
import { createSelector } from 'reselect'

const selectUser = (state) => state.get('global')

const makeError = () => createSelector(
  selectUser,
  (globalState) => globalState.get('error')
)

const makeSuccess = () => createSelector(
  selectUser,
  (globalState) => globalState.get('success')
)

export {
  makeError,
  makeSuccess
}
