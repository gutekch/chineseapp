import React, { useState, useEffect } from "react";
import StartingPage from "./components/StartingPage/starting-page";
import HomePage from "./components/MainPage/HomePage" ;
import Game from "./components/Game/Game.js";
import AboutPage from "./components/AboutPage/AboutPage";
import { Routes, Route} from 'react-router-dom';
import MyNavbar from "./components/MainPage/Navbar";
import "./generalStyles.css"; 

function App() {
  return (
    <>
    <MyNavbar/>
    <Routes>
      <Route path='/' element={<StartingPage />}></Route>
      <Route path='/home' element={<HomePage />}></Route>
      <Route path='/game' element={<Game />}></Route>
      <Route path='/about' element={<AboutPage />}></Route>
    </Routes>
    </>
  );
}

export default App;
