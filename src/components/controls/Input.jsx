import React from 'react'
import { 
  TextField ,
  makeStyles,
  
} from '@material-ui/core'

export const Input = (props) =>{
  const {  name , label , value , onChange } = props
   
  return(
        <TextField
        variant = "outlined"
        label = {label}
        name = {name}
        onChange = {onChange}
        value = {value}
      />
  ) 

}