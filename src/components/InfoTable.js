import React from 'react';

import { theme } from './theme';
import {Typography, Link} from '@mui/material';

function InfoTable({title, data, ...props}) {
  return (
    <div
      {...props}
    >
      <Typography variant="h6">
        {title}
      </Typography>
      <table
        style={{
          padding: 10,
          margin: 20,
          background: theme.lightgray,
          borderRadius: 8,
        }}
      >
        <tbody>
          {data.map((row) => (
            <tr>
              <td
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  background: row.nameBackground,
                  padding: 4,
                  borderRadius: 4,
                }}
              >
                <Typography
                  variant="button"
                  style={{
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {row.name}
                </Typography>
              </td>
              <td
                style={{
                  textAlign: 'left',
                }}
              >
                {row.link ?
                  <Link
                    color={theme.green}
                    align="left"
                    underline="hover"
                    href={row.data}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      paddingLeft: 10,
                    }}
                  >
                    {row.data}
                  </Link> :
                  <td style={{paddingLeft: 10, textAlign: 'left'}}>
                    {row.data}
                  </td>
                }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default InfoTable;
