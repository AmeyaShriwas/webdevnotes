import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pdfIcon from './../../Assets/pdf.png';
import './LeftPanel.css'; // Importing the CSS file

const LeftPanel = ({ notesData, selectedPart, setSelectedPart, handlePdfClick, setDroppedPdf }) => {
  // Fetch the available data from the Redux store
  const { data, loading, error } = useSelector((state) => state.pdfs);
  const [currentPage, setCurrentPage] = useState(1); // Current page state
  const itemsPerPage = 10; // Number of items per page
  const [showItems, setShowItems] = useState([]);

  console.log('Selected Part:', selectedPart);

  useEffect(() => {
    // Ensure data exists and selectedPart has a value before running the loop
    if (data && selectedPart) {
      for (let key of data) {
        if (key.pdfName === selectedPart) {
          console.log('key', key);
          setSelectedPart(key); // Update state with the matched key
          break; // Exit loop after the first match
        }
      }
    }

    // Set the items to show based on the current page
    if (selectedPart?.pdfSubTypes) {
      const startIndex = (currentPage - 1) * itemsPerPage; // Calculate start index
      const endIndex = startIndex + itemsPerPage; // Calculate end index
      const dataToShow = selectedPart.pdfSubTypes.slice(startIndex, endIndex);
      setShowItems(dataToShow);
    }

  }, [data, selectedPart, currentPage]); // Add currentPage to the dependency array

  const ChangePageFunction = (pageNumber) => {
    setCurrentPage(pageNumber); // Update current page when clicked
  }

  const findLength = () => {
    const pageLen = selectedPart?.pdfSubTypes?.length;
    const totalPages = Math.ceil(pageLen / itemsPerPage); // Calculate total pages

    const pageNumbers = []; // Array to hold the page numbers

    for (let index = 1; index <= totalPages; index++) {
      pageNumbers.push(
        <div onClick={() => ChangePageFunction(index)} key={index} className={`paginationSingle ${currentPage === index ? 'active-page' : ''}`}>
          {index}
        </div>
      );
    }

    return <div className="paginationContainer">{pageNumbers}</div>; // Return all page numbers
  };

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
          <div className="individualDataTypes">
            {showItems?.map((type, index) => (
              <div key={index} className="pdf-subtype">
                  <p>{type}</p>
                <img loading="lazy"  src={pdfIcon} alt="PDF Icon" className="pdf-icon" />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='paginationContainer'>
        {findLength()}
      </div>
    </div>
  );
};

export default LeftPanel;
