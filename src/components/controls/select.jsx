import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
const useStyle = makeStyles(theme => ({
  select:{
    
      width:'80%',
      left: "5px"
  }
}
))

const SelectContent = (props) => {
  const classes = useStyle()
  const { name, value, label, onChange, options } = props
  return (
    <FormControl
      variant="outlined"
      className={classes.select}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        

      >
        <MenuItem value="">  None</MenuItem>
        {
          options.map(
            (
              item => (<MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>))
          )
        }

      </Select>

    </FormControl>
  )
}

export default SelectContent

