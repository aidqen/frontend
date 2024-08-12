import { ToyPreview } from './ToyPreview'

export function ToyList({ toys }) {
  return (
    <div className="toy-list-container">
      <ul className="toy-list">
        {toys.map(toy => {
          return <ToyPreview toy={toy} key={toy._id} />
        })}
      </ul>
    </div>
  )
}
