import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './component/PrivateRoute';

import Navbar from './component/Navbar';
import TopBar from './component/TopBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import LostItems from './pages/LostItems';
import FoundItems from './pages/FoundItems';
import Report from './pages/Report';
import Claimed from './pages/Claimed';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContactPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <AuthProvider>
        <TopBar />
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/lost" element={<PrivateRoute><LostItems /></PrivateRoute>} />
          <Route path="/found" element={<PrivateRoute><FoundItems /></PrivateRoute>} />
          <Route path="/report" element={<PrivateRoute><Report /></PrivateRoute>} />
          <Route path="/claimed" element={<PrivateRoute><Claimed /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><AboutUs /></PrivateRoute>} />
          <Route path="/contact" element={<PrivateRoute><ContactPage /></PrivateRoute>} />
          <Route path="/shop" element={<PrivateRoute><ShopPage /></PrivateRoute>} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
