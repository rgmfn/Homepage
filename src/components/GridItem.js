import React from 'react';
import {Box, Typography} from '@mui/material';

const GridItem = ({
  children,
  name,
  src,
  click,
  imgprops,
  titlevariant,
  descriptionvariant,
  ...props
}) => (
  <Box
    textAlign="center"
    {...props}
  >
    <Box
      onClick={click}
      style={{
        cursor: 'pointer',
      }}
    >
      <img
        src={src}
        alt={src}
        style={{
          borderRadius: 10,
          objectFit: 'contain',
          width: '100%',
        }}
        {...imgprops}
      />
      <Typography
        variant={titlevariant}
      >{name}</Typography>
      <Typography
        variant={descriptionvariant}
      >{children}</Typography>
    </Box>
  </Box>
)

export default GridItem
