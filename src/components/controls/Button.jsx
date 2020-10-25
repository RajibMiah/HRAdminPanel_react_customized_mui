import React from 'react'
import {Button , makeStyles } from '@material-ui/core'

const useStyle = makeStyles(theme =>({
  root:{
    margin:theme.spacing(0.5)
  },
  label:{
    textTransform: 'none'
  }
}))

const ButtonContainer = (props) => {
  const classes = useStyle()
  const {text , size , color , variant , onClick , ...other} = props
  return (
     <Button
     variant= {variant ||  "contained"}
     color= {color || "primary"}
     size = {size || "large"}
     onClick = {onClick}
     {...other}
      classes= {{root: classes.root , label: classes.label }}
     >
    
     {text}
     </Button>
    )
}

export default ButtonContainer
