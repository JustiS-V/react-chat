// src/App.js
import React, {useState} from 'react';
import {createBrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Chat from './components/pages/chat';
import About from './components/pages/about';
import Profile from './components/pages/profile';
import { Navbar } from 'components/navigation/navBar';
import Home from 'components/pages/home';

function App() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Chat/>} />
          <Route path="/contact" element={<Profile />} />
        </Routes>
      </div>
    );
  }
  
  export default App;
