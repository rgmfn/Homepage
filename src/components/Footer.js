import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <div
      style={{
        width: '100%',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        color="text.secondary"
      >
        Made with React
      </Typography>
    </div>
  )
}

export default Footer
