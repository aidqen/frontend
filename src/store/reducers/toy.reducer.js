export const SET_TOYS = 'SET_TOYS'
export const SET_LOADING = 'SET_LOADING'
export const SET_FILTER = 'SET_FILTER'
export const UPDATE_TOY = 'UPDATE_TOY'

const initialState = {
  toys: [],
  isLoading: false,
  filterBy: {},
}

export function toyReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case SET_TOYS:
      return { ...state, toys: cmd.toys }
      
    default:
      return state
  }
}
