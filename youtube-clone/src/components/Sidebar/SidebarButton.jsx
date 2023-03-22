import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SidebarButton = ({ d, name }) => {
  var path = '/' + name.toLowerCase().replace(' ', '');
  if (path == '/home') {
    path = '/';
  }

  return (
    <NavLink to={path} style={{ textDecoration: 'none' }}>
      <div
        className="sidebar-buttons"
        style={{
          height: '10%',
          width: '80%',
          borderRadius: '10%',
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          marginLeft: '10%'
        }}>
        <svg
          viewBox="0 0 24 24"
          transform="translate(19,10)"
          style={{ fill: 'white', width: '50%', height: '50%' }}>
          <path style={{ width: '100%', height: '100%' }} d={d}></path>
        </svg>
        <div
          className="sidebar-buttons-text"
          style={{
            color: 'white',
            width: '100%',
            height: '20%',
            textAlign: 'center',
            fontSize: '1.5vh',
            paddingTop: '5px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
          {name}
        </div>
        <span
          className="show-text"
          style={{
            content: { name },
            position: 'absolute',
            marginLeft: '7vh',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '900',
            fontSize: '10px',
            color: '#ffffff',
            opacity: '0'
          }}>
          {name}
        </span>
      </div>
    </NavLink>
  );
};

SidebarButton.propTypes = {
  d: PropTypes.string.isRequired, // Add the missing prop type validation
  name: PropTypes.string.isRequired // Add the missing prop type validation
};

export default SidebarButton;
