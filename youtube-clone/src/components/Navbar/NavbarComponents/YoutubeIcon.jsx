import React from 'react';

function YoutubeIcon() {
  return (
    <div className="yt-icon-wrapper-class">
      <svg className="yt-icon" viewBox="0 0 28 20" width="28px" height="20px">
        <path
          style={{ fill: 'red' }}
          d="M27.9704 3.12324C27.6411 1.89323 26.6745 0.926623 25.4445 0.597366C23.2173 2.24288e-07 14.2827 0 14.2827 0C14.2827 0 5.34807 2.24288e-07 3.12088 0.597366C1.89323 0.926623 0.924271 1.89323 0.595014 3.12324C-2.8036e-07 5.35042 0 10 0 10C0 10 -1.57002e-06 14.6496 0.597364 16.8768C0.926621 18.1068 1.89323 19.0734 3.12324 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6769 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9704 3.12324Z"></path>
        <path
          style={{ fill: 'white' }}
          d="M11.4275 14.2854L18.8475 10.0004L11.4275 5.71533V14.2854Z"></path>
      </svg>
      <p className="yt-icon-text">Youtube</p>
      <p className="yt-icon-location">TR</p>
    </div>
  );
}

export default YoutubeIcon;
