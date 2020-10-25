import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import React from 'react'

const CheckBox = (props) => {
  const {name ,value , label , onChange } = props
  const converToDefaultEventPara = (name , value) =>({
      target:{
        name , value
      }
  })
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={value}
            onChange={e => onChange(converToDefaultEventPara(name , e.target.checked))}
            name={name}
            color="primary"
          />
        }
        label={label}
      />
      </FormGroup>
  )
}

export default CheckBox
