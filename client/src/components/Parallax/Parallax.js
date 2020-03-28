import React from 'react'
import { Parallax } from 'react-parallax'
import {
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Jumbotron from '../Jumbotron'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
    },
    secondary: {
      main: "#f44336"
    },
  },
  
})

const Parallaxx = _ => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* -----basic config-----*/}
        <Parallax
          blur={0}
          bgImage={require('./parallaxPics/tech.jpg')}
          bgImageAlt="coding"
          strength={800}
        >
          <div>
            
            
          </div>
          <div style={{ height: '500px' }} />
        </Parallax>


      </div>
    </ThemeProvider>
  )
}

export default Parallaxx