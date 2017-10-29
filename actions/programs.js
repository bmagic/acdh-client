export function loadPrograms () {
  return {
    type: 'LOAD_PROGRAMS'
  }
}

export function loadProgramsSuccess (programs) {
  return {
    type: 'LOAD_PROGRAMS_SUCCESS',
    programs
  }
}

export function loadProgramsError (error) {
  return {
    type: 'LOAD_PROGRAMS_ERROR',
    error
  }
}

export function searchChange (data) {
  return {
    type: 'SEARCH_CHANGE',
    data
  }
}
