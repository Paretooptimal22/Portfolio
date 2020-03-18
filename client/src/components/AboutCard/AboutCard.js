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

  const handleExpandClick = () => {
    setExpanded(!expanded)
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
        <IconButton aria-label="add to favorites">
          <GitHubIcon className={classes.icon} />
        </IconButton>
        <IconButton aria-label="share">
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
          <Typography variant="h6">Education:</Typography>
          <List dense={dense}>
            <ListItem>
              <ListItemText
                primary="UC Irvine Division of Continuing Education"
                secondary="Full Stack Web Development | Feb'20"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="UC Irvine "
                secondary="MBA | Jun'19"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Cal State Fullerton"
                secondary="BA Economics | Dec '09"
              />
            </ListItem>
          </List>
          <Typography variant="h6">Technologies & Skills</Typography>
          <List>
            <ListItem>
              <ListItemText
                primary="HTML"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="CSS"
                secondary="Bootstrap, Materialize, Material-UI"
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
                secondary="MondoDB, Express, React, Node"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="mySQL"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="SQL"
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
                secondary="In Progress on Udemy"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Tableau"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Agile / Scrum"
              />
            </ListItem><ListItem>
              <ListItemText
                primary="Microsoft Office"
                secondary="Excel, Access, Word, Outlook"
              />
            </ListItem>
          </List>
          {/* <Typography variant="h6">Education:</Typography>
          <Typography paragraph>
            UC Irvine Division of Continuing Education - Full Stack Web Development - Feb '20
          </Typography>
          <Typography paragraph>
            UC Irvine - MBA - Jun '19
          </Typography>
          <Typography paragraph>
            Cal State Fullerton - BA Economics - Dec '09
          </Typography>
          <Typography variant="h6">
            Technologies and Skills:
          </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  )

}

export default AboutCard