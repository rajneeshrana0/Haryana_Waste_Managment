import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Home from './pages/home.js';
import Products from './pages/products.js';
import Reports from './pages/reports.js';

const SideNav = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reports" element={<Reports />} />
          {/* Add other routes here */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default SideNav;
