import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pdfIcon from './../../Assets/pdf.png';
import './LeftPanel.css'; // Importing the CSS file

const LeftPanel = ({ notesData, selectedPart, setSelectedPart, handlePdfClick, setDroppedPdf }) => {
  // Fetch the available data from the Redux store
  const { data, loading, error } = useSelector((state) => state.pdfs);

  console.log('Selected Part:', selectedPart)

  // Return early if loading or error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

 
  return (
    <div className="left-panel">
      <ul className="category-list">
        {data.map((pdf, index) => (
          <li 
            key={index} 
            onClick={() => handlePdfClick(pdf?.pdfName)}
            className={selectedPart === pdf.pdfName ? 'active-category' : ''}
          >
            {pdf.pdfName}
          </li>
        ))}
      </ul>

      {/* Display the subtypes if a category is selected */}
      {selectedPart?.pdfSubTypes?.length > 0 && (
        <div className="pdf-subtypes">
          <h3>{selectedPart.pdfName}</h3>
          <div className="individualDataTypes">
            {selectedPart.pdfSubTypes.map((type, index) => (
              <div key={index} className="pdf-subtype">
                  <p>{type}</p>
                <img src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
              
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
