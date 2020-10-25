import React from 'react'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SearchIcon from '@material-ui/icons/Search';
import {
  AppBar , 
  Toolbar ,
  Grid ,
  InputBase,
  Badge , 
  IconButton ,

   } from '@material-ui/core'
import { makeStyles  } from '@material-ui/styles';




const useStyle = makeStyles({
  root: {
     background:'#ffff',
     transform: 'translatez(0)'
  },
  searchInput:{
    opacity:'0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    '&:hover':{
        background: '#f2f2f2'
    },
    '& .MuiSvgIcon-root':{
       marginRight: '8px'
    }
  }
})   
const Header = () => {
  const classes = useStyle()
  return (
    <div >
      <AppBar position = "static" className = {classes.root}>
        <Toolbar>
             <Grid container alignItems = 'center'>
               <Grid item>
                  <InputBase
                   className = {classes.searchInput}
                   placeholder = 'search'
                   startAdornment = {<SearchIcon fontSize= 'small'/>}
                  />
               </Grid>
               <Grid item sm></Grid>
               <Grid item>
                 <IconButton>
                   <Badge badgeContent  = {4} color = 'secondary'>
                     <NotificationsActiveIcon fontSize = 'small'/>
                   </Badge>
                 </IconButton>
                 <IconButton>
                   <Badge badgeContent  = {4} color = 'primary'>
                      <ChatBubbleIcon fontSize = 'small'/>
                   </Badge>
                 </IconButton>
                 <IconButton>
                   <Badge  >
                      <PowerSettingsNewIcon/>
                   </Badge>
                 </IconButton>

               </Grid>

             </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
