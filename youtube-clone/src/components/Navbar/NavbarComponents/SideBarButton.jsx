import React from 'react';

const SideBarButton = () => {
  return (
    <div
      className="sidebar-button"
      style={{
        display: 'flex',
        height: 'fit-content',
        width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        borderRadius: '50%'
      }}>
      <svg
        width={40}
        height={40}
        style={{
          display: 'flex',
          fill: 'white',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <path
          style={{
            fill: 'white'
          }}
          transform="translate(7.5, 7.5)"
          d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
      </svg>
    </div>
  );
};

export default SideBarButton;
