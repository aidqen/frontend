import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { labels, toyService } from '../services/toy.service.local'
import { loadToys } from '../store/actions/toy.actions'
import { ToyList } from '../cmps/ToyIndex/ToyList'
import { CircularProgress } from '@mui/material'
import { ToyFilter } from '../cmps/ToyIndex/ToyFilter'
import { useSearchParams } from 'react-router-dom'
import { ToyModal } from '../cmps/ToyIndex/ToyModal'

export function ToyIndex() {
  const dispatch = useDispatch()
  const toys = useSelector(state => state.toyModule.toys)
  const isLoading = useSelector(state => state.toyModule.isLoading)
  const filterBy = useSelector(state => state.toyModule.filterBy)
  const [openModal, setOpenModal] = useState(false);
  
  const [searchParams, setSearchParams] = useSearchParams()

  console.log(toys);

  useEffect(() => {
    setSearchParams(filterBy)
    loadToys()
  }, [filterBy])

  function setFilterBy(filterByToEdit) {
    dispatch({ type: 'SET_FILTER', filterByToEdit })
  }

  function onAddToy() {
    setOpenModal(true)

  }

  return (
    <>
      <div className="toy-list-header flex flex-column">
        <h1>Our Toys</h1>
        <ToyFilter
          filterBy={filterBy}
          setFilterBy={setFilterBy}
          labels={labels}
        />
        {openModal && <ToyModal setOpenModal={setOpenModal} />}
        <button className='add-toy-btn' onClick={onAddToy} >Add Toy</button>
      </div>
      {isLoading ? (
        <CircularProgress />
      ) : toys.length === 0 ? (
        <h2>No toys found...</h2>
      ) : (
        <ToyList toys={toys} />
      )}
    </>
  )
}
