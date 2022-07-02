import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom"

import './index.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import UserDashboard from './DashboardUser/pages/UserDashboard';
import InvestmentPlansPage from './DashboardUser/pages/InvestmentPlansPage';
import WithdrawalHistoryPage from './DashboardUser/pages/WithdrawalHistoryPage';
import EarningsPage from "./DashboardUser/pages/EarningsPage";
import InvestmentsPage from "./DashboardUser/pages/InvestmentsPage";
import Affiliates from './DashboardUser/pages/Affiliates';
import Dividents from './DashboardUser/pages/Dividents';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/user_dash' element={<UserDashboard />}>
              <Route path='' element={<InvestmentPlansPage />} />
              <Route path='withdrawal_history' element={<WithdrawalHistoryPage />} />
              <Route path='earnings' element={<EarningsPage />}>
                <Route path='' element={<Dividents />} />
                <Route path='affiliates' element={<Affiliates />} />
              </Route>
              <Route path='affiliates' element={<InvestmentsPage />} />
          </Route>
      </Routes>
      
    </div>
  );
}

export default App;
