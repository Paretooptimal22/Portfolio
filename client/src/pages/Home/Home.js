import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import Nav from '../../components/Nav'
import Jumbotron from '../../components/Jumbotron'

const useStyles = makeStyles(theme => ({
  root: {

  },

}))

const Home = () => {

  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} alignItems="center" justify="center">
        <Nav />
      </Grid>
      <br />
      <Grid item xs={12} alignItems="center" justify="center">
        <Typography variant="h6" align="center" gutterBottom>
          KEVIN CHRISTIAN YOUNG
        </Typography>
      </Grid>
      <Grid item xs={12} alignItems="center" justify="center">
        <Typography variant="subtitle1" align="center" gutterBottom>
          FULL STACK WEB DEVELOPER
        </Typography>
      </Grid>
      <br />
      <Grid item xs={12}>
        <Jumbotron />
      </Grid>
      
    </Grid>
    
  )
}

export default Home