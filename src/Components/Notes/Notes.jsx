import React, { useState, useEffect } from 'react';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';
import './Notes.css';
import { useLocation } from 'react-router-dom';
import js from './../../Assets/js.png'; // Importing the JavaScript image
import { addItems } from '../../redux/slice/CartSlice';
import { useDispatch, useSelector } from 'react-redux';


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

  const dispatch = useDispatch()
  const ItemsCart = useSelector((state)=> state.cart.value || []);
  console.log('itemcart', ItemsCart)

  console.log('selected pdf', selectedPdf)
  console.log('selectedCategory', selectedCategory)
  const handlePdfClick = (pdfName) => {
    const pdfLink = `https://example.com/${pdfName.replace(/\s+/g, '-').toLowerCase()}.pdf`; // Placeholder link
    setSelectedPdf(pdfLink); // Set the selected PDF link for viewing
  };

  const handleAddCategoryToCart = (e) => {
    console.log('e', e)
    console.log('itemcart', ItemsCart)
    console.log('typeOF', typeof(ItemsCart))
    const findExisting = ItemsCart?.find((item)=> item===e)
    if(findExisting){
      console.log('true')
    }
    else{
      dispatch(addItems(e))
      console.log('false')
    }
   
   

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
        pdfs={notesData[selectedPart]}
        price={notesData[selectedPart].price} // Show fixed category price
        handleAddCategoryToCart={handleAddCategoryToCart}
      />
      
    </div>
  );
};

export default Notes;
