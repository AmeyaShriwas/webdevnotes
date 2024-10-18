import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import pdfIcon from './../../Assets/pdf.png';
import './LeftPanel.css'; // Importing the CSS file

const LeftPanel = ({ notesData, selectedPart, setSelectedPart, handlePdfClick, setDroppedPdf }) => {
  // Fetch the available data from the Redux store
  const { data, loading, error } = useSelector((state) => state.pdfs);
  const [pageTotal, setPageTotal] = useState(1)

  console.log('Selected Part:', selectedPart)
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
  
  }, [data, selectedPart]); // Add data to the dependency array

  const findLength = ()=> {
    const pageLen = selectedPart?.pdfSubTypes?.length
    const page = pageLen/10
    if(pageLen % 10 !== 0){
      const totalPageLne = page +1
      for (let index = 0; index <= totalPageLne; index++) {
         return (
          <div className='paginationSingle'>
            {index}
          </div>
         )
        
       }
      
     
    }
  }

 
  console.log('total len',pageTotal)

  
  

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
          {/* <h3>{selectedPart.pdfName}</h3> */}
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

       <div>
      {findLength()}
       </div>
    </div>
  );
};

export default LeftPanel;
