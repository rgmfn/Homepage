import React, {useLayoutEffect} from 'react';
import { Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';

import InfoTable from '../InfoTable';
import { theme } from '../theme';

function Home() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" style={{margin: 40}}>
        Ryan Gragg
      </Typography>
      {/* <Typography variant="h6" style={{width: '50%'}}> */}
      {/*   Software developer looking for simple and effective solutions to real world problems. Has leadership experience through his 10+ years involved with music and 8+ years programming. */}
      {/* </Typography> */}
      <div
        style={{
          background: theme.lightgray,
          padding: 10,
          borderRadius: 10,
          display: 'flex',
          width: '50%',
        }}
      >
        <img src="/images/headshot.png" alt="headshot" 
          style={{
            borderRadius: '10px 0px 0px 10px',
            objectFit: 'contain',
            width: '50%',
            margin: 10,
          }}
        />
        <Typography variant="h6"
          style={{
            width: '100%',
            padding: 20,
          }}
        >
          <p>
            Software developer looking for simple and effective solutions to real world problems. Has leadership experience through his 10+ years involved with music and 8+ years programming.
          </p>
          <p>
            Ryan is driven by a desire to create, whether that be music, programs, food, or videos. He always tries to take a smart approach, and do the best he can.
          </p>
        </Typography>
      </div>

      <div
        style={{
          background: theme.lightgray,
          width: '30%',
          margin: 40,
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Typography variant="h6">
          <b>University of California, Santa Cruz</b>
          <div>Computer Science B.S.</div>
          <div>3.96 GPA</div>
          <div>September 2019 - June 2023</div>
        </Typography>
      </div>
      <InfoTable
        title="Links"
        data={[
          {
            name: <EmailIcon />,
            nameBackground: 'none',
            data: 'rgmfn.business@gmail.com',
            link: false,
          },
          {
            name: <LinkedInIcon />,
            nameBackground: 'none',
            data: 'linkedin.com/in/rgmfn',
            link: true,
          },
          {
            name: <GithubIcon />,
            nameBackground: 'none',
            data: 'github.com/rgmfn',
            link: true,
          },
        ]}
        style={{
          marginTop: 70,
        }}
      />
    </div>
  )
}

export default Home;
