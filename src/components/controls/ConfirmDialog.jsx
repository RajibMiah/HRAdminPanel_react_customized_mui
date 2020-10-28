import React from 'react'
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@material-ui/core'
import {Controls} from '../controls/controls'
import { makeStyles } from '@material-ui/styles'
import { NotListedLocation } from '@material-ui/icons'

const useStyle = makeStyles(theme =>({
  dialog :{
    padding:theme.spacing(2),
    position: 'absolute',
    top:theme.spacing(5)
  },
  dialogContant:{
    textAlign:'center'
  },
  DialogActions:{
    justifyContent:'center'
  },
  DialogTitle:{
    textAlign:'center'
  },
  titleIcon:{
    backgroundColor:theme.palette.secondary.light,
    color:theme.palette.secondary.main,
    '&:hover':{
      backgroundColor:theme.palette.secondary.light,
      cursor:'default'
    },
    '& .MuiSvgIcon-root':{
      fontSize:'8rem'
    }
  }
}))

const ConfirmDialog = (props) => {
  const classes = useStyle()
  const {  confirmDialog, setConfimDialog } = props
  return (
    <Dialog open={confirmDialog.isOpen}  classes = {{paper : classes.dialog}}>
      <DialogTitle className = {classes.DialogTitle}>
       <IconButton disableRipple className = {classes.titleIcon}>
          <NotListedLocation/>
       </IconButton>
      </DialogTitle>
      <DialogContent className = {classes.dialogContant}>
        <Typography variant='h6'>{confirmDialog.title}</Typography>
        <Typography variant='subtitle2'>{confirmDialog.subTitle}</Typography>
      </DialogContent>
      <DialogActions className = {classes.DialogActions}>
        <Controls.Button
          text = 'No'
          color = 'default'
          onClick = {()=>setConfimDialog({...confirmDialog, isOpen:false})}
        />
        <Controls.Button
          text = 'Yes'
          color = 'secondary'
          onClick = {confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmDialog
