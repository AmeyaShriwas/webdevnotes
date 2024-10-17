import React, { useState, useEffect } from 'react';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';
import './Notes.css';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addItems } from '../../redux/slice/CartSlice';

const Notes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  
  // Fetch data from Redux
  const { data, loading, error } = useSelector((state) => state.pdfs);
  const ItemsCart = useSelector((state) => state?.cart?.value || []);

  const selectedCategory = location.state?.category || '';

  // Independent state to handle selected part and PDF
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedPart, setSelectedPart] = useState(selectedCategory); // Independent from selectedCategory
  const [droppedPdf, setDroppedPdf] = useState(null); 

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the pathname changes
  }, [location]);

  // Whenever `selectedCategory` changes, update `selectedPart`
  useEffect(() => {
    if (selectedCategory) {
      setSelectedPart(selectedCategory);
    }
  }, [selectedCategory]);

  // Add PDF to Cart
  const handleAddCategoryToCart = (pdf) => {
    const findExisting = ItemsCart.find(item => item._id === pdf._id);
    if (findExisting) {
      toast.error('Already added to cart');
    } else {
      dispatch(addItems(pdf)); // Add the full PDF object to the cart
      toast.success(`Item added to cart: ${pdf.pdfName}`);
    }
  };

  // Handle PDF selection
  const handlePdfClick = (pdf) => {
    setSelectedPart(pdf)
    setSelectedPdf(pdf); // Set the selected PDF to view in RightPanel
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="notes-container">
      <LeftPanel
        notesData={selectedPart.pdfName}
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
        handlePdfClick={handlePdfClick} // Pass down the click handler
        setDroppedPdf={setDroppedPdf}
      />
      <RightPanel 
        pdf={selectedPdf || selectedCategory} // Pass selected PDF
        handleAddCategoryToCart={handleAddCategoryToCart} // Add to cart
        droppedPdf={droppedPdf}
      />
      <ToastContainer />
    </div>
  );
};

export default Notes;
