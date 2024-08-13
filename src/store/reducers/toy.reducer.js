import { toyService } from '../../services/toy.service.local'

export const SET_TOYS = 'SET_TOYS'
export const UPDATE_TOY = 'UPDATE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const SET_FILTER = 'SET_FILTER'
export const SET_LOADING = 'SET_LOADING'

const initialState = {
  toys: [],
  isLoading: false,
  filterBy: toyService.getDefaultFilter(),
}

export function toyReducer(state = initialState, cmd) {
  switch (cmd.type) {
    case SET_TOYS:
      return { ...state, toys: cmd.toys }
    case ADD_TOY:
      return { ...state, toys: [...state.toys, cmd.toyToSave] }
    case UPDATE_TOY:
      return {...state, toys: state.toys.map(toy => toy._id !== cmd.toyToSave._id ? toy : cmd.toyToSave)}
    case SET_FILTER:
      return { ...state, filterBy: cmd.filterByToEdit }
    case SET_LOADING:
      return { ...state, isLoading: cmd.isLoading }
    default:
      return state
  }
}
