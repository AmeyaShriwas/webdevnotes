import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './CartPage.css';
import Header from '../../Components/Header/Header';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Document 1', category: 'Invoices', amount: 15.00 },
        { id: 2, name: 'Document 2', category: 'Reports', amount: 25.00 },
        { id: 3, name: 'Document 3', category: 'Receipts', amount: 10.00 },
    ]);

    const removeFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalAmount = cartItems.reduce((acc, item) => acc + item.amount, 0).toFixed(2);

    return (
        <>
            <Header />
            <div className="cart-container">
                <div className="cart-header">
                    <h2 className="cart-title">Your Shopping Cart <AiOutlineShoppingCart /></h2>
                </div>
                <div className="cart-content">
                    <div className="cart-table-container">
                        {cartItems.length === 0 ? (
                            <div className="empty-cart-container">
                                <p className="empty-cart-message">Your cart is currently empty.</p>
                                <AiOutlineShoppingCart className="empty-cart-icon" />
                            </div>
                        ) : (
                            <table className="cart-table">
                                <thead>
                                    <tr>
                                        <th>PDF Name</th>
                                        <th>Category</th>
                                        <th>Amount</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>${item.amount.toFixed(2)}</td>
                                            <td>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => removeFromCart(item.id)}
                                                >
                                                    <FiTrash2 /> Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    <div className="cart-summary-container">
                        <div className="cart-summary">
                            <h3>Total Amount: ${totalAmount}</h3>
                            <button className="buy-now">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartPage;
