import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@material-ui/core'
import Nav from '../../components/Nav'
import AboutCard from '../../components/AboutCard'
import me from '../../components/AboutCard/aboutCardPic/me.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    
  },
  grid: {
    
  }
}))

const About = () => {

  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item xs={12} alignContent="center">
          <Grid container justify="center">
            <AboutCard
              image={me}
              about="Hello! I am a tech enthusiast who is passionate about helping organizations succeed in a digitally driven world. Please click the arrow below to learn more about me!"
            />
          </Grid>
          
        </Grid>
        
      </Grid>
      
    </div>
  )
}

export default About