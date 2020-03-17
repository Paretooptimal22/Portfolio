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
import GitHubIcon from '@material-ui/icons/GitHub'
import DrawerContext from '../../utils/DrawerContext'

const useStyles = makeStyles({
  list: {
    width: 250,
    height: '100%',
    background: '#18ffff'
  },
  fullList: {
    width: 'auto',
  },
  link: {
    textDecorationLine: 'none'
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    color: "#424242"
  },
  typography: {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  },
  icon: {
    color: "#424242"
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
              <Grid item xs={4} className={classes.icon}>
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
              <Grid item xs={4} className={classes.icon}>
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
              <Grid item xs={4} className={classes.icon}>
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