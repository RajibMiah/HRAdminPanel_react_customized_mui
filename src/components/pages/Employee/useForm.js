import React,  {useEffect , useState} from 'react'
import {makeStyles} from '@material-ui/core'

export const useFrom = (initalStateValue , validateOnChange = false ,validate)=>{

  const [values, setValues] = useState(initalStateValue);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initalStateValue);
        setErrors({})
    }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
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