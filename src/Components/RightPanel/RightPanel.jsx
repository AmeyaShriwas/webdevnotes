import React from 'react';
import pdfIconImg from './../../Assets/pdf.png';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Import PDF viewer components
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import required styles for PDF viewer
import pdfReact from './../../Assets/mysql.pdf'; // Your PDF file to display
import './RightPanel.css'; // Add your CSS styles here


const RightPanel = ({ pdfs, price, handleAddCategoryToCart, droppedPdf }) => {
  console.log('pdfs name', droppedPdf);

  

  return (
    <div className="right-panel">
   
   <h1 className='rightPanelPdfHeading'>{droppedPdf ? droppedPdf.pdfName : 'Select a PDF to view'}</h1>

      {/* PDF Viewer displayed directly in the RightPanel */}
      <div className="pdf-viewer-container">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}>
          <Viewer fileUrl={droppedPdf? droppedPdf.pdfLink:pdfReact } />
        </Worker>
      </div>

      {/* Add to Cart button placed at the bottom */}
      <div className="pricing-section">
        <div className="price-box">
          <span className="price-label">Price for Category:</span>
          <span className="price-amount">₹{price}</span>
        </div>

        <button className="add-to-cart-btn" onClick={() => handleAddCategoryToCart(pdfs.name)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default RightPanel;
