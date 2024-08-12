import { toyService } from "../../services/toy.service.local"

export const SET_TOYS = 'SET_TOYS'
export const SET_LOADING = 'SET_LOADING'
export const SET_FILTER = 'SET_FILTER'
export const UPDATE_TOY = 'UPDATE_TOY'

const initialState = {
  toys: [],
  isLoading: false,
  filterBy: toyService.getDefaultFilter()
}

export function toyReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case SET_TOYS:
      return { ...state, toys: cmd.toys }
    case SET_FILTER:
      return {...state, filterBy: cmd.filterByToEdit}
    case SET_LOADING:
      return {...state, isLoading: cmd.isLoading}
    default:
      return state
  }
}
