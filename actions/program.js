export function loadProgram (id) {
  return {
    type: 'LOAD_PROGRAM',
    id
  }
}

export function loadProgramSuccess (data) {
  return {
    type: 'LOAD_PROGRAM_SUCCESS',
    data
  }
}

export function loadProgramError (error) {
  return {
    type: 'LOAD_PROGRAM_ERROR',
    error
  }
}

export function saveProgram (data) {
  return {
    type: 'SAVE_PROGRAM',
    data
  }
}

export function saveProgramSuccess () {
  return {
    type: 'SAVE_PROGRAM_SUCCESS'
  }
}

export function saveProgramError (error) {
  return {
    type: 'SAVE_PROGRAM_ERROR',
    error
  }
}

export function deleteProgram (id) {
  return {
    type: 'DELETE_PROGRAM',
    id
  }
}

export function deleteProgramSuccess () {
  return {
    type: 'DELETE_PROGRAM_SUCCESS'
  }
}

export function deleteProgramError (error) {
  return {
    type: 'DELETE_PROGRAM_ERROR',
    error
  }
}

export function resetProgram () {
  return {
    type: 'RESET_PROGRAM'
  }
}
