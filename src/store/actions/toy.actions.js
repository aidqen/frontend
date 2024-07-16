import { toyService } from "../../services/toy.service.local"

export function loadToys() {
    toyService.query().then(toys => {
      gStore.dispatch({ type: 'SET_TOYS', toys })
    })
  }