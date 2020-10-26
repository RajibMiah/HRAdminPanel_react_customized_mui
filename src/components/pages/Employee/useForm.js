import React,  {useEffect , useState} from 'react'
import {makeStyles} from '@material-ui/core'

export const useFrom = (initalFielValue)=>{

  const [value , setValue] = useState(initalFielValue)
  const [errors , setErrors] = useState({})

  const handleInputChange = e =>{
   const  {name , value} = e.target
    setValue({
      ...value,
      [name] : value
    })
  }
  const handleRest = () =>{
    setValue(initalFielValue)
  }
  return {
    value ,
    setValue,
    errors,
    setErrors,
    handleInputChange,
    handleRest
  }
}


const useStyle = makeStyles(theme =>({
  root:{
    '& .MuiTextField-root':{
      margin:theme.spacing(1),
      width:'80%'
    }
  }
}))

export const From =(props)=>{
  const classes = useStyle()
  const {children , ...other} = props
   return (
     
     <form className = {classes.root} autoComplete ='off' {...other}>
       {props.children}
     </form>
     
   )
}