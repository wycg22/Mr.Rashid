// src/components/Footer.jsx
import './Footer.css';

// Import your icons directly from the assets folder
import mailIcon from '../assets/logos/mail.png';
import phoneIcon from '../assets/logos/phone.png';
import pinIcon from '../assets/logos/pin.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Contact Information Section */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone" className="footer-icon" />
            <span>(555) 123-4567</span>
          </div>
          <div className="contact-item">
            <img src={mailIcon} alt="Email" className="footer-icon" />
            <span>hello@mrrashidshop.com</span>
          </div>
          <div className="contact-item">
            <img src={pinIcon} alt="Location" className="footer-icon" />
            <span>123 Main Street, City, State 12345</span>
          </div>
        </div>

        {/* Hours of Operation Section */}
        <div className="footer-section">
          <h3>Hours of Operation</h3>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>

      </div>
      
      {/* Copyright Bar at the very bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Mr.Rashid's Shop. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;