import React,
{
  useContext,
  useState
} from 'react'
import {
  Redirect,
  Link,
  withRouter
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import DrawerContext from '../../utils/DrawerContext'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    background: '#424242',
    color: '#18ffff',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  appbar: {
    outlineColor: '#00b8d4'
  }
}))

const Nav = withRouter(props => <NavGuts {...props} />)

const NavGuts = props => {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const { toggleDrawer } = useContext(DrawerContext)

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            KEVIN CHRISTIAN YOUNG
          </Typography>
          <Button href="https://github.com/Paretooptimal22" color="inherit">
            <GitHubIcon />
          </Button>
          <Button href="https://linkedin.com/in/kevin-christian-young-323b28103" color="inherit">
            <LinkedInIcon />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav