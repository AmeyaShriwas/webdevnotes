import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core'; // Import PDF viewer components
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import required styles for PDF viewer
import pdfReact from './../../Assets/mysql.pdf'; // Your PDF file to display
import './RightPanel.css'; // Add your CSS styles here
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ApiUrl = process.env.REACT_APP_BASE_URL;

const RightPanel = ({ pdf, setSelectedPart,selectedPart, handleAddCategoryToCart }) => {
  console.log('ge pdf', pdf);
  const { data, loading, error } = useSelector((state) => state.pdfs);


  useEffect(() => {
    // Ensure data exists and selectedPart has a value before running the loop
    if (data) {
      for (let key of data) {
        if (key.pdfName === pdf) {
          console.log('key', key);
          setSelectedPart(key); // Update state with the matched key
          break; // Exit loop after the first match
        }
      }
    }
  }, [data, selectedPart]); // Add data to the dependency array
  

  return (
    <div className="right-panel">
      <h2 className="right-panel-heading">PDF Details</h2>
      {selectedPart ? (
        <div className="pdf-details">
          <h3 className="rightPanelPdfHeading">{selectedPart.pdfName}</h3>
          <div className="pdf-viewer-container">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.10.377/build/pdf.worker.min.js`}>
              <Viewer fileUrl={pdf ? `${ApiUrl}${selectedPart.pdfLink}` : pdfReact} />
            </Worker>
          </div>
          <div className="pricing-section">
            <div className="price-box">
              <span className="price-label">Price:</span>
              <span className="price-amount">{selectedPart.pdfPrice} INR</span>
            </div>
          </div>
          <button
            className="add-to-cart-btn"
            onClick={() => handleAddCategoryToCart(selectedPart)}
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
