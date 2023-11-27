import {Typography, Container} from '@mui/material';
import React from 'react'

function NotFound() {
  return (
    <>
      <Container
        sx={{
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='h1'>
          Page Not Found
        </Typography>
        <Typography variant='h6'>
          The page you are looking for does not exist.
        </Typography>
      </Container>
    </>
  )
}

export default NotFound;
