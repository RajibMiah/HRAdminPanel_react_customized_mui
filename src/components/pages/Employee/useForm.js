import React,  {useEffect , useState} from 'react'
import {makeStyles} from '@material-ui/core'

export const useFrom = (initalFielValue)=>{

  const [value , setValue] = useState(initalFielValue)

  const handleInputChange = e =>{
   const  {name , value} = e.target
    setValue({
      ...value,
      [name] : value
    })
  }
  return {
    value ,
    setValue,
    handleInputChange
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
   return (
     
     <form className = {classes.root} autoComplete ='off'>
       {props.children}
     </form>
     
   )
}