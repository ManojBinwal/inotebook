import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert message={"this is amazing notes app"}/>
          <div className="container">
            <Routes>
              {/* provide unique key inside component to remount on changing categories */}
              <Route exact path="/" element=<Home key="home" /> />
              <Route exact path="/about" element=<About key="about" /> />
            </Routes>
          </div>


        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
