import React from 'react';
import './PageNotFound.css'; // Import the CSS file for styling
import { FaRegSadCry } from 'react-icons/fa'; // Import an icon from react-icons
import Header from '../../Components/Header/Header';

const NotFoundPage = () => {
    return (
        <>
        <Header/>
        <div className="not-found-container">
            <div className="not-found-icon">
                <FaRegSadCry size={100} color="#007bff" />
            </div>
            <h1 className="not-found-title">404</h1>
            <p className="not-found-message">Oops! The page you are looking for does not exist.</p>
            <a href="/" className="not-found-link">Go back to Home</a>
        </div>
        </>
    );
};

export default NotFoundPage;
