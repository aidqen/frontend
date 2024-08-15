import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom/dist'
import { toyService } from '../../services/toy/toy.service'

export function ToyModal({  onAddToy }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [toyToAdd, setToyToAdd] = useState({
    name: '',
    price: 0,
    labels: [],
  })

  const paramsId = searchParams.get('edit')
  const isUpdate = paramsId === 'new' ? false : true

  console.log(toyToAdd);
  

  useEffect(() => {
    if (isUpdate) fetchToy(paramsId)
  }, [])
  
  async function fetchToy(params) {
    const toy = await toyService.getById(params)
    setToyToAdd(toy)
  }

  function closeModal() {
    navigate(-1)
  }

  function handleChange({ target }) {
    const { name, value } = target
    if (name === 'labels') {
      setToyToAdd(state => ({ ...state, [name]: value.split(',') }))
    } else {
      setToyToAdd(state => ({ ...state, [name]: value }))
    }
  }

  return (
    <>
      <div className="backdrop"></div>
      <div className="modal">
        <div className="modal-content">
          <button className="close" onClick={closeModal}>
            &times;
          </button>
          <h2>Add Toy</h2>
          <form
            onSubmit={(e) => onAddToy(e, toyToAdd)}
            className="flex flex-column"
          >
            <input
              placeholder="Name..."
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={toyToAdd.name}
            />

            <input
              placeholder="Price..."
              type="text"
              id="price"
              name="price"
              onChange={handleChange}
              value={toyToAdd.price}
            />
            <input
              placeholder="Labels..."
              type="text"
              id="labels"
              name="labels"
              onChange={handleChange}
              value={toyToAdd.labels.join(',')}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  )
}
