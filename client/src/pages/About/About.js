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
              ABOUT ME
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              Thank you for visiting my website! 
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              I received my Full Stack Web Development Certificate from UC Irvine on February 2020, and I earned my MBA, also from UC Irvine, on June 2019. I decided to learn to code to have a better understanding of digital technologies and what goes on in the background.  
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              On my free time I like to strength train with Russian kettle bells, play soccer, video games, and read about current events in technology/business/economics. I also enjoy learning new things and acquiring more knowledge.  It's fun and it helps me to keep an open mind. 
            </Typography>
            <br/>
            <Typography variant="body1" className={classes.paragraph}>
              Please browse my website. This is only the first iteration and I will be continually updating the site as I get better with programming and learn new technologies, so please stop by often!  You can also access my GitHub and LinkedIn pages by clicking on the icons in the navbar or on under my picture. Thanks again! - Kevin
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  )
}

export default About