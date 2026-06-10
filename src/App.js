// src/App.js - Add FloatingContact import
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingContact from './components/FloatingContact'; // Add this import

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Approach from './pages/Approach';
import ProfessionalNetwork from './pages/ProfessionalNetwork';
import QualitySafety from './pages/QualitySafety';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/network" element={<ProfessionalNetwork />} />
            <Route path="/quality" element={<QualitySafety />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register/:type" element={<Registration />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingContact /> {/* Add this line */}
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;