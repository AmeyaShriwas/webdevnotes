import React, { useState, useEffect } from 'react';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';
import './Notes.css';
import PdfViewer from '../PdfViewer/PdfViewer';
import { useLocation } from 'react-router-dom';

const Notes = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the pathname changes
  }, [location]);

  // Access the passed state (category)
  const selectedCategory = location.state?.category;
    const notesData = {
        JavaScript: {
          pdfs: [
            { name: 'JavaScript Basics', link: 'https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf' },
            { name: 'Advanced JavaScript', link: '#' },
            { name: 'JavaScript ES6 Features', link: '#' },
            { name: 'JavaScript Basics', link: 'https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf' },
            { name: 'Advanced JavaScript', link: '#' },
            { name: 'JavaScript ES6 Features', link: '#' },
            { name: 'JavaScript Basics', link: 'https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf' },
            { name: 'Advanced JavaScript', link: '#' },
            { name: 'JavaScript ES6 Features', link: '#' },
            { name: 'JavaScript Basics', link: 'https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf' },
            { name: 'Advanced JavaScript', link: '#' },
            { name: 'JavaScript ES6 Features', link: '#' },
          ],
          price: 300, // Fixed price for the category
        },
        ReactJS: {
          pdfs: [
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
          ],
          price: 300,
        },
        ExpressJs: {
          pdfs: [
            { name: 'Express Basics', link: '#' },
            { name: 'Middleware in Express', link: '#' },
            { name: 'Advanced Express Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
          ],
          price: 300,
        },
        NodeJS: {
          pdfs: [
            { name: 'Node Introduction', link: '#' },
            { name: 'Asynchronous NodeJS', link: '#' },
            { name: 'Node with Express', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
            { name: 'React Introduction', link: '#' },
            { name: 'React Hooks', link: '#' },
            { name: 'Advanced React Patterns', link: '#' },
          ],
          price: 300,
        },
    };

    const [selectedPart, setSelectedPart] = useState(selectedCategory); // Default selected category
    const [selectedPdf, setSelectedPdf] = useState(null); // For PDF viewing
    const [cart, setCart] = useState([]); // For managing cart items

    const handlePdfClick = (link) => {
        setSelectedPdf(link); // Set the selected PDF link for viewing
    };

    const handleAddCategoryToCart = () => {
        const category = notesData[selectedPart];
        if (!cart.includes(category)) {
            setCart((prevCart) => [...prevCart, category]); // Add the entire category to the cart
        }
    };

    return (
        <div className="notes-container">
            <LeftPanel
                notesData={notesData}
                selectedPart={selectedPart}
                setSelectedPart={setSelectedPart}
            />
            <RightPanel 
                pdfs={notesData[selectedPart].pdfs}
                price={notesData[selectedPart].price} // Show fixed category price
                handleAddCategoryToCart={handleAddCategoryToCart}
            />
            {selectedPdf && <PdfViewer pdfUrl={selectedPdf} />} {/* Render PDF viewer if a PDF is selected */}
        </div>
    );
};

export default Notes;
