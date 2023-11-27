import React from 'react'
import { useParams } from 'react-router-dom'
import {Breadcrumbs, Typography, Link} from '@mui/material'

import { homepageTheme as theme } from '../theme'

function Program() {
  const {id} = useParams()
  const program = programs[id];

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
          width: '80%',
        }}
      >
        <Breadcrumbs>
          <Link
            underline="hover"
            color="inherit"
            href="/programs"
          >
            Programs
          </Link>
          <Typography>
            {program.name}
          </Typography>
        </Breadcrumbs>
        <p>
          {program.description}
        </p>
        <table>
          <tbody>
            <tr>
              <td
                style={{
                  background: theme.green,
                  padding: 4,
                  borderRadius: 4,
                }}
              >Github</td>
              <td>
                <Link
                  color={theme.green}
                  align="left"
                  underline="hover"
                  href={program.githublink}
                  style={{
                    padding: 10,
                  }}
                >
                  {program.githublink}
                </Link>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  background: theme.green,
                  padding: 4,
                  borderRadius: 4,
                }}
              >Stack</td>
              <td>
                {program.stack}
              </td>
            </tr>
          </tbody>
        </table>
        <img
          src={program.img}
          alt={program.alt}
          style={{
            borderRadius: 10,
            objectFit: 'contain',
            width: '100%',
          }}
        />
      </div>
    </div>
  )
}

const programs = {
  "spotifytags": {
    name: 'SpotifyTags',
    githublink: 'https://github.com/rgmfn/spotify-tags',
    description: 'A browser music streaming platform that allows for dynamic playlist creating with a tag system through use of the Spotify Web API.',
    stack: 'React, Express.js, Node.js, PostgresQL',
    img: '/images/spotifytags.png',
    alts: 'spotifytags placeholder',
  },
  "corg": {
    name: 'Corg',
    githublink: 'https://github.com/rgmfn/corg',
    description: 'An emacs org-file reader and writer written with ncurses in C.',
    stack: 'C, ncurses',
    img: '/images/corg.png',
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
