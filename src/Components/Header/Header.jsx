import React, { useState } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <Link to='/'>
        <div className="logo">
          <span className="logo-icon">{`</>`}</span>
          <span className="logo-text">webDevNotes</span>
        </div>
      </Link>

      {/* Navbar for larger screens */}
      <nav className="largeScreenButtons">
        <ul>
          <li><p href="/login"><Link to='/form'>Login</Link></p></li>
          
         
          <li className="cart">
        
            <span className="cart-text">
            <FaShoppingCart className="cart-icon" /><sup><span className="cartNumber">0</span></sup>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
