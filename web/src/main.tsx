import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.tsx';
import Profile from './profile.tsx'; // Pastikan Profile diimpor dengan benar
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/figo" element={<Profile />} />
      </Routes>
    </Router>
  </StrictMode>
);
