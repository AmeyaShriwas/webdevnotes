import React from 'react';

const RightPanel = ({ pdfs, price, handleAddCategoryToCart }) => {
  return (
    <div className="right-panel">
      <h2 className="right-panel-heading">Total Available PDFs Content</h2>
      <ul className="pdf-list">
        {pdfs.map((pdf, index) => (
          <li key={index} className="pdf-item">
            <span className="pdf-name">{pdf.name}</span>
            {/* No individual pricing, only category info */}
          </li>
        ))}
      </ul>
      <div className="total-cost">
        <h3>Price for Category: ₹{price}</h3> {/* Show fixed price */}
        <button className="add-to-cart-btn" onClick={handleAddCategoryToCart}>
          Add Category to Cart
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
