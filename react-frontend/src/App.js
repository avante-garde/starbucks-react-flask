import React from 'react';
import Routes from './Routes';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Sidebar />
      <Routes />
    </>
  );
}

export default App;
