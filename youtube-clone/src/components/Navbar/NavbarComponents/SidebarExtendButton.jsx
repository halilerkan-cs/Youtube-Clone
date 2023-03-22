import React from 'react';

const SidebarExtendButton = () => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'absolute',
        height: '100%',
        width: '13vh',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
      <div
        className="sidebar-extend-button"
        style={{
          height: 'fit-content',
          width: 'fit-content',
          backgroundColor: 'rgb(0,0,0)',
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
    </div>
  );
};

export default SidebarExtendButton;
