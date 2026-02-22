// src/App.jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // 1. Import the Footer
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />

      {/* Wrapping the routes in a minimum height div ensures the footer 
          is always pushed to the bottom, even if the page doesn't have much text */}
      <div style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer /> {/* 2. Add the Footer below the Routes */}
    </Router>
  );
}

export default App;