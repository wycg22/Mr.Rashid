// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="page-container">
      
      {/* The Hero Banner Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Mr.Rashid's Shop</h1>
          <p>Discover our exclusive collection of high-quality products, carefully curated just for you. Take a look around and find your next favorite thing.</p>
          
          {/* Call to Action Button */}
          <Link to="/products" className="cta-button">
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* Store Features Section */}
      <section className="store-features">
        <div className="feature-box">
          <h3>✨ Premium Quality</h3>
          <p>We source only the best materials to ensure our products stand the test of time.</p>
        </div>
        <div className="feature-box">
          <h3>📦 Fast Shipping</h3>
          <p>Carefully packaged and shipped quickly so you can enjoy your items sooner.</p>
        </div>
        <div className="feature-box">
          <h3>💬 Great Support</h3>
          <p>Have a question? We're always here to help you find exactly what you need.</p>
        </div>
      </section>

    </div>
  );
}

export default Home;