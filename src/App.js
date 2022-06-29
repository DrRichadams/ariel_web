import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import './index.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import UserDashboard from './DashboardUser/pages/UserDashboard';
import InvestmentPlans from './DashboardUser/pages/InvestmentPlans';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/user_dash' element={<UserDashboard />}>
              <Route path='' element={<InvestmentPlans />} />
          </Route>
      </Routes>
      
    </div>
  );
}

export default App;
