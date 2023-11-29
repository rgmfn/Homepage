import React from 'react';

import { useEffect, useLayoutEffect } from 'react';
import { Grid, Typography } from '@mui/material';

import { theme } from '../theme';
import GridItem from '../GridItem'

function ComingSoon() {
  useEffect(() => {
    comingSoonData.forEach((song) => {
      song.chunks.forEach((chunk) => {
        document.getElementById(chunk.id).volume = 0.6;
      });
    });
  }, []);

  return (
    <>
      <Typography
        style={{
          margin: 20,
          marginTop: 80,
        }}
        variant="h4"
      >
        Coming Soon
      </Typography>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {comingSoonData.map((song) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 10,
            }}
          >
            <div
              style={{
                padding: 10,
                width: 300,
                background: theme.lightgray,
                borderRadius: 15,
                textAlign: 'center',
              }}
            >
              <Typography variant="h6">
                {song.name}
              </Typography>
              {song.chunks.map((chunk) => (
                <audio controls id={chunk.id}>
                  <source src={chunk.src} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function Music() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      style={{
        paddingTop: 70,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={8}
        style={{
          width: '80%',
        }}
      >
        {musicData.map((item) => (
          <Grid
            item
            component={GridItem}
            xs={12}
            md={6}
            name={item.name}
            src={item.img}
            click={() => window.open(item.link)}
            imgprops={{ style: { borderRadius: '50%', width: '50%' } }}
            titlevariant="h4"
            descriptionvariant="h6"
          >
            {item.description}
          </Grid>
        ))}
      </Grid>
      <ComingSoon />
    </div>
  )
}

const musicData = [
  {
    name: 'SoundCloud',
    description: 'Acapella and instrumental covers and original songs.',
    link: 'https://soundcloud.com/user-439843206',
    img: 'images/soundcloud.jpg',
  },
  {
    name: 'Youtube',
    description: 'French Horn multitracks and electronic music.',
    link: 'https://www.youtube.com/@RagamuffinAround',
    img: 'images/youtube.jpg',
  },
];

const comingSoonData = [
  {
    name: 'Be Like This Always',
    chunks: [
      {
        id: 'blta audio 1',
        src: 'audio/be like this always wip 1.wav',
      },
      {
        id: 'blta audio 2',
        src: 'audio/be like this always wip 2.wav',
      },
    ],
  },
  {
    name: 'Christmas Time Is Here',
    chunks: [
      {
        id: 'xmas audio',
        src: 'audio/christmas time is here wip.wav',
      }
    ]
  },
];

export default Music;
