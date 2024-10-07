import React from 'react';
import pdfIconImg from './../../Assets/pdf.png';
import './RightPanel.css'; // Add your CSS styles here

const RightPanel = ({ pdfs, price, handleAddCategoryToCart }) => {
  return (
    <div className="right-panel">
      <h2 className="right-panel-heading">Total Available PDFs Content</h2>
      <ul className="pdf-list">
        {pdfs.map((pdf, index) => (
          <li key={index} className="pdf-item">
            <span className="pdf-name">
              <img className='pdfRightIcon' src={pdfIconImg} alt="PDF icon" />
              {pdf}
            </span>
          </li>
        ))}
      </ul>

      <div className="pricing-section">
        <div className="price-box">
          <span className="price-label">Price for Category:</span>
          <span className="price-amount">₹{price}</span>
        </div>

        <button className="add-to-cart-btn" onClick={handleAddCategoryToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
