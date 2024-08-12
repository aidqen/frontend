import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name, label, theme) {
  return {
    fontWeight:
      label.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export function SelectCmp({ labels, filterBy, setFilterBy }) {

  const theme = useTheme()

  function handleChange({target}) {
    const {name, value} = target
    setFilterBy({ ...filterBy, [name]: value})
}
  

  return (
    <div>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Label</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={filterBy.labels}
          name='labels'
          onChange={setFilterBy}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {labels.map(label => (
            <MenuItem
              key={label}
              value={label}
              style={getStyles(label, label, theme)}
            >
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}
