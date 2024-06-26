import React, {useContext} from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import FirstStep from './FirstStep'
import SecondStep from './SecondStep'
import ThirdStep from './ThirdStep'
import Confirm from './Confirm'
import Success from './Success'
import {AppContext} from './Context'
import {Helmet} from "react-helmet";

// Step titles
const labels = ['Personal Information', 'Contact Information', 'Confirmation']
const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep />
    case 1:
      return <SecondStep />
    case 2:
      return <Confirm />
    default:
      throw new Error('Unknown step')
  }
}

export default function StepForm() {
  const { activeStep } = useContext(AppContext)

  return (
    <>
      <Helmet>
        <title>Sign Up - Northern Neck Garbage Collection</title>
        <meta name="description" content="Join Northern Neck Garbage Collection community. Sign up to manage your waste management services effectively." />
        <meta name="keywords" content="sign up, registration, waste management services, Northern Neck Garbage, community membership, account creation" />
      </Helmet>
      {activeStep === labels.length ? (
        <Success />
      ) : (
        <>
          <Box sx={{ my: 5 }}>
            <Typography variant='h4' align='center'>
				Join our community today!
            </Typography>
            <Typography variant='body1' align='center' sx={{ mt: 2 }}>
				Complete the form below to get started
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {labels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
      )}
    </>
  )
}
