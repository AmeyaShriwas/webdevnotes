import React, { useState } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user} = useSelector((state)=> state)
  console.log('user', user)

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
          <li className="loginButton"><p href="/login"><Link to='/form'>Logout</Link></p></li>
          
         
          <li className="cart">
        
            <span className="cart-text">
            <Link to='/cart'><FaShoppingCart className="cart-icon" /><sup><span className="cartNumber">0</span></sup></Link>
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
