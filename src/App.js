import { Box } from '@mui/material'; // Import Box from MUI for layout
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/screens/About';
import Home from './components/screens/Home';
import Services from './components/screens/Services';

const App = () => {
  return (
    <Router>
      <Header /> {/* Header với các nút điều hướng */}
      <Box sx={{ paddingTop: '64px' }}> {/* Adjust padding for the fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* Thêm các Route khác ở đây */}
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
