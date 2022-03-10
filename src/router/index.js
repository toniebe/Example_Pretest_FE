import React from 'react'
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

export default function MRouter() {
          
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
        </Routes>
    </Router>
  )
}
