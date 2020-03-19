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
              I recently earned my MBA and MERN Stack Web Development Certificate from UC Irvine and I am excited to begin working on challenging projects that drive digital transformation.  I am seeking work as a Business Analyst, working with both the business group and techincal team to strategize and implement organizational change that drives innovation.
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              I also believe in the importance continuous self-improvement and lifelong learning. I am currently taking courses on Udemy to learn "Python for Data Science and Machine Learning." I enjoy learning new skills and technologies, and I'm looking forward for my next topic! 
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              Please browse my website. I will be continually improving it and adding new projects to the "Portfolio" section as I get better with my programming skills, so please stop by often!  You can also access my GitHub and LinkedIn pages by clicking on the icons in the navbar or on under my picture. Thanks again! - Kevin
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default About