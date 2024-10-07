import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartPage.css';
import Header from '../../Components/Header/Header';
import pdfImg from './../../Assets/pdf.png'; // Placeholder for PDF icon
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { error, isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate()

  useEffect(()=> {
     if(!isAuthenticated){
      navigate('/')
     }
  }, [])
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'JavaScript Basics', category: 'JavaScript', amount: 300 },
    { id: 2, name: 'React Introduction', category: 'ReactJS', amount: 300 },
    { id: 3, name: 'Express Basics', category: 'ExpressJs', amount: 300 },
    { id: 4, name: 'JavaScript Basics', category: 'JavaScript', amount: 300 },
    { id: 5, name: 'React Introduction', category: 'ReactJS', amount: 300 },
    { id: 6, name: 'Express Basics', category: 'ExpressJs', amount: 300 },
  ]);

  // Remove item from cart
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0).toFixed(2);

  return (
    <div className="cart-page-container">
      <Header />
      <div className="cart-main">
        <div className="cart-header">
          <h2 className="cart-title">
            Your Shopping Cart <AiOutlineShoppingCart />
          </h2>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty.</p>
              <AiOutlineShoppingCart size={50} />
            </div>
          ) : (
            <div className="cart-items">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>PDF Name</th>
                  
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className='cartEachItem'>
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td className="pdf-icon-name">
                        <img src={pdfImg} alt="PDF icon" className="pdf-icon" />
                        {item.name}
                      </td>
                    
                      <td>Rs {item.amount.toFixed(2)}</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="cart-summary">
            <h3>Total Amount: <span className="total-amount">Rs {totalAmount}</span></h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
