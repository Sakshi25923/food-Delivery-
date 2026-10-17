import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Mood For Food</h2>
          <p>Delicious food delivered to your doorstep.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Contact</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Mood For Food. All Rights Reserved.</p>
      </div>

    </footer>
  )
}

export default Footer;