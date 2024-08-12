import { toyService } from '../../services/toy.service'
import { SET_LOADING } from '../reducers/toy.reducer'

export async function loadToys() {
  gStore.dispatch({ type: SET_LOADING, isLoading: true })
  const filterBy = gStore.getState().toyModule.filterBy
  const toys = await toyService.query(filterBy)
  gStore.dispatch({ type: 'SET_TOYS', toys })
  gStore.dispatch({ type: SET_LOADING, isLoading: false })
}

export function getMaxToyPrice() {
  const toys = gStore.getState().toyModule.toys
  const maxPrice = toys.reduce((acc, toy) => {
    return toy.price > acc ? toy.price : acc
  }, 0)
  return maxPrice
}
