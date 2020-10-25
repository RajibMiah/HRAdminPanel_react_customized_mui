import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  sideMenu:{
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053'
  }
});
const SideMenu = () => {
  const classes = useStyles()
  return (
    <div className = {classes.sideMenu}>
      <h2>side menu</h2>
    </div>
  )
}

export default SideMenu
