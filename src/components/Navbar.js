import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Stack, Box, Menu, MenuItem } from '@mui/material'
import { GitHub as GitHubIcon, Menu as MenuIcon } from '@mui/icons-material';

import NavLinkItem from './NavLinkItem';

import { homepageTheme } from './theme'

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <Stack
        style={{
          background: homepageTheme.green,
          borderRadius: 7,
        }}
        direction="row"
        justifyContent="space-between"
      >
        <NavLink
          to="/"
          style={{
            fontWeight: 'bold',
            fontSize: '32px',
            display: 'flex',
            alignItems: 'center',
            padding: 10,
            paddingLeft: 15,
            textDecoration: 'none',
            color: 'white',
          }}
        >
          rgmfn
        </NavLink>
        <Stack
          direction={{ md: 'row' }}
          display={{ md: 'flex', sm: 'none', xs: 'none' }}
          alignItems="center"
          justifyContent="center"
        >
          <NavLinkItem href="/">
            Home
          </NavLinkItem>
          <NavLinkItem href="/programs">
            Programs
          </NavLinkItem>
          <NavLinkItem href="/music">
            Music
          </NavLinkItem>
          <NavLinkItem href="/about">
            About
          </NavLinkItem>
          <NavLinkItem
            href="https://github.com/rgmfn/Homepage"
          >
            Source <GitHubIcon />
          </NavLinkItem>
        </Stack>

        <Box
          display={{ xs: 'flex', md: 'none' }}
          alignItems='center'
        >
          <MenuIcon
            cursor="pointer"
            onClick={handleClick}
            style={{
              color: 'white',
              paddingRight: 15,
              borderColor: 'white',
            }}
          />
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
          >
            <MenuItem component={Link} to="">Home</MenuItem>
            <MenuItem component={Link} to="programs">Programs</MenuItem>
            <MenuItem component={Link} to="music">Music</MenuItem>
            <MenuItem component={Link} to="about">About</MenuItem>
          </Menu>
        </Box>
      </Stack>
    </>
  )
}

export default NavBar;