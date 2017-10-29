import { createSelector } from 'reselect'

const selectPrograms = (state) => state.get('programs')

const makePrograms = () => createSelector(
  selectPrograms,
  (programsState) => programsState.get('data')
)

const makeSearch = () => createSelector(
  selectPrograms,
  (programsState) => programsState.get('search')
)

const makeLoading = () => createSelector(
  selectPrograms,
  (programsState) => programsState.get('loading')
)

export {
  makePrograms,
  makeSearch,
  makeLoading
}
