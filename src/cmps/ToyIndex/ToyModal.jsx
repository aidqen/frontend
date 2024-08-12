import { useState } from "react";

export function ToyModal({ setOpenModal, onAddToy }) {
    const [toyToAdd, setToyToAdd] = useState({});
    
  return (
    <>
    <div className="backdrop"></div>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => setOpenModal(false)}>
            &times;
          </span>
          <h2>Add Toy</h2>
          <form className="flex flex-column">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
            <label htmlFor="price">Price:</label>
            <input type="text" id="price" name="price" />
            <label htmlFor="labels">Labels:</label>
            <input type="text" id="labels" name="labels" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </>
  )
}
