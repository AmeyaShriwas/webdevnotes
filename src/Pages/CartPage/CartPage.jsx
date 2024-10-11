import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartPage.css';
import Header from '../../Components/Header/Header';
import pdfImg from './../../Assets/pdf.png'; // Placeholder for PDF icon
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { clearCart, removeItem } from '../../redux/slice/CartSlice';
import EmptyCart from './../../Assets/empty.png'

const CartPage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const ItemsCart = useSelector((state)=> state.cart.value);
  const dispatch = useDispatch()


  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

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
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total amount
  const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0).toFixed(2);

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Create order on the server
  const createOrder = async (amount) => {
    const orderData = {
      amount: amount * 100, // Razorpay works with paisa (1 INR = 100 paisa)
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
    };

    const response = await axios.post('/api/payment/create-order', orderData);
    return response.data.order;
  };

  // Handle payment process
  const handlePayment = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load');
      return;
    }

    // Create an order on the server
    const order = await createOrder(totalAmount);

    // Set up payment options
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Your Razorpay key from environment variables
      amount: order.amount, // Amount in paisa
      currency: 'INR',
      name: 'Your Website Name',
      description: 'Purchase Notes',
      order_id: order.id, // Razorpay order ID
      handler: async (response) => {
        // Verify payment on the server
        const verifyResponse = await axios.post('/api/payment/verify-payment', {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        if (verifyResponse.data.success) {
          alert('Payment successful!');
          // After success, redirect or trigger download for notes/PDF
        } else {
          alert('Payment verification failed');
        }
      },
      theme: {
        color: '#F37254', // Optional theme color
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="cart-page-container">
      <Header />
      <div className="cart-main">
        <div className="cart-header">
          {/* <h2 className="cart-title">
            Your Shopping Cart <AiOutlineShoppingCart />
          </h2> */}
        </div>
     

        <div className="cart-content">
          {ItemsCart?.length === 0 ? (
            <div className="empty-cart">
              <h1>Your cart is empty.</h1>
              <img className='emptyCartImg' src={EmptyCart}/>
             
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
                  {ItemsCart?.map((item, index) => (
                    <tr key={index}>
                      <td className="pdf-icon-name">
                        <img src={pdfImg} alt="PDF icon" className="pdf-icon" />
                        {item}
                      </td>
                      <td>Rs 300</td>
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => dispatch(removeItem(index))}
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='clearCartButton' onClick={()=>dispatch(clearCart())}>
          <h3>Clear Cart</h3>
        </div>

            </div>
            
          )}
         
          <div className="cart-summary">
            <h3>Total Amount: <span className="total-amount">Rs {totalAmount}</span></h3>
            <button className="checkout-btn" onClick={handlePayment}>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
