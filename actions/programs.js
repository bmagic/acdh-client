export function loadPrograms (page) {
  return {
    type: 'LOAD_PROGRAMS',
    page
  }
}

export function loadProgramsSuccess (result) {
  return {
    type: 'LOAD_PROGRAMS_SUCCESS',
    result
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

export function pageChange (page) {
  return {
    type: 'PAGE_CHANGE',
    page
  }
}
