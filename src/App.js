import React from 'react'
import SideMenu from './components/SideMenu'
import Emmployes from './components/pages/Employee/Employes'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Header from './components/Header'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles'

import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c55b126"
    },
    secondary: {
      main: "#f83245",
      light: "#f8234526"
    },
    background: {
      default: '#f4f5fd'
    }
  },
  shape:{
    // borderRadius:"12px"
  },
  props:{
    MuiIconButton:{
      disableRipple: true
    }
  }
});


const useStyle = makeStyles({
  appMain: {
    // paddingLeft: '0px',
    width: '100%'
  }
})

function App() {
  const classes = useStyle()
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <SideMenu /> */}
        <div className={classes.appMain}>
          <Header />
          <Emmployes/>
        </div>
        <CssBaseline />
      </div>
    </ThemeProvider>

  )
}

export default App

