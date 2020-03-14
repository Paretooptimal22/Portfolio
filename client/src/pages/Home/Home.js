import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import Nav from '../../components/Nav'
import Stepper from '../../components/Stepper'
import Parallax from '../../components/Parallax'

const useStyles = makeStyles(theme => ({
  root: {

  },
  name: {
    paddingTop: '50px'
  },
  step: {
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
  }
  

}))

const Home = () => {

  const classes = useStyles()

  return (
    <Grid container className={classes.root}>
      {/* <Grid item xs={12} alignItems="center" justify="center">
        <Nav />
      </Grid>
      <br /> */}
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
        <Parallax />
      </Grid>
      <br/>
      <Grid item xs={12} alignItems="center" justify="center" className={classes.name}>
        <Typography variant="h6" align="center" gutterBottom>
          PROJECTS
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.step}>
        <Stepper />
      </Grid>
    </Grid>
    
  )
}

export default Home