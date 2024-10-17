import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Import PDF viewer components
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import required styles for PDF viewer
import pdfReact from './../../Assets/mysql.pdf'; // Your PDF file to display
import './RightPanel.css'; // Add your CSS styles here

const ApiUrl = process.env.REACT_APP_BASE_URL;

const RightPanel = ({ pdf, handleAddCategoryToCart }) => {
  console.log('ge pdf', pdf);

  return (
    <div className="right-panel">
      <h2 className="right-panel-heading">PDF Details</h2>
      {pdf ? (
        <div className="pdf-details">
          <h3 className="rightPanelPdfHeading">{pdf.pdfName}</h3>
          <div className="pdf-viewer-container">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}>
              <Viewer fileUrl={pdf ? `${ApiUrl}${pdf.pdfLink}` : pdfReact} />
            </Worker>
          </div>
          <div className="pricing-section">
            <div className="price-box">
              <span className="price-label">Price:</span>
              <span className="price-amount">{pdf.pdfPrice} INR</span>
            </div>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddCategoryToCart(pdf.pdfName)}
          >
            Add to Cart
          </button>
        </div>
      ) : (
        <p>Select a category to see available PDFs</p>
      )}
    </div>
  );
};

export default RightPanel;
