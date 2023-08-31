import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* provide unique key inside component to remount on changing categories */}
          <Route exact path="/" element=<Home key="home"/> />
          <Route exact path="/about" element=<About key="about"/> />
        </Routes>


      </BrowserRouter>

    </>
  );
}

export default App;
