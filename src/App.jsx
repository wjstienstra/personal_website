import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFound from './pages/NotFound';

// Styles
import './index.css'; // Or index.css if you removed App.css

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} /> 
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;