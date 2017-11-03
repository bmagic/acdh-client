import { createSelector } from 'reselect'

const selectUser = (state) => state.get('user')

const makeEmail = () => createSelector(
  selectUser,
  (userState) => userState.getIn(['data', 'email'])
)

const makeLastLogin = () => createSelector(
  selectUser,
  (userState) => userState.getIn(['data', 'last_login'])
)

const makeAdmin = () => createSelector(
  selectUser,
  (userState) => userState.getIn(['data', 'admin'])
)

const makeLoading = () => createSelector(
  selectUser,
  (userState) => userState.get('loading')
)

const makeViewList = () => createSelector(
  selectUser,
  (userState) => userState.getIn(['data', 'viewList'])
)

export {
  makeEmail,
  makeLastLogin,
  makeAdmin,
  makeLoading,
  makeViewList
}
