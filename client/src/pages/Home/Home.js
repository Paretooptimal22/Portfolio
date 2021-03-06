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
    backgroundColor: '#424242',
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center'
  },
  cards: {
    margin: 'auto',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
  },
  title: {
    paddingTop: '25px',
    color: '#18ffff'
  },
  body: {
    color: 'white'
  },
  title2: {
    marginTop: '50px',
    color: '#18ffff'
  },
  

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
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h5" align="center" gutterBottom>
            WELCOME TO MY PORTFOLIO!
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="body1" align="center" className={classes.body} gutterBottom>
            I created this website to share some of the projects I have completed and to give a little bit of information about myself. The website is responsive, so please give it a look on your desktop, phone, or tablet.  Thank you!
          </Typography>
        </Grid>
        <br/>
        <Grid item xs={12} className={classes.title2}>
          <Typography variant="h5" align="center" gutterBottom>
            RECENTLY ADDED PROJECTS
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cards}>
          <ProjectCard 
            image={moodly}
            title="Moodly"
            project="Moodly"
            description="Moodly elevates the listening experience by generating playlists matched to your mood."
            link="https://paretooptimal22.github.io/moodly/"
            repo="https://github.com/Paretooptimal22/moodly"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cards}>
          <ProjectCard
            image={flake}
            title="Flake"
            project="Flake"
            description="Need the perfect excuse to get out of any situation?  Flake has you covered."
            link="https://tranquil-reef-16365.herokuapp.com/Home"
            repo="https://github.com/Paretooptimal22/flake"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cards}>
          <ProjectCard
            image={werk}
            title="WERK"
            project="WERK"
            description="Access a vast database of exercises. Create custom workouts. Get to WERK!"
            link="https://fathomless-forest-35789.herokuapp.com/"
            repo="https://github.com/Paretooptimal22/werk"
          />
        </Grid> */}
      </Grid>
    </div>
    
    
  )
}

export default Home