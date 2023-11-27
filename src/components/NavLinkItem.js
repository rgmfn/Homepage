import React from 'react';

import { NavLink } from 'react-router-dom';

const NavLinkItem = ({href, children, ...props}) => {
  return (
    <NavLink
      exact
      to={href}
      style={({isActive}) => {
        return {
          background: isActive ? '#fff' : '',
          color: isActive ? '#000' : '#fff',
          cursor: 'pointer',
          paddingTop: 10,
          paddingBottom: 10,
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
