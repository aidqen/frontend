import { SelectCmp } from '../SelectCmp'
import { MinPriceFilter } from './MinPriceFilter'

export function ToyFilter({ setFilterBy, filterBy, labels }) {

  const { sortBy, sortByDir, name, inStock } = filterBy

  function handleChange({ target }) {
    const { name, value, checked } = target
    switch (name) {
      case 'inStock':
        setFilterBy({ ...filterBy, [name]: checked })
        break
      default:
        setFilterBy({ ...filterBy, [name]: value })
        break
    }
  }

  return (
    <section className="toy-filter flex flex-column justify-start align-start">
      <div className="filters-section-1 flex flex-row align-center ">
        <input
          type="text"
          name="name"
          placeholder="Search"
          value={name}
          onChange={handleChange}
        />
        <MinPriceFilter filterBy={filterBy} setFilterBy={setFilterBy} />
      </div>
      <div className="filters-section-2 flex flex-row align-center">
        <SelectCmp
          labels={labels}
          filterBy={filterBy}
          setFilterBy={handleChange}
        />
        <label>
          In Stock
          <input
            type="checkbox"
            name="inStock"
            checked={inStock}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="sort-by">
        <label>
          Sort By:
          <select name="sortBy" value={sortBy} onChange={handleChange}>
            <option value="date">Date</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="inStock">In Stock</option>
          </select>
        </label>

          <select name="sortByDir" value={sortByDir} onChange={handleChange}>
            <option value="1">Ascending</option>
            <option value="-1">Descending</option>
          </select>
      </div>
    </section>
  )
}
