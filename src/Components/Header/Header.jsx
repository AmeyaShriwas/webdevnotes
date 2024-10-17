import React, { useState } from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa"; // Cart icon
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/AuthSlice";
import ProfileIcon from './../../Assets/profileIcon.png'

const Header = () => {
  const { error, isAuthenticated } = useSelector((state) => state?.auth);
  const dispatch = useDispatch()
  const ItemsCart = useSelector((state)=> state?.cart?.value);



 
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
          <li className="contactPage"><Link to='/contact'>{isAuthenticated? 'All Pages': ''}</Link>
          <div className="allPagesBox">
  <p><Link to='/terms'>Terms & Conditions</Link></p>
  <p><Link to='/privacy-policy'>Privacy Policy</Link></p>
  <p><Link to='/refund-policy'>Refund & Cancellation Policy</Link></p>
  <p><Link to='/shipping-policy'>Digital Download Policy</Link></p>
  <p><Link to='/contact'>Contact</Link></p>
</div>

          </li>
          <li className="loginButton" onClick={LogoutFuntion}><p href="/login"><Link to='/'>{isAuthenticated? 'Logout': 'Login'}</Link></p></li>
          <li className="profileIconheader" ><Link to='/profile'>{isAuthenticated?<img src={ProfileIcon}/>: null}</Link></li>
          
         
          <li className="cart">
          {isAuthenticated?
        
            <span className="cart-text">
            <Link to='/cart'><FaShoppingCart className="cart-icon" /><sup><span className="cartNumber">{ItemsCart?.length}</span></sup></Link>
            </span>: null}
          </li>
        </ul>
      </nav>
    
    </header>
  );
};

export default Header;
