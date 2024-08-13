import { ToyPreview } from './ToyPreview'

export function ToyList({ toys, openModal }) {
  return (
    <div className="toy-list-container">
      <ul className="toy-list">
        {toys.map(toy => {
          return <ToyPreview toy={toy} openModal={openModal} key={toy._id} />
        })}
      </ul>
    </div>
  )
}
