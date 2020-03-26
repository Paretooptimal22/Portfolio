import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles(theme => ({
  root: {
    width: 350,
    // marginTop: '25px'
  },
  media: {
    // height: 500,
    paddingTop: '100%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#18ffff',
    color: '#424242'
  },
  contentArea: {
    backgroundColor: '#607d8b',
    
  },
  actionsArea: {
    backgroundColor: '#18ffff',
    
  },
  icon: {
    color: '#424242'
  },
  type: {
    color: 'white'
  },
  header: {
    backgroundColor: '#607d8b',
    color: 'white'
  },
  divider: {
    backgroundColor: '#424242'
  }
}))

const AboutCard = props => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [dense, setDense] = React.useState(false)
  const [openEdu, setOpenEdu] = React.useState(true)
  const [openTech, setOpenTech] = React.useState(true)
  const [openSkill, setOpenSkill] = React.useState(true)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handleClickEdu = () => {
    setOpenEdu(!openEdu)
  }

  const handleClickTech = () => {
    setOpenTech(!openTech)
  }

  const handleClickSkill = () => {
    setOpenSkill(!openSkill)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            K
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Business Analysis | MERN Stack"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title="Me"
      />
      <CardContent className={classes.contentArea}>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.type}>
          {props.about}
        </Typography>
      </CardContent>
      <Divider className={classes.divider} />
      <CardActions className={classes.actionsArea} disableSpacing>
        <IconButton href="https://github.com/Paretooptimal22" aria-label="github">
          <GitHubIcon className={classes.icon} />
        </IconButton>
        <IconButton href="https://linkedin.com/in/kevin-christian-young-323b28103" aria-label="linkedIn">
          <LinkedInIcon className={classes.icon} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon className={classes.icon} />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List component="nav">
            <ListItem button onClick={handleClickEdu}>
              <Typography variant="h6">Education:</Typography>
              {openEdu ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openEdu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText
                    primary="UC Irvine Division of Continuing Education"
                    secondary="Full Stack Web Development | Feb'20"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="UC Irvine Paul Merage School of Business"
                    secondary="Master of Business Administration | Jun'19"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Cal State University, Fullerton"
                    secondary="Bachelor of Arts Economics | Dec '09"
                  />
                </ListItem>
              </List>        
            </Collapse>        
          </List>
          <List component="nav">
            <ListItem button onClick={handleClickTech}>
              <Typography variant="h6">Technologies</Typography>
              {openTech ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openTech} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText
                    primary="HTML"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="CSS"
                    secondary="Bootstrap | Materialize | Material-UI"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="JavaScript"
                    secondary="jQuery"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="MERN Stack"
                    secondary="MongoDB | Express | React | Node"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="mySQL"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="VBA"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Python"
                    secondary="pandas | matplotlib | plotly | cufflinks"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Tableau"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Microsoft Office"
                    secondary="Excel | Access | Word | Outlook"
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <List component="nav">
            <ListItem button onClick={handleClickSkill}>
              <Typography variant="h6">Skills:</Typography>
              {openSkill ? <ExpandMore /> : <ExpandLess />}
            </ListItem>
            <Collapse in={!openSkill} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem>
                  <ListItemText
                    primary="Teamwork"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Data Analysis & Visualization"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Communication"
                    secondary="Written | Verbal"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Agile / Scrum"
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  )

}

export default AboutCard