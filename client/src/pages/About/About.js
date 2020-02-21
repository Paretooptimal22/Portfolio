import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import Nav from '../../components/Nav'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  
}))

const About = () => {

  const classes = useStyles()

  return(
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.nav} alignItems="center" justify="center">
        <Nav />
      </Grid>
      <br/>
      <Grid item xs={12} alignItems="center" justify="center">
        <Typography variant="h6" align="center" gutterBottom>
          About Me
        </Typography>
      </Grid>
    </Grid>
  )
}

export default About