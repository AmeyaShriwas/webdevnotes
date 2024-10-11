import React, { useState } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {user} = useSelector((state)=> state)
  const { error, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch()

  console.log('user', user)

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const LogoutFuntion = ()=> {
    dispatch(logout())
  }

  return (
    <header className="header">
      <Link to='/landing'>
        <div className="logo">
          <span className="logo-icon">{`</>`}</span>
          <span className="logo-text">webDevNotes</span>
        </div>
      </Link>

      {/* Navbar for larger screens */}
      <nav className="largeScreenButtons">
        <ul>
          <li className="contactPage"><Link to='/contact'>{isAuthenticated? 'contact': ''}</Link></li>
          <li className="loginButton" onClick={LogoutFuntion}><p href="/login"><Link to='/'>{isAuthenticated? 'Logout': 'Login'}</Link></p></li>
          
         
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
