import React from 'react';
import SearchBar from './NavbarComponents/SearchBar';
import YoutubeIcon from './NavbarComponents/YoutubeIcon';
import HeadButtons from './NavbarComponents/HeadButtons';
import SidebarExtendButton from './NavbarComponents/SidebarExtendButton';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <SidebarExtendButton />
        <YoutubeIcon />
        <SearchBar />
        <HeadButtons />
      </nav>
    </div>
  );
}

export default Navbar;
