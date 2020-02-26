import React,
{ useContext } from 'react'
import {
  Link,
  withRouter
} from 'react-router-dom'
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'
import {
  SwipeableDrawer,
  List,
  ListItem,
  Grid,
  Typography
} from '@material-ui/core'
//  icons
import HomeIcon from '@material-ui/icons/Home'
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail'
import InfoIcon from '@material-ui/icons/Info'
import DrawerContext from '../../utils/DrawerContext'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  link: {
    color: '#424242',
    textDecorationLine: 'none'
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  typography: {
    // "fontFamily": "\"Bangers\"",
    // "fontSize": 36,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  }
})

const NavDrawer = withRouter(props => <NavDrawerGuts {...props} />)

const NavDrawerGuts = props => {

  const classes = useStyles()

  const { isOpen, toggleDrawer } = useContext(DrawerContext)

  const sideList = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {/* home */}
        <Link to="/" className={classes.link}>
          <ListItem button key={'Home'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <HomeIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  Home
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
        {/* about */}
        <Link to="/about" className={classes.link}>
          <ListItem button key={'About'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <InfoIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  About
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
        {/* projects */}
        <Link to="/projects" className={classes.link}>
          <ListItem button key={'Projects'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <WorkIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  Projects
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
        {/* contact */}
        <Link to="/contact" className={classes.link}>
          <ListItem button key={'Contact'}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <ContactMailIcon />
              </Grid>
              <Grid item xs={8} className={classes.gridItem}>
                <Typography
                  className={classes.typography}
                  component="span">
                  Contact
                </Typography>
              </Grid>
            </Grid>
          </ListItem>
        </Link>
      </List>
    </div>
  )

  return (
    <div>
      <SwipeableDrawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {sideList()}
      </SwipeableDrawer>
    </div>
  )
}

export default NavDrawer