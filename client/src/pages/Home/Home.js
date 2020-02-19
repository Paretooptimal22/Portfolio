import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'
import Nav from '../../components/Nav'
import Jumbotron from '../../components/Jumbotron'


const Home = () => {
  return (
    <div>
      <Nav />
      <br/>
      <br/>
      <Container>
        <Grid>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" gutterBottom>
              KEVIN CHRISTIAN YOUNG
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" align="center" gutterBottom>
              WEB DEVELOPER
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br/>
      <Jumbotron />
      

    </div>
  )
}

export default Home