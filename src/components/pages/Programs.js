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
      {sections.map((section) => (
        <>
          <Typography
            variant="h4"
            style={{
              marginTop: 30,
              marginBottom: 20,
            }}
          >
            {section.name}
          </Typography>
          <Grid
            container
            spacing={8}
            style={{
              width: '80%',
            }}
          >
            {section.data.map((item) => (
              <Grid
                item
                component={GridItem}
                xs={12}
                md={6}
                name={item.name}
                src={item.img}
                titlevariant="h4"
                descriptionvariant="h6"
                onClick={() => navigate(item.link)}
              >
                  {item.description}
              </Grid>
            ))}
          </Grid>
        </>
      ))}
    </div>
  )
}

const softwareData = [ 
  {
    name: 'SpotifyTags',
    description: 'A browser music streaming platform that allows for dynamic playlist creating with a tag system through use of the Spotify Web API.',
    img: '/images/spotifytags.png',
    link: 'spotifytags',
  },
  {
    name: 'Corg',
    description: 'An ncurses CLI tool for editing and viewing emacs org files written in C.',
    img: '/images/corg.png',
    link: 'corg',
  },
];
const gameData = [
  {
    name: 'Laundry Day',
    description: 'A (very) short game where you sort socks.',
    img: '/images/laundryday.png',
    link: 'laundryday',
  },
  // {
  //   name: 'Sudoku Game',
  //   id: 'sudokugame',
  //   img: '/images/sudokugame.png',
  // },
];
const sections = [
  {
    name: 'Software',
    data: softwareData,
  },
  {
    name: 'Games',
    data: gameData,
  }
];

export default Programs;
