import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { labels, toyService } from '../services/toy.service.local'
import { saveToy, loadToys } from '../store/actions/toy.actions'
import { ToyList } from '../cmps/ToyIndex/ToyList'
import { ToyFilter } from '../cmps/ToyIndex/ToyFilter'
import { useSearchParams } from 'react-router-dom'
import { ToyModal } from '../cmps/ToyIndex/ToyModal'
import { useNavigate } from 'react-router-dom/dist'

export function ToyIndex() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toys = useSelector(state => state.toyModule.toys)
  const isLoading = useSelector(state => state.toyModule.isLoading)
  const filterBy = useSelector(state => state.toyModule.filterBy)
  
  const [searchParams, setSearchParams] = useSearchParams()

  const isModalOpen = searchParams.has('edit')


  useEffect(() => {
    setSearchParams(filterBy)
    loadToys()
  }, [filterBy])

  function setFilterBy(filterByToEdit) {
    dispatch({ type: 'SET_FILTER', filterByToEdit })
  }

  function openModal(toy) {
    let value = toy._id ? toy._id : 'new'
    console.log('value:', value)
    
    navigate({
      search: `edit=${value}`
    })
  }

  function onAddToy(e, toy) {
    e.preventDefault()
    navigate(-1)
    
    saveToy(toy)
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
        {isModalOpen && <ToyModal onAddToy={onAddToy} />}
        <button className='add-toy-btn' onClick={openModal}>Add Toy</button>
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : toys.length === 0 ? (
        <h2>No toys found...</h2>
      ) : (
        <ToyList toys={toys} openModal={openModal}/>
      )}
    </>
  )
}
