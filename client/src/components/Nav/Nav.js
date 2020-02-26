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
    background: 'white',
    color: 'black',
    padding: 10
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
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton 
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu"
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} align="center">
            PORTFOLIO
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav