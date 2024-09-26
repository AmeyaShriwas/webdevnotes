import React, { useState } from 'react';
import { FaDownload, FaHtml5, FaJs, FaReact, FaFilePdf, FaFileAlt } from 'react-icons/fa';

const LeftPanel = ({ notesData, selectedPart, setSelectedPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate total pages
  const totalItems = notesData[selectedPart].pdfs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Calculate the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = notesData[selectedPart].pdfs.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to render the correct icon based on the file type
  const renderFileIcon = (fileName) => {
    if (fileName.toLowerCase().includes('html')) {
      return <FaHtml5 className="file-icon" />;
    } else if (fileName.toLowerCase().includes('javascript')) {
      return <FaJs className="file-icon" />;
    } else if (fileName.toLowerCase().includes('react')) {
      return <FaReact className="file-icon" />;
    } else if (fileName.toLowerCase().includes('pdf')) {
      return <FaFilePdf className="file-icon" />;
    } else {
      return <FaFileAlt className="file-icon" />;
    }
  };

  return (
    <div className="left-panel">
      <h2 className="section-heading">Notes</h2>
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

      <div className="pdf-grid">
        {currentItems.map((pdf, index) => (
          <div key={index} className="pdf-box">
            {/* Render file type icon based on the file name */}
           
            <h3 className="pdf-name">{pdf.name}</h3>
            <a href={pdf.link} target="_blank" rel="noopener noreferrer" className="pdf-download">
              <FaDownload className="download-icon" />
              <p>Download</p>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination */}
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
