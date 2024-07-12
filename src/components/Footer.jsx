import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Sip & Play Cafe</h3>
          <p>123 Board Game Street</p>
          <p>Brooklyn, NY 11201</p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Mon-Fri: 11am - 10pm</p>
          <p>Sat-Sun: 10am - 11pm</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Sip & Play Cafe. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;