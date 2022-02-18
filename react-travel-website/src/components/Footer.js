import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacatoin deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About US</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonial</Link>
            <Link to="/">Career</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact US</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Submit Videos</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Link to="/" className="social-logo">
            TRVL <i className="fab fa-typo3"></i>
          </Link>
          <small className="website-rights">TVRL 2020</small>
          <div className="social-icons">
            <Link
              to="/"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="Instagram"
              className="social-icon-link instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              to="/"
              target="_blank"
              aria-label="LikedIn"
              className="social-icon-link linkedin"
            >
              <i className="fab fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
