import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pdfIcon from './../../Assets/pdf.png';
import './LeftPanel.css'; // Importing the CSS file

const LeftPanel = ({ selectedPart, setSelectedPart, handlePdfClick, setDroppedPdf }) => {
  // Fetch the available data from the Redux store
  const { data, loading, error } = useSelector((state) => state.pdfs);
  const [typesData, setTypesData] = useState({}); // Initialize state as an array


  // Update typesData when data or selectedPart changes
  useEffect(() => {
    findData();

  }, [data, selectedPart]); // Add selectedPart as a dependency

  // Function to find the selected part's data
  const findData = () => {
    const findData = data.find((obj) => obj.pdfName === selectedPart.pdfName); // Use find instead of filter to get one result
    setTypesData(findData || {}); // Set found data or empty object if not found
  };

  console.log('Selected Part:', selectedPart, 'Types Data:', typesData);

  // Return early if loading or error
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Handle when a category is clicked
  const handleCategoryClick = (category) => {
    console.log('Selected Category:', category.pdfName);
    setSelectedPart(category.pdfName); // Set the selected PDF category
    setDroppedPdf(null); // Reset dropped PDF if a new category is selected
  };

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
          <h3>Subtypes for {selectedPart.pdfName}</h3>
          <div className="individualDataTypes">
            {selectedPart.pdfSubTypes.map((type, index) => (
              <div key={index} className="pdf-subtype">
                <img src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
                <h2>{type}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPanel;
