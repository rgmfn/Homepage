import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Stack, Box, Menu, MenuItem } from '@mui/material'
import { GitHub as GitHubIcon, Menu as MenuIcon } from '@mui/icons-material';

import { theme } from './theme';

import NavLinkItem from './NavLinkItem';

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div
            style={{
                padding: 10,
            }}
        >
            <Stack
                style={{
                    background: theme.green,
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
                        paddingLeft: 20,
                        textDecoration: 'none',
                        color: theme.white,
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
                    {
                        links.map((link) => (
                            <NavLinkItem href={link.href}>
                                {link.name}
                            </NavLinkItem>
                        ))
                    }
                    <a
                        href="https://github.com/rgmfn/Homepage"
                        rel="noreferrer"
                        target="_blank" // opens in a new tab
                        style={{
                            background: theme.green,
                            color: theme.white,
                            cursor: 'pointer',
                            paddingLeft: 20,
                            paddingRight: 20,
                            // transition: 0.2,
                            boxSizing: 'border-box',
                            fontSize: 18,
                            height: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            textDecoration: 'none',
                            borderRadius: '0 7px 7px 0',
                        }}
                    >
                        Source <GitHubIcon />
                    </a>
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
                            marginRight: 15,
                            borderColor: 'white',
                        }}
                    />
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        onClick={handleClose}
                    >
                        {
                            links.map((link) => (
                                <MenuItem component={Link} to={link.to}>{link.name}</MenuItem>
                            ))
                        }
                    </Menu>
                </Box>
            </Stack>
        </div>
    )
}

const links = [
    {
        name: 'Home',
        href: '/',
        to: '',
    },
    {
        name: 'Programs',
        href: '/programs',
        to: 'programs',
    },
    {
        name: 'Videos',
        href: '/videos',
        to: 'videos',
    },
    {
        name: 'Music',
        href: '/music',
        to: 'music',
    },
];

export default NavBar;
