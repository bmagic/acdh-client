import { createSelector } from 'reselect'

const selectProgram = (state) => state.get('program')

const makeProgram = () => createSelector(
  selectProgram,
  (programState) => programState.get('data')
)

const makeLoading = () => createSelector(
  selectProgram,
  (programState) => programState.get('loading')
)
export {
  makeProgram,
  makeLoading
}
