import { storageService } from './async-storage.service'
import { utilService } from './util.service'
import fs from 'fs'

export const labels = [
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
  getDefaultFilter,
  getById,
}

function query() {
  const filterBy = gStore.getState().toyModule.filterBy
  const { name, minPrice, inStock, labels, sortBy, sortByDir } = filterBy

  return storageService.query(STORAGE_KEY).then(toys => {
    if (!toys || !toys.length) {
      const createdToys = createToys()
      storageService.save(STORAGE_KEY, createdToys)
      return createdToys
    }
    if (name) {
      const regExp = new RegExp(name, 'i')
      toys = toys.filter(toy => regExp.test(toy.name))
    }
    if (minPrice) {
      toys = toys.filter(toy => toy.price >= minPrice)
    }
    if (labels) {
      toys = toys.filter(toy => {
        return labels.every(label => toy.labels.includes(label))
      })
    }
    if (inStock) {
      toys = toys.filter(toy => toy.inStock)
    }

    if (sortBy) {
      switch (sortBy) {
        case 'name':
          if (sortByDir === '1') {
            toys = toys.sort((a, b) => a.name.localeCompare(b.name))
          } else toys = toys.sort((a, b) => b.name.localeCompare(a.name))
          break
        case 'price':
          toys = toys.sort((a, b) => (a.price - b.price) * sortByDir)
          break
        case 'inStock':
          toys = toys.sort((a, b) => (a.inStock - b.inStock) * sortByDir)
          break
        case 'date':
          toys = toys.sort((a, b) => (b.createdAt - a.createdAt) * sortByDir)
          break
      }
    }

    return toys
  })
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

function writeJsonFile(path, data) {
  return new Promise((resolve, reject) => {
      const jsonData = JSON.stringify(data, null, 2)

      fs.writeFile(path, jsonData, (err) => {
          if (err) return reject(err)
          resolve()
      })
  })
}

export function createToys() {
  const createdToys = []

  for (let i = 0; i < 15; i++) {
    const toy = {
      _id: utilService.makeId(),
      name: utilService.generateToyName(5),
      price: utilService.getRandomIntInclusive(1, 200),
      labels: _getRandomLabels(),
      createdAt: utilService.getRandomTimestamp('01-12-2020', '01-12-2024'),
      inStock: Math.random() > 0.5,
    }

    createdToys.push(toy)
  }
  writeJsonFile('data/toy.json', createdToys)
  return createdToys
}

function _getRandomLabels() {
  return labels.filter(label => Math.random() > 0.5)
}

function getById(toyId) {
  return storageService.get(STORAGE_KEY, toyId)
}
