import React, { useState, useEffect } from "react";
import StartingPage from "./components/StartingPage/starting-page";
import HomePage from "./components/MainPage/HomePage" 
import { Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<StartingPage/>}></Route>
      <Route path='/home' element={<HomePage/>}></Route>
    </Routes>
  );
};

export default App;
