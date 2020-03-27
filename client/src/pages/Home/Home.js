import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import Nav from '../../components/Nav'
import Parallax from '../../components/Parallax'
import ProjectCard from '../../components/ProjectCard'
import moodly from '../../components/ProjectCard/projectPics/moodly.PNG'
import werk from '../../components/ProjectCard/projectPics/werk.PNG'
import flake from '../../components/ProjectCard/projectPics/flake.PNG'

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
  cards: {
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
        <Grid item xs={12}>
          <Parallax />
        </Grid>
      </Grid>
      <br/>
      <Grid container direction="row" spacing={2} className={classes.grid}>
        <Grid item xs={12} alignItems="center" justify="center" className={classes.title}>
          <Typography variant="h5" align="center" gutterBottom>
            LATEST PROJECTS
        </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} alignItems="center" justify="center" className={classes.cards}>
          <ProjectCard 
            image={moodly}
            title="Moodly"
            project="Moodly"
            description="Moodly elevates the listening experience by generating playlists matched to your mood."
            link="https://paretooptimal22.github.io/moodly/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} alignItems="center" justify="center" className={classes.cards}>
          <ProjectCard
            image={flake}
            title="Flake"
            project="Flake"
            description="Need the perfect excuse to flake out of any situation?  We made an app for that."
            link="https://tranquil-reef-16365.herokuapp.com/Home"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} alignItems="center" justify="center" className={classes.cards}>
          <ProjectCard
            image={werk}
            title="WERK"
            project="WERK"
            description="Join a fitness community and get to WERK! Create your workout or use our workouts."
            link="https://fathomless-forest-35789.herokuapp.com/"
          />
        </Grid>
      </Grid>
    </div>
    
    
  )
}

export default Home