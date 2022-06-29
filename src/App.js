import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import './index.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
      
    </div>
  );
}

export default App;
