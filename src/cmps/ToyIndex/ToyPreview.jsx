import { useNavigate } from "react-router-dom"
import { utilService } from "../../services/util.service"


export function ToyPreview({ toy }) {
  const navigate = useNavigate()
  const { name, price, labels, inStock, _id } = toy
  
  return (
    <>
      <li key={name} onClick={() => navigate(`/toys/${_id}`)}>
        <h2>{name}</h2>
        <p className="price">
          Price: <span>{price}</span>
        </p>
        <p className="labels">
          {labels.map(label => (
            <span title={label} key={label}>{label}</span>
          ))}
        </p>
        <p className={inStock ? 'in-stock' : 'out-of-stock'}>
          {inStock ? 'In Stock!' : 'Out Of Stock...'}
        </p>
      </li>
    </>
  )
}
