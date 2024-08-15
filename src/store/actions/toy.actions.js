import { toyService } from '../../services/toy/toy.service'
import { ADD_TOY, SET_LOADING, UPDATE_TOY } from '../reducers/toy.reducer'

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
export async function saveToy(toy) {
  let type = toy._id ? UPDATE_TOY : ADD_TOY
  const toyToSave = await toyService.save(toy)
  gStore.dispatch({ type, toyToSave })
}



