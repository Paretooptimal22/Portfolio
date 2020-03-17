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
    maxWidth: '100%',
  },
  grid: {
    maxWidth: '100%',
    backgroundColor: '#424242'
  },
  name: {
    paddingTop: '10px',
    color: '#18ffff'
  },
  step: {
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
  },
  title: {
    paddingTop: '50px',
    color: '#18ffff'
  },
  sub: {
    color: '#18ffff'
  }
  

}))

const Home = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        {/* <Grid item xs={12} alignItems="center" justify="center">
          <Typography variant="h5" align="center" className={classes.name} gutterBottom>
            KEVIN CHRISTIAN YOUNG
        </Typography>
        </Grid>
        <Grid item xs={12} alignItems="center" justify="center">
          <Typography variant="subtitle1" align="center" className={classes.sub} gutterBottom>
            FULL STACK WEB DEVELOPER
        </Typography>
        </Grid>
        <br /> */}
        <Grid item xs={12}>
          <Parallax />
        </Grid>
        <br />
        <Grid item xs={12} alignItems="center" justify="center" className={classes.title}>
          <Typography variant="h5" align="center" gutterBottom>
            LATEST PROJECTS
        </Typography>
        </Grid>
        <Grid item xs={12} className={classes.step}>
          <Stepper />
        </Grid>
      </Grid>
    </div>
    
    
  )
}

export default Home