import React from 'react'
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl
} from '@material-ui/core'
export const RadioGroupContent = (props) => {
  const { name, label, value, onChange, items } = props
  return (
    <FormControl component = 'fieldset'>
      <FormLabel component = 'legend' >{label}</FormLabel>
      <RadioGroup  row
          name={name}
          value={value} 
          onChange={onChange}>

           {
             items.map((item , index) =>(
              <FormControlLabel key = {index} value= {item.id} control={<Radio />} label= {item.title} />
             ))
            }
      </RadioGroup>
    </FormControl>
  )
}

