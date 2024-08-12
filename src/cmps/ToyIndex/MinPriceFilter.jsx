import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import Typography from '@mui/material/Typography'
import { getMaxToyPrice } from '../../store/actions/toy.actions'

export function MinPriceFilter({ filterBy, setFilterBy }) {

  const MAX = 150
  // const MAX = getMaxToyPrice()

  const MIN = 0
  const marks = [
    {
      value: MIN,
      label: '',
    },
    {
      value: MAX,
      label: '',
    },
  ]
  function handleChange({ target }, minPrice = null) {
    const { value } = target
    if (!minPrice) {
      setFilterBy({ ...filterBy, minPrice: value })
    }
    setFilterBy({ ...filterBy, minPrice })
  }
  return (
    <Box sx={{ width: 250 }}>
      <Slider
        marks={marks}
        step={5}
        value={filterBy.minPrice}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          onClick={e => handleChange(e, MIN)}
          sx={{ cursor: 'pointer' }}
        >
          {MIN} min
        </Typography>
        <Typography
          variant="body2"
          onClick={e => handleChange(e, MAX)}
          sx={{ cursor: 'pointer' }}
        >
          {MAX} max
        </Typography>
      </Box>
    </Box>
  )
}
