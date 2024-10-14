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
import EmptyCart from './../../Assets/empty.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const ItemsCart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [amount, setTotalCartAmount] = useState()

  useEffect(()=> {
    setTotalCartAmount((ItemsCart.length*300)+(ItemsCart.length*300)/10 +50)

  }, [ItemsCart])

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Remove item from cart
  const removeItemCart = (id) => {
    dispatch(removeItem(id));
    toast.error('Item removed from cart');
  };

  // Calculate total amount
  const subtotal = ItemsCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.10; // Assuming 10% tax
  const shipping = subtotal > 1000 ? 0 : 50; // Free shipping on orders over 1000
  const totalAmount = (subtotal + tax + shipping).toFixed(2);

  const ApiUrl = process.env.REACT_APP_BASE_URL; // Correct variable name


 // Handle payment process
const handlePayment = async () => {
  // Ensure amount is valid before making the request
  if (!amount || isNaN(amount) || amount <= 0) {
    console.log('Invalid amount value:', amount);
    return;
  }

  try {
    // Log the amount to ensure it's correct before sending the request
    console.log('Processing payment for amount:', amount);

    // Make POST request to your backend API with the payment amount
    const response = await axios.post(`${ApiUrl}/api/order`, { amount });

    // Log and handle the response data from the API
    console.log('Payment successful, data:', response.data);
    handlePaymentVerify(response.data.data)

    // Further logic after successful payment can be added here

  } catch (error) {
    // Handle any errors that occur during the request
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Server error:', error.response.data);
    } else if (error.request) {
      // Request was made, but no response was received
      console.error('No response from server:', error.request);
    } else {
      // Other errors related to setting up the request
      console.error('Error during payment request:', error.message);
    }
  }
};

const handlePaymentVerify = async (data) => {
  const options = {
    key: process.env.RAZORPAY_KEY_ID,
    amount: data.amount,
    currency: data.currency,
    name: "ameya",
    description: "Test Mode",
    order_id: data.id,
    handler: async (response) => {
      console.log('response', response);
      try {
        const res = await axios.post(`${ApiUrl}/api/verify`, {
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        });

        // Ensure res.data is used correctly
        console.log('verify data', res.data);
        if (res.data.message) {
          toast.success(res.data.message);
        } else {
          toast.error("Verification failed");
        }
      } catch (error) {
        console.error(error);
        toast.error("Error during payment verification");
      }
    }
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

  return (
    <div className="cart-page-container">
      <Header />
      <div className="cart-main">
        <div className="cart-header">
          <h2 className="cart-title">
            {/* Your Shopping Cart <AiOutlineShoppingCart /> */}
          </h2>
        </div>

        <div className="cart-content">
          {ItemsCart?.length === 0 ? (
            <div className="empty-cart">
              <h1>Your cart is empty.</h1>
              <img className="emptyCartImg" src={EmptyCart} alt="Empty Cart" />
            </div>
          ) : (
            <div className="cart-items">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    {/* <th>Quantity</th> */}
                    {/* <th>Total</th> */}
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="cartEachItem">
                  {ItemsCart?.map((item, index) => (
                    <tr key={index}>
                      <td className="product-image">
                        <img src={item.image || pdfImg} alt="Product" className="product-img" />
                      </td>
                      <td>{item}</td>
                      <td>Rs 300</td>
                      {/* <td>{item.quantity}</td> */}
                      {/* <td>Rs {item.price * item.quantity}</td> */}
                      <td>
                        <button
                          className="delete-btn"
                          onClick={() => removeItemCart(index)}
                        >
                          <FiTrash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="clearCartButton" onClick={() => dispatch(clearCart())}>
                <h3>Clear Cart</h3>
              </div>
            </div>
          )}
          
          {ItemsCart?.length > 0 && (
            <div className="cart-summary">
              <h3>Cart Summary</h3>
              <div className="summary-item">
                <span>Subtotal:</span>
                <span>Rs {ItemsCart.length*300}</span>
              </div>
              <div className="summary-item">
                <span>Tax (10%):</span>
                <span>Rs {(ItemsCart.length*300)/10}</span>
              </div>
              <div className="summary-item">
                <span>Shipping:</span>
                <span>Rs {shipping}</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span className="total-amount">Rs {amount}</span>
              </div>
              <button className="checkout-btn" onClick={handlePayment}>
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
