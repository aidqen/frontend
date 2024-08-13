import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { saveToy } from '../../store/actions/toy.actions'

export function ToyPreview({ toy, openModal }) {
  const navigate = useNavigate()
  const [updateToy, setUpdateToy] = useState(false)

  const { name, price, labels, inStock, _id } = toy

  return (
    <>
      <li
        key={name}
        onMouseOver={() => setUpdateToy(true)}
        onMouseLeave={() => setUpdateToy(false)}
      >
        <h2>{name}</h2>
        <p className="price">
          Price: <span>{price}</span>
        </p>
        <p className="labels">
          {labels.map(label => (
            <span title={label} key={label}>
              {label}
            </span>
          ))}
        </p>
        <div className="preview-tags flex flex-row align-center">
          <p className={inStock ? 'in-stock' : 'out-of-stock'}>
            {inStock ? 'In Stock!' : 'Out Of Stock...'}
          </p>
          {updateToy && (
            <>
              <button className="update-btn" onClick={() => openModal(toy)}>
                Update
              </button>
              <button className='details-btn' onClick={() => navigate(`/toys/${_id}`)}>Details</button>
            </>
          )}
        </div>
      </li>
    </>
  )
}
