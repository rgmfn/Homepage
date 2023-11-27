import React from 'react';

import { Typography, Grid } from '@mui/material';

import GridItem from '../GridItem'
import {useNavigate} from 'react-router-dom';

function Programs() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h5"
        style={{
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        Software
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          width: '80%',
        }}
      >
        {softwareData.map((item) => (
          <Grid
            item
            component={GridItem}
            xs={12}
            md={6}
            name={item.name}
            src={item.img}
            onClick={() => navigate(item.id)}
          >
              {item.description}
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h5"
        style={{
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        Games
      </Typography>
      <Grid
        container
        spacing={2}
        style={{
          width: '80%',
        }}
      >
        {gameData.map((item) => (
          <Grid
            item
            component={GridItem}
            xs={12}
            md={6}
            name={item.name}
            src={item.img}
            onClick={() => navigate(item.id)}
          >
              {item.description}
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const softwareData = [ 
  {
    name: 'SpotifyTags',
    id: 'spotifytags',
    description: 'A browser music streaming platform that allows for dynamic playlist creating with a tag system through use of the Spotify Web API.',
    img: '/images/spotifytags.png',
  },
  {
    name: 'corg',
    id: 'corg',
    description: 'An ncurses CLI tool for editing and viewing emacs org files written in C.',
    img: '/images/corg.png',
  },
];
const gameData = [
  {
    name: 'Laundry Day',
    id: 'laundryday',
    img: '/images/laundryday.png'
  },
  // {
  //   name: 'Sudoku Game',
  //   id: 'sudokugame',
  //   img: '/images/sudokugame.png',
  // },
];

export default Programs;
