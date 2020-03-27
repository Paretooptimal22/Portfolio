import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub'
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    // paddingTop: '100%'
    height: 250
  },
  contentArea: {
    backgroundColor: '#607d8b'
  },
  type: {
    color: 'white'
  },
  actionArea: {
    backgroundColor: '#18ffff',
  },
  header: {
    backgroundColor: '#607d8b',
    color: 'white'
  },
  icon: {
    color: '#424242'
  },
})

const ProjectCard = props => {

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        title={props.project}
      />
      <CardMedia
        className={classes.media}
        image={props.image}
        title={props.title}
      />
      <CardContent className={classes.contentArea}>
        <Typography variant="body2" component="p" className={classes.type}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.actionArea}>
        <IconButton size="small" color="black" href={props.link}>
          <WebIcon className={classes.icon} />
        </IconButton>
        <IconButton href={props.repo} aria-label="github">
          <GitHubIcon className={classes.icon} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default ProjectCard