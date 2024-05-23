// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'antd/dist/reset.css'
import Navbar from './components/Navbar';
import Donation from './pages/Donation';
import Marathon from './pages/Marathon';
import Performance from './pages/Performance';
import Result from './pages/Result';
import Runner from './pages/Runner';
import Sponsor from './pages/Sponsor';
import Users from './pages/Users';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/donation" element={<Donation />} />
        <Route path="/marathon" element={<Marathon />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/result" element={<Result />} />
        <Route path="/runner" element={<Runner />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
};

export default App;