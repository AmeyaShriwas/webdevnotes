import React, { useState } from 'react';
import { FaHtml5, FaJs, FaReact, FaFilePdf, FaFileAlt } from 'react-icons/fa';
import pdfImg from './../../Assets/pdf.png';
import { addItems } from '../../redux/slice/CartSlice';
import { useDispatch } from 'react-redux';



const LeftPanel = ({ notesData, selectedPart, setSelectedPart, setDroppedPdf }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const dispatch = useDispatch()

  // Calculate total pages
  const totalItems = notesData[selectedPart].pdfs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  console.log('here selected part', selectedPart)

  // Calculate the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = notesData[selectedPart].pdfs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


    // Drag and Drop handlers
    const handleDragStart = (pdf, index) => {
      console.log('pdf dragged', pdf)
      setDroppedPdf(pdf); // Store the PDF name in the transfer data
    };

  return (
    <div className="left-panel">
      <div className="tabs-list">
        {Object.keys(notesData).map((part) => (
          <button
            key={part}
            onClick={() => {
              setSelectedPart(part);
              setCurrentPage(1); // Reset to first page on part change
            }}
            className={part === selectedPart ? 'active' : ''}
          >
            {part}
          </button>
        ))}
      </div>
      <p className='dragText'>Just drag a little to see pdf</p>
      <div className="pdf-grid">
        {currentItems.map((pdf, index) => (
          <div key={index}   draggable // Enable dragging
          onDragStart={(e) => handleDragStart(pdf, index)} className="pdf-box">
            <h3 className="pdf-name">{pdf.pdfName}</h3> {/* Directly render the pdf name */}
            <a href="#" className="pdf-download" onClick={() => alert('Download functionality coming soon!')}>
              <img className='pdfIconImg' src={pdfImg} alt="PDF icon" />
            </a>
          </div>
        ))}
      </div>
      {/* <PdfModel/> */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default LeftPanel;
