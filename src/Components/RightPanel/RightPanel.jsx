import React from 'react';
import pdfIconImg from './../../Assets/pdf.png';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Import PDF viewer components
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import required styles for PDF viewer
import pdfReact from './../../Assets/mysql.pdf'; // Your PDF file to display
import './RightPanel.css'; // Add your CSS styles here

const ApiUrl = process.env.REACT_APP_BASE_URL

const RightPanel = ({ pdf, handleAddCategoryToCart, droppedPdf }) => {

  console.log('ge pdf', pdf)


  return (
    <div className="right-panel">
      <h2>PDF Details</h2>
      {pdf ? (
        <div className="pdf-details">
          <h3>{pdf.pdfName}</h3>
          <div className="pdf-viewer-container">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}>
          <Viewer fileUrl={pdf? `${ApiUrl}${pdf.pdfLink}`:pdfReact } />
        </Worker>
      </div>
          <p>Price: {pdf.pdfPrice} INR</p>
       
          
          <button onClick={() => handleAddCategoryToCart(pdf)}>
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
