import React from 'react';
import './Landingpage.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Shop">Shop</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <div className="hamburger-menu">
        <img src="/images/icons8-menu-50.png" alt="Menu" />
      </div>
    </header>
  );
}

export default Header;