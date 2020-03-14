import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'

const projectSteps = [
  {
    label: 'Moodly',
    imgPath: ''
  },
  {
    label: 'Flake',
    imgPath: ''
  },
  {
    label: 'Werk',
    imgPath: ''
  }
] 

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    marginTop: 50,
    alignItems: 'center',
    background: '#455a64',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: 4,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
})

const Stepper = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = projectSteps.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleStepChange = step => {
    setActiveStep(step);
  }

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{projectSteps[activeStep].label}</Typography>
      </Paper>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  )
    

}

export default Stepper