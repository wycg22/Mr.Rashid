// src/pages/Contact.jsx
import './Contact.css';

function Contact() {
  // A simple function to stop the page from refreshing when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! (This is a showcase form)");
  };

  return (
    <div className="page-container">
      <div className="contact-wrapper">
        
        {/* Left Side: Text and Greeting */}
        <div className="contact-text">
          <h1>Get in Touch</h1>
          <p>We would love to hear from you! Whether you have a question about our products, shipping, or anything else, our team is ready to answer all your questions.</p>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your.email@example.com" required />
            </div>

            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;