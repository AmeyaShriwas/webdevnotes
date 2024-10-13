import React, { useState, useEffect } from 'react';
import LeftPanel from './../LeftPanel/LeftPanel';
import RightPanel from './../RightPanel/RightPanel';
import './Notes.css';
import { useLocation } from 'react-router-dom';
import js from './../../Assets/js.png'; // Importing the JavaScript image
import { addItems } from '../../redux/slice/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pdf1 from './../../Assets/reactjs.pdf'
import pdf2 from './../../Assets/mysql.pdf'




// Unified notesData structure (same as in PurchaseCategory)
const notesData = {
  JavaScript: {
    name: 'JavaScript Basics',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'JavaScript Basics', pdfLink: 'http://localhost:3001/pdf/1' },
      { pdfName: 'Advanced JavaScript', pdfLink: 'http://localhost:3001/pdf/2' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
    ]
  },
  ReactJS: {
    name: 'React Introduction',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'React Introduction', pdfLink: 'http://localhost:3001/pdf/1' },
      { pdfName: 'React Hooks', pdfLink: 'http://localhost:3001/pdf/2' },
      { pdfName: 'Advanced React Patterns', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
    ]
  },
  ExpressJs: {
    name: 'Express Basics',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Express Basics', pdfLink: 'http://localhost:3001/pdf/1' },
      { pdfName: 'Middleware in Express', pdfLink: 'http://localhost:3001/pdf/2' },
      { pdfName: 'Advanced Express Patterns', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
    ]
  },
  NodeJS: {
    name: 'Node Introduction',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Node Introduction', pdfLink: pdf1 },
      { pdfName: 'Asynchronous NodeJS', pdfLink: pdf2 },
      { pdfName: 'Node with Express', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
    ]
  },
  NextJs: {
    name: 'Next Js',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'JavaScript Basics', pdfLink: 'http://localhost:3001/pdf/1' },
      { pdfName: 'Advanced JavaScript', pdfLink: 'http://localhost:3001/pdf/2' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
    ]
  },
  ReactNative: {
    name: 'React Native',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'React Introduction', pdfLink: 'http://localhost:3001/pdf/1' },
      { pdfName: 'React Hooks', pdfLink: 'http://localhost:3001/pdf/2' },
      { pdfName: 'Advanced React Patterns', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
    ]
  },
  TailwindCss: {
    name: 'Tailwind css',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Express Basics', pdfLink: 'http://localhost:3001/pdf/1' },
      { pdfName: 'Middleware in Express', pdfLink: 'http://localhost:3001/pdf/2' },
      { pdfName: 'Advanced Express Patterns', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
    ]
  },
  Angular: {
    name: 'Angular',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Node Introduction', pdfLink: pdf1 },
      { pdfName: 'Asynchronous NodeJS', pdfLink: pdf2 },
      { pdfName: 'Node with Express', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'JavaScript Basics', pdfLink: '' },
      { pdfName: 'Advanced JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' }
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
  const [droppedPdf, setDroppedPdf] = useState(null);

  const dispatch = useDispatch()
  const ItemsCart = useSelector((state)=> state?.cart?.value || []);
  console.log('itemcart', ItemsCart)

  console.log('selected pdf', selectedPdf)
  console.log('selectedCategory', selectedCategory)
  // const handlePdfClick = (pdfName) => {
  //   const pdfLink = `https://example.com/${pdfName.replace(/\s+/g, '-').toLowerCase()}.pdf`; // Placeholder link
  //   setSelectedPdf(pdfLink); // Set the selected PDF link for viewing
  // };

  const handleAddCategoryToCart = (e) => {
  
    const findExisting = ItemsCart?.find((item)=> item===e)
    if(findExisting){
      console.log('true')
      toast.error(`Already added in cart`);
    }
    else{
      console.log('e knwo ', e)
      dispatch(addItems(e))
      toast.success(`Item added to cart: ${e}`);
      console.log('false')
    }
   
   

  };

  return (
    <div className="notes-container">
      <LeftPanel
        notesData={notesData}
        selectedPart={selectedPart}
        setSelectedPart={setSelectedPart}
        // handlePdfClick={handlePdfClick} // Pass down the click handler
        setDroppedPdf={setDroppedPdf}
      />
      <RightPanel 
        pdfs={notesData[selectedPart]}
        price={notesData[selectedPart].price} // Show fixed category price
        handleAddCategoryToCart={handleAddCategoryToCart}
        droppedPdf={droppedPdf}
      />
      <ToastContainer/>
      
    </div>
  );
};

export default Notes;
