import React, { useState, useEffect } from 'react';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';
import './Notes.css';
import PdfViewer from '../PdfViewer/PdfViewer';
import { useLocation } from 'react-router-dom';
import js from './../../Assets/js.png'; // Importing the JavaScript image

// Unified notesData structure (same as in PurchaseCategory)
const notesData = {
  JavaScript: {
    name: 'JavaScript Basics',
    price: 300,
    img: js,
    pdfs: [
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
    ]
  },
  ReactJS: {
    name: 'React Introduction',
    price: 300,
    img: js,
    pdfs: [
      'React Introduction',
      'React Hooks',
      'Advanced React Patterns',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
    ]
  },
  ExpressJs: {
    name: 'Express Basics',
    price: 300,
    img: js,
    pdfs: [
      'Express Basics',
      'Middleware in Express',
      'Advanced Express Patterns',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
    ]
  },
  NodeJS: {
    name: 'Node Introduction',
    price: 300,
    img: js,
    pdfs: [
      'Node Introduction',
      'Asynchronous NodeJS',
      'Node with Express',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
      'JavaScript Basics',
      'Advanced JavaScript',
      'JavaScript ES6 Features',
    ]
  }
};

const Notes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the pathname changes
  }, [location]);

  const selectedCategory = location.state?.category || 'JavaScript'; // Default to 'JavaScript' if no category is selected

  const [selectedPdf, setSelectedPdf] = useState(null); // For PDF viewing
  const [selectedPart, setSelectedPart] = useState(selectedCategory); // For PDF viewing
  const [cart, setCart] = useState([]); // For managing cart items

  console.log('selected pdf', selectedPdf)
  console.log('selectedCategory', selectedCategory)
  const handlePdfClick = (pdfName) => {
    const pdfLink = `https://example.com/${pdfName.replace(/\s+/g, '-').toLowerCase()}.pdf`; // Placeholder link
    setSelectedPdf(pdfLink); // Set the selected PDF link for viewing
  };

  const handleAddCategoryToCart = (e) => {
  
    console.log('cart', e);
  };

  return (
    <div className="notes-container">
      <LeftPanel
        notesData={notesData}
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
        handlePdfClick={handlePdfClick} // Pass down the click handler
      />
      <RightPanel 
        pdfs={notesData[selectedPart].pdfs}
        price={notesData[selectedPart].price} // Show fixed category price
        handleAddCategoryToCart={handleAddCategoryToCart(selectedPart)}
      />
      {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />} {/* Render PDF viewer if a PDF is selected */}
    </div>
  );
};

export default Notes;
