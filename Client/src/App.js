import React from "react";
import {Home, About } from "./pages/index";

import { Routes,Route } from "react-router-dom";
// import './App.css';


function App() {
  return (
    <div >
      <Routes >
        <Route path="/" element={ <Home />}  />
        <Route path="/about" element={ <About />}  />
      </Routes>
    </div>
  );
}

export default App;
