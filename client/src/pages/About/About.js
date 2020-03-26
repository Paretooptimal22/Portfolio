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
    
  },
  title: {
    color: '#18ffff'
  },
  paragraph: {
    color: 'white'
  },
  about: {
    paddingRight: '10px'
  }
}))

const About = () => {

  const classes = useStyles()

  return(
    <div className={classes.root}>
      <Grid container direction="row" alignItems="flex-start" spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={4} >
          <Grid container justify="center">
            <AboutCard
              image={me}
              about="Please click the arrow below to see my credentials. Thank you!"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid container direction="column" className={classes.about}>
            <Typography variant="h4" className={classes.title}>
              About Me
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              Thank you for visiting my website! 
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              I recently earned my MBA and MERN Stack Web Development Certificate from UC Irvine and I am seeking work as a Business Analyst. I enjoy collaborating with others and I am excited to begin working on challenging projects that drive digital transformation!  
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              On my free time I like to play soccer, video games, and read about current events in technology/business/economics.  I'm also a bit of an infovore.  I enjoy learning new things and acquiring more knowledge, no matter who random or confusing the topic is.  It's fun and it helps me to keep an open mind.
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              Please browse my website. It is a work in progress and I will be updating it as I get better with my programming skills, so please stop by often!  You can also access my GitHub and LinkedIn pages by clicking on the icons in the navbar or on under my picture. Thanks again! - Kevin
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default About