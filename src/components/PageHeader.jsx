import React from 'react'
import { Card, Paper, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles(theme =>({
    root: {
      background:"#fdfdff"
    },
    pageHeader:{
      padding:theme.spacing(4),
      display:'flex',
      marginBottom:theme.spacing(2)
    },
    pageIcon:{
      display:"inline-block",
      padding:theme.spacing(2),
      color:'#3c44b1'
    },
    pageTitle:{
      paddingLeft: theme.spacing(4),
      '& .MuiTypography-subtitle2':{
        opactiy: "0.6"
      }
    }
}))

const PageHeader = (props) => {
  const classes = useStyle()
  const { title, subTitle, icon } = props;
  return (
    <div>
      <Paper elevation={0} square={true} className = {classes.root}>
        <div className = {classes.pageHeader}>
          <Card className ={classes.pageIcon}>
            {icon}
          </Card>
          <div className = {classes.pageTitle}>
            <Typography
             variant = "h6"
              component='div'
            >
                  {title}
            </Typography>

            <Typography
              variant='subtitle2'
              component='div'
            >
               {subTitle}

            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default PageHeader
