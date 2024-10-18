import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pdfIcon from './../../Assets/pdf.png';
import './LeftPanel.css'; // Importing the CSS file

const LeftPanel = ({ notesData, selectedPart, setSelectedPart, handlePdfClick, setDroppedPdf }) => {
  // Fetch the available data from the Redux store
  const { data, loading, error } = useSelector((state) => state.pdfs);
  const [typesData, setTypesData] = useState({}); // Initialize state as an array

  console.log('sljjj', notesData)

  // Update typesData when data or selectedPart changes
  useEffect(() => {
    findData();
    console.log('sl', notesData)

  }, [data, selectedPart]); // Add selectedPart as a dependency

  useEffect(()=> {
    console.log('pdf item mention', typesData)
}, [typesData])

  // Function to find the selected part's data
  const findData = () => {
    const findData = data.find((obj) => obj.pdfName === selectedPart); // Use find instead of filter to get one result
    console.log('findData', findData)
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
      {typesData?.pdfSubTypes?.length > 0 && (
        <div className="pdf-subtypes">
          <h3>{typesData.pdfName}</h3>
          <div className="individualDataTypes">
            {typesData.pdfSubTypes.map((type, index) => (
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
