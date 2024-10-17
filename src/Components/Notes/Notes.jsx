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

  const [selectedPdf, setSelectedPdf] = useState(null); // Selected PDF for viewing
  const [selectedPart, setSelectedPart] = useState(selectedCategory); // Selected category
  const [droppedPdf, setDroppedPdf] = useState(null); // Drag-and-drop PDF functionality

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when the pathname changes
  }, [location]);

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
    setSelectedPdf(pdf); // Set the selected PDF to view in RightPanel
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="notes-container">
      <LeftPanel
        notesData={selectedCategory.pdfName}
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
        handlePdfClick={handlePdfClick} // Pass down the click handler
        setDroppedPdf={setDroppedPdf}
      />
      <RightPanel 
        pdf={selectedCategory} // Pass selected PDF
        handleAddCategoryToCart={handleAddCategoryToCart} // Add to cart
        droppedPdf={droppedPdf}
      />
      <ToastContainer />
    </div>
  );
};

export default Notes;
