import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const Home = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Home;
