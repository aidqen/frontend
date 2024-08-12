import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toyService } from '../services/toy.service'
import { utilService } from '../services/util.service'

export function ToyDetails() {
  const params = useParams()
  const [toy, setToy] = useState(null)

  // const { name, price, inStock, labels} = toy
  useEffect(() => {
    if (params.toyId) {
      fetchToy()
    }
  }, [params._toyId])
  
  async function fetchToy() {
    const toyId = params.toyId
    console.log('toyId:', toyId)
    const toyItem = await toyService.getById(toyId)
    setToy(toyItem)
  }

  if (!toy) return <div>Loading...</div>
  console.log(toy.name);
  return (
    <div className="toy-details-container">
      <h1>{toy.name}</h1>
      <img
        src={`https://robohash.org/${toy.name}?size=200x200`}
        alt="Toy Image"
      />
      <p>
        Description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quod?
      </p>
      <p>
        Price: <span>{toy.price}$</span>
      </p>
      <h4 className="labels">
        {toy.labels.map(label => (
          <span key={label}>{label}</span>
        ))}
      </h4>
      <h4>Brought to the store at: {utilService.getTimeOfSent(toy.createdAt)}</h4>
      <h4>{toy.inStock ? 'In Stock' : 'Out of stock'}</h4>
      <button>Add to Cart</button>
    </div>
  )
}
