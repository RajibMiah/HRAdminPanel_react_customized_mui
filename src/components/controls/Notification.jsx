import React, { useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme =>({
  root:{
    top:theme.spacing(9)
  }
}))

const Notification = (props) => {
  const classes = useStyle()
  const {notify ,    setNotify } = props

  const handleClose = (event , reason) =>{
    if(reason === 'clickway'){
      return
    }
    setNotify({
      ...notify,
      isOpen:false
    })
  }

  return (
    <Snackbar
      className = {classes.root}
      open = {notify.isOpen}
      autoHideDuration = {1000}
      anchorOrigin = {{vertical:'top' , horizontal: 'right'}}
      onClose = {handleClose}
    >
      <Alert 
      severity = {notify.type}
      onClose = {handleClose}
      >
          {notify.message}
      </Alert>
    </Snackbar>
  )
}

export default Notification
