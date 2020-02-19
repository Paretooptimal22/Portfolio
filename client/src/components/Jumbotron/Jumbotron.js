import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Container } from '@material-ui/core'
import mountains from './jumbotronPics/mountains7.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  div: {
    padding: theme.spacing(2),
    textAlign: 'center',
    padding: 0
  }
  
}))

const Jumbotron = () => {
  const classes = useStyles()
  return (
    <Grid className={classes.root} maxWidth="xl">
      <Grid item>
        <div className={classes.div}>
          <img src={mountains} alt="mountains"/>
        </div>
      </Grid>
    </Grid>
  )
}

export default Jumbotron