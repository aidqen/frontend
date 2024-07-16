import { storageService } from './async-storage.service'
import { utilService } from './util.service'

const labels = [
  'On wheels',
  'Box game',
  'Art',
  'Baby',
  'Doll',
  'Puzzle',
  'Outdoor',
  'Battery Powered',
]

const STORAGE_KEY = 'toysDB'

export const toyService = {
  query,
}

function query() {
  return storageService.query(STORAGE_KEY).then((toys) => {
    if (!toys || !toys.length) {
      const createdToys = createToys()
      storageService.save(STORAGE_KEY, createdToys)
      return createdToys
    }
    return toys
  })
}

export function createToys() {
  const createdToys = []

  for (let i = 0; i < 15; i++) {
    const toy = {
      id: utilService.makeId(),
      name: utilService.makeLorem(5),
      price: utilService.getRandomIntInclusive(1, 200),
      labels: _getRandomLabels(),
      createdAt: utilService.getRandomTimestamp('01-12-2020', '01-12-2024'),
      inStock: Math.random() > 0.5,
    }

    createdToys.push(toy)
  }

  return createdToys
}

function _getRandomLabels() {
  return labels.filter(label => Math.random() > 0.5)
}
