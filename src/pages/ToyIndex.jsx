import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toyService } from '../services/toy.service.local'
import { loadToys } from '../store/actions/toy.actions'

export function ToyIndex() {
  const dispatch = useDispatch()

  const toys = useSelector(state => state.toyModule.toys)
  const filterBy = useSelector(state => state.toyModule.filterBy)
  console.log(toys);

  useEffect(() => {
    loadToys()
  }, [filterBy])



  return (
    <>
      <div>My Toys</div>
    </>
  )
}
