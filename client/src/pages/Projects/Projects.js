import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import ProjectCard from '../../components/ProjectCard'
import moodly from '../../components/ProjectCard/projectPics/moodly.PNG'
import werk from '../../components/ProjectCard/projectPics/werk.PNG'
import flake from '../../components/ProjectCard/projectPics/flake.PNG'

const useStyles = makeStyles(theme => ({
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
    color: '#18ffff'
  },
  body: {
    color: 'white'
  }

}))

const Projects = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <br/>
      <Grid container className={classes.grid} >
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h4" align="center">
            PORTFOLIO
          </Typography>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="body1" align="center" className={classes.body} gutterBottom>
              Please take a look at the team projects that I contributed to. There are links to the deployed website and the GitHub repositories for each project as well.  
          </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid container direction="row" spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6} md={4} className={classes.cards}>
          <ProjectCard
            image={moodly}
            title="Moodly"
            project="Moodly"
            description="Moodly elevates the listening experience by generating playlists matched to your mood."
            link="https://paretooptimal22.github.io/moodly/"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cards}>
          <ProjectCard
            image={flake}
            title="Flake"
            project="Flake"
            description="Need the perfect excuse to get out of any situation?  Flake has you covered."
            link="https://tranquil-reef-16365.herokuapp.com/Home"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} className={classes.cards}>
          <ProjectCard
            image={werk}
            title="WERK"
            project="WERK"
            description="Access a vast database of exercises. Create custom workouts. Get to WERK!"
            link="https://fathomless-forest-35789.herokuapp.com/"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Projects