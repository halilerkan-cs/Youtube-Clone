import React from 'react';
import SearchBar from './NavbarComponents/SearchBar';
import YoutubeIcon from './NavbarComponents/YoutubeIcon';
import HeadButtons from './NavbarComponents/HeadButtons';
import SideBarButton from './NavbarComponents/SideBarButton';

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <SideBarButton />
        <YoutubeIcon />
        <SearchBar />
        <HeadButtons />
      </nav>
    </div>
  );
}

export default Navbar;
