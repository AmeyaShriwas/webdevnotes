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
import PurchaseInfoModal from '../../Components/PurchaseInfoModel/PurchaseModel';

const CartPage = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const ItemsCart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const [amount, setTotalCartAmount] = useState()
  const token = useSelector((state) => state?.auth?.token);   // Get authentication token from Redux
  const [showModal, setShowModal] = useState(true);

  useEffect(()=> {
        console.log('itemCart', ItemsCart)
  }, [ItemsCart])



  useEffect(() => {
    let totalAmount = 0;
    for (let item of ItemsCart) {
        totalAmount += Number(item.pdfPrice); // Convert pdfPrice to a number
    }
    setTotalCartAmount(totalAmount);
}, [ItemsCart]);



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

  // // Calculate total amount
  // const subtotal = ItemsCart?.reduce((acc, item) => acc + item.price * item.quantity, 0);
  // const tax = subtotal * 0.10; // Assuming 10% tax
  const shipping = amount < 1000 ? 0 : 50; // Free shipping on orders over 1000
  const totalAmount = amount + (amount/10) + shipping

  
  const ApiUrl = process.env.REACT_APP_BASE_URL; // Correct variable name


  const handlePayment = async () => {
    // Ensure amount and ItemsCart are valid before making the request
    if (!amount || isNaN(amount) || amount <= 0 || ItemsCart.length === 0) {
      console.log('Invalid amount or cart items:', amount, ItemsCart);
      return;
    }
  
    // Log the token to check if it's available
    console.log('Token:', token);
  
    if (!token) {
      console.error('Authorization token is missing');
      return;
    }
  
    try {
      // Log the amount and ItemsCart for debugging
      console.log('Processing payment for amount:', amount, 'and Items:', ItemsCart);
  
      // Make POST request to your backend API with the payment amount and cart items
      const response = await axios.post(
        `${ApiUrl}/api/order`,
        {
          amount,
          ItemsCart, // Array of cart items (PDF names or whatever)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in the Authorization header
          },
        }
      );
  
      // Log and handle the response data from the API
      console.log('Payment successful, response data:', response.data);
      handlePaymentVerify(response.data.data); // Call your payment verification logic
  
    } catch (error) {
      // Handle any errors that occur during the request
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received from server:', error.request);
      } else {
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
        console.log('Payment response', response);
        try {
          const res = await axios.post(`${ApiUrl}/api/verify`, {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });
  
          const verifyData = res.data;
          console.log('Verification data', verifyData);
  
          if (verifyData.message) {
            toast.success(verifyData.message);
            dispatch(clearCart())
            setShowModal(true)

          }
  
          // Additional logic after successful verification, e.g., fetching PDF links, updating profile
        } catch (error) {
          console.error('Verification error', error);
          toast.error('Payment verification failed');
        }
      },
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
                        <img src={`${ApiUrl}${item.pdfImg}`} alt="Product" className="product-img" />
                      </td>
                      <td>{item.pdfName}</td>
                      <td>Rs {item.pdfPrice}</td>
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
                <span>Rs {amount}</span>
              </div>
              <div className="summary-item">
                <span>Tax (10%):</span>
                <span>Rs {amount/10}</span>
              </div>
              <div className="summary-item">
                <span>Shipping:</span>
                <span>Rs {shipping}</span>
              </div>
              <div className="summary-total">
                <span>Total:</span>
                <span className="total-amount">Rs {`${totalAmount}`}</span>
              </div>
              <button className="checkout-btn" onClick={handlePayment}>
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
      <PurchaseInfoModal showModal={showModal} setShowModal={setShowModal}/>
      <ToastContainer />
    </div>
  );
};

export default CartPage;
