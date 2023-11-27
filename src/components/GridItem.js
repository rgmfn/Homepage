import React from 'react';
import {Box, Typography} from '@mui/material';

const GridItem = ({children, name, src, ...props}) => (
  <Box
    textAlign="center"
    style={{
      cursor: 'pointer',
    }}
    {...props}
  >
    <img
      src={src}
      style={{
        borderRadius: 10,
        objectFit: 'contain',
        width: '100%',
      }}
    />
    <Typography
      variant="h6"
    >{name}</Typography>
    <Typography
      color="text.secondary"
    >{children}</Typography>
  </Box>
)

export default GridItem
