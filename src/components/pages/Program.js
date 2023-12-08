import React from 'react'
import { useParams } from 'react-router-dom'
import {Breadcrumbs, Typography, Link} from '@mui/material'
import { useLayoutEffect } from 'react'

import YouTube from 'react-youtube'

import { theme } from '../theme'
import InfoTable from '../InfoTable'

function Program() {
  const {id} = useParams()
  const program = programs[id];

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '60%',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Breadcrumbs
            style={{
              margin: 20,
            }}
          >
            <Link
              underline="hover"
              color={theme.green}
              href="/programs"
            >
              Programs
            </Link>
            <Typography variant="h2">
              {program.name}
            </Typography>
          </Breadcrumbs>
          <div />
        </div>
        <Typography
          style={{
            textAlign: 'center',
            width: '80%',
          }}
          variant="h6"
        >
          {program.description}
        </Typography>
        {Boolean(program.text) &&
          <Typography
            style={{
              textAlign: 'center',
              width: '80%',
              marginTop: 40,
            }}
          >
            {program.text}
          </Typography>
        }
        <InfoTable
          data={[
            {
              name: "Github",
              nameBackground: theme.green,
              data: program.githublink,
              link: true,
            },
            {
              name: 'Stack',
              nameBackground: theme.green,
              data: program.stack,
              link: false,
            }
          ]}
        />
        <img
          src={program.img}
          alt={program.alt}
          style={{
            borderRadius: 10,
            objectFit: 'contain',
            width: '100%',
          }}
        />
        {Boolean(program.video) && 
          <YouTube
            style={{
              marginTop: 50,
            }}
            videoId={program.video}
          />
        }
      </div>
    </div>
  )
}

const programs = {
  "spotifytags": {
    name: 'SpotifyTags',
    githublink: 'https://github.com/rgmfn/spotify-tags',
    description: 'A browser music streaming platform that allows for dynamic playlist creating with a tag system through use of the Spotify Web API.',
    text: <>
      <p>This program was made as part of a class.</p>
      <p>
        We used Scrum, and I was the Product Owner and a Developer on a team of 6.
      </p>
      <p>
        I helped a little with the backend, but primarily worked on frontend (displaying the library, displaying and editing the expression, displaying Spotify search results).
      </p>
    </>,
    stack: 'React, Express.js, Node.js, PostgresQL',
    img: '/images/spotifytags.png',
    video: 'S1go5fioQbo',
    alts: 'spotifytags placeholder',
  },
  "corg": {
    name: 'Corg',
    githublink: 'https://github.com/rgmfn/corg',
    description: 'An emacs org-file reader and writer written with ncurses in C.',
    stack: 'C, ncurses',
    img: '/images/corg.png',
    video: 'QgYhuPgbp3s',
    alts: 'corg placeholder',
  },
  "laundryday": {
    name: 'Laundry Day',
    githublink: 'https://github.com/rgmfn/LaundryDay',
    description: 'A (very) short game where you sort socks.',
    stack: 'python, pygame',
    img: '/images/laundryday.png',
    alts: 'laundryday placeholder',
  },
};

export default Program
