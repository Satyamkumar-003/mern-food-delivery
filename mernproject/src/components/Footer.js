import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaApple, FaGooglePlay, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-5" style={{ backgroundColor: '#2c3e50', color: '#ecf0f1' }}>
      {/* Main Footer Content */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <span className="fs-2 me-2">🍽️</span>
              <h4 className="mb-0 fw-bold" style={{ color: '#27ae60' }}>Aahara</h4>
            </div>
            <p className="mb-3" style={{ color: '#bdc3c7' }}>
              Delivering delicious meals from your favorite restaurants right to your doorstep. 
              Fresh, fast, and flavorful food experiences across the city.
            </p>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="fs-5" style={{ color: '#95a5a6' }} target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="fs-5" style={{ color: '#95a5a6' }} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="fs-5" style={{ color: '#95a5a6' }} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="fs-5" style={{ color: '#95a5a6' }} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3 fw-bold" style={{ color: '#27ae60' }}>Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/restaurants" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Restaurants</Link>
              </li>
              <li className="mb-2">
                <Link to="/offers" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Offers</Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-decoration-none" style={{ color: '#bdc3c7' }}>About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3 fw-bold" style={{ color: '#27ae60' }}>Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/delivery" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Food Delivery</Link>
              </li>
              <li className="mb-2">
                <Link to="/pickup" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Pickup</Link>
              </li>
              <li className="mb-2">
                <Link to="/catering" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Catering</Link>
              </li>
              <li className="mb-2">
                <Link to="/partner" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Partner with Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Careers</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-lg-2 col-md-6">
            <h6 className="mb-3 fw-bold" style={{ color: '#27ae60' }}>Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/help" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Help Center</Link>
              </li>
              <li className="mb-2">
                <Link to="/track-order" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Track Order</Link>
              </li>
              <li className="mb-2">
                <Link to="/refund" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Refund Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-decoration-none" style={{ color: '#bdc3c7' }}>Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact & Apps */}
          <div className="col-lg-3 col-md-6">
            <h6 className="mb-3 fw-bold" style={{ color: '#27ae60' }}>Get in Touch</h6>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <FaPhone className="me-2" style={{ color: '#27ae60' }} />
                <span style={{ color: '#bdc3c7' }}>1800-123-FOOD</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <FaEnvelope className="me-2" style={{ color: '#27ae60' }} />
                <span style={{ color: '#bdc3c7' }}>support@aahara.com</span>
              </div>
              <div className="d-flex align-items-start">
                <FaMapMarkerAlt className="me-2 mt-1" style={{ color: '#27ae60' }} />
                <span style={{ color: '#bdc3c7' }}>Mumbai, Delhi, Bangalore<br />& 25+ cities</span>
              </div>
            </div>
            
            <h6 className="mb-3 fw-bold" style={{ color: '#27ae60' }}>Download Our App</h6>
            <div className="d-flex flex-column gap-2">
              <a href="#" className="btn btn-sm d-flex align-items-center justify-content-start" 
                 style={{ backgroundColor: '#34495e', color: '#ecf0f1', border: '1px solid #27ae60' }}>
                <FaApple className="me-2" />
                Download on App Store
              </a>
              <a href="#" className="btn btn-sm d-flex align-items-center justify-content-start"
                 style={{ backgroundColor: '#34495e', color: '#ecf0f1', border: '1px solid #27ae60' }}>
                <FaGooglePlay className="me-2" />
                Get it on Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{ borderTop: '1px solid #34495e' }}>
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="mb-0" style={{ color: '#95a5a6' }}>
                © 2025 Aahara Technologies Pvt. Ltd. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <span className="me-3" style={{ color: '#95a5a6' }}>We accept:</span>
              <span className="badge me-1" style={{ backgroundColor: '#ecf0f1', color: '#2c3e50' }}>Visa</span>
              <span className="badge me-1" style={{ backgroundColor: '#ecf0f1', color: '#2c3e50' }}>Mastercard</span>
              <span className="badge me-1" style={{ backgroundColor: '#ecf0f1', color: '#2c3e50' }}>UPI</span>
              <span className="badge" style={{ backgroundColor: '#ecf0f1', color: '#2c3e50' }}>Paytm</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;