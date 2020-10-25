import React from 'react'
import EmployesFrom from '../../pages/Employee/EmplyesFrom'
import PageHeader from '../../PageHeader'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import {makeStyle , makeStyles, Paper } from '@material-ui/core'


const useStyle = makeStyles(theme =>({
  pageContent:{
    margin:theme.spacing(5),
    padding: theme.spacing(3)

  }
}))
const Employes = () => {
  const classes = useStyle()

  return (
    <div>
        <PageHeader
            title = "New Emplyees"
            subTitle = "From design with validation"
            icon = {<PeopleOutlineIcon fontSize ="large"/>}
          />
          <Paper className = {classes.pageContent}>
             <EmployesFrom/>
          </Paper>
      
    </div>
  )
}

export default Employes
