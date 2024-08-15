import { httpService } from '../http.service'
import { utilService } from '../util.service'

const BASE_URL = 'toy/'
const STORAGE_KEY = 'toyDB'

const labels = [
  'on wheels',
  'box game',
  'art',
  'baby',
  'doll',
  'puzzle',
  'outdoor',
  'battery Powered',
]

export const toyService = {
  query,
  getById,
  save,
  remove,
  getEmptyToy,
  getDefaultFilter,
  getDefaultSort,
  getToyLabels,
  addToy,
}

function query(filterBy = {}) {
  return httpService.get(BASE_URL, filterBy)
  // return httpService.get(BASE_URL, { filterBy, sortBy, pageIdx })
}

function getById(toyId) {
  return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
  return httpService.delete(BASE_URL + toyId)
}

function addToy(toyToAdd) {
  return httpService.post(BASE_URL, toyToAdd)
}

function save(toy) {
  const method = toy._id ? 'put' : 'post'
  switch (method) {
    case 'put':
      return httpService[method](BASE_URL + toy._id, toy)
    case 'post':
      return httpService[method](BASE_URL, toy)
  }
}

function getDefaultFilter() {
  return {
    name: '',
    minPrice: 0,
    inStock: false,
    labels: [],
    sortBy: 'date',
    sortByDir: '1',
  }
}

function getDefaultSort() {
  return { type: '', desc: 1 }
}

function getEmptyToy() {
  return {
    name: '',
    price: '',
    labels: _getRandomLabels(),
  }
}

function getToyLabels() {
  return [...labels]
}

function _getRandomLabels() {
  const labelsCopy = [...labels]
  const randomLabels = []
  for (let i = 0; i < 2; i++) {
    const randomIdx = Math.floor(Math.random() * labelsCopy.length)
    randomLabels.push(labelsCopy.splice(randomIdx, 1)[0])
  }
  return randomLabels
}
