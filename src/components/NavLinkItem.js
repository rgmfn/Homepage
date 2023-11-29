import React from 'react';

import { NavLink } from 'react-router-dom';

import { theme } from './theme';

const NavLinkItem = ({href, children, ...props}) => {
  return (
    <NavLink
      exact
      to={href}
      style={({isActive}) => {
        return {
          background: isActive ? theme.white : '',
          color: isActive ? theme.green : theme.white,
          cursor: 'pointer',
          paddingLeft: 20,
          paddingRight: 20,
          transition: 0.2,
          boxSizing: 'border-box',
          fontSize: 18,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }
      }}
      {...props}
    >
      {children}
    </NavLink>
  )
}

export default NavLinkItem
