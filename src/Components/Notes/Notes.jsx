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




const notesData = {
  JavaScript: {
    name: 'JavaScript Basics',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'JavaScript Introduction', pdfLink: '' },
      { pdfName: 'Variables and Data Types', pdfLink: '' },
      { pdfName: 'Functions and Scope', pdfLink: '' },
      { pdfName: 'Objects and Arrays', pdfLink: '' },
      { pdfName: 'Asynchronous JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript ES6 Features', pdfLink: '' },
      { pdfName: 'Closures and Higher-Order Functions', pdfLink: '' },
      { pdfName: 'Promises and Async/Await', pdfLink: '' },
      { pdfName: 'JavaScript Modules', pdfLink: '' },
      { pdfName: 'Error Handling in JavaScript', pdfLink: '' },
      { pdfName: 'JavaScript Design Patterns', pdfLink: '' },
      { pdfName: 'Event Loop and Concurrency', pdfLink: '' }
    ]
  },
  ReactJS: {
    name: 'React Introduction',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Introduction to React', pdfLink: '' },
      { pdfName: 'React Component Lifecycle', pdfLink: '' },
      { pdfName: 'React State and Props', pdfLink: '' },
      { pdfName: 'Handling Events in React', pdfLink: '' },
      { pdfName: 'React Hooks (useState, useEffect)', pdfLink: '' },
      { pdfName: 'Context API and useContext', pdfLink: '' },
      { pdfName: 'React Router Basics', pdfLink: '' },
      { pdfName: 'State Management with Redux', pdfLink: '' },
      { pdfName: 'React Performance Optimization', pdfLink: '' },
      { pdfName: 'React Suspense and Lazy Loading', pdfLink: '' },
      { pdfName: 'Testing React Components', pdfLink: '' },
      { pdfName: 'Advanced React Patterns', pdfLink: '' }
    ]
  },
  ExpressJs: {
    name: 'Express Basics',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Introduction to Express', pdfLink: '' },
      { pdfName: 'Routing in Express', pdfLink: '' },
      { pdfName: 'Middleware Functions', pdfLink: '' },
      { pdfName: 'Error Handling in Express', pdfLink: '' },
      { pdfName: 'Building REST APIs', pdfLink: '' },
      { pdfName: 'Express with MongoDB (Mongoose)', pdfLink: '' },
      { pdfName: 'Authentication with JWT in Express', pdfLink: '' },
      { pdfName: 'Express and Sessions', pdfLink: '' },
      { pdfName: 'File Uploads in Express', pdfLink: '' },
      { pdfName: 'Real-time Applications with Socket.IO', pdfLink: '' },
      { pdfName: 'Deploying Express Apps', pdfLink: '' },
      { pdfName: 'Scaling Express Applications', pdfLink: '' }
    ]
  },
  NodeJS: {
    name: 'Node Introduction',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Introduction to Node.js', pdfLink: '' },
      { pdfName: 'Node.js Event Loop', pdfLink: '' },
      { pdfName: 'Working with File System in Node.js', pdfLink: '' },
      { pdfName: 'Modules in Node.js', pdfLink: '' },
      { pdfName: 'Streams and Buffers in Node.js', pdfLink: '' },
      { pdfName: 'Node.js HTTP Module', pdfLink: '' },
      { pdfName: 'Building APIs with Node.js', pdfLink: '' },
      { pdfName: 'Asynchronous Programming in Node.js', pdfLink: '' },
      { pdfName: 'Using npm and Creating Packages', pdfLink: '' },
      { pdfName: 'Node.js with Databases', pdfLink: '' },
      { pdfName: 'Debugging and Testing in Node.js', pdfLink: '' },
      { pdfName: 'Deploying Node.js Applications', pdfLink: '' }
    ]
  },
  NextJs: {
    name: 'Next Js',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Introduction to Next.js', pdfLink: '' },
      { pdfName: 'Next.js File-based Routing', pdfLink: '' },
      { pdfName: 'Server-side Rendering in Next.js', pdfLink: '' },
      { pdfName: 'Static Site Generation', pdfLink: '' },
      { pdfName: 'API Routes in Next.js', pdfLink: '' },
      { pdfName: 'Dynamic Routing in Next.js', pdfLink: '' },
      { pdfName: 'Deploying Next.js Applications', pdfLink: '' },
      { pdfName: 'Next.js with CSS and Sass', pdfLink: '' },
      { pdfName: 'Next.js with Redux', pdfLink: '' },
      { pdfName: 'Optimizing Performance in Next.js', pdfLink: '' },
      { pdfName: 'Next.js Authentication', pdfLink: '' },
      { pdfName: 'Advanced Next.js Features', pdfLink: '' }
    ]
  },
  ReactNative: {
    name: 'React Native',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Getting Started with React Native', pdfLink: '' },
      { pdfName: 'React Native Components and APIs', pdfLink: '' },
      { pdfName: 'Handling Navigation in React Native', pdfLink: '' },
      { pdfName: 'Managing State in React Native', pdfLink: '' },
      { pdfName: 'Working with React Native CLI', pdfLink: '' },
      { pdfName: 'Using Expo for React Native', pdfLink: '' },
      { pdfName: 'Animations in React Native', pdfLink: '' },
      { pdfName: 'React Native with Redux', pdfLink: '' },
      { pdfName: 'React Native Forms and Validation', pdfLink: '' },
      { pdfName: 'Accessing Native Features with React Native', pdfLink: '' },
      { pdfName: 'Debugging React Native Apps', pdfLink: '' },
      { pdfName: 'Publishing React Native Apps', pdfLink: '' }
    ]
  },
  TailwindCss: {
    name: 'Tailwind CSS',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Introduction to Tailwind CSS', pdfLink: '' },
      { pdfName: 'Utility-first CSS with Tailwind', pdfLink: '' },
      { pdfName: 'Responsive Design with Tailwind CSS', pdfLink: '' },
      { pdfName: 'Tailwind CSS Customization', pdfLink: '' },
      { pdfName: 'Working with Tailwind Plugins', pdfLink: '' },
      { pdfName: 'Tailwind CSS with Flexbox and Grid', pdfLink: '' },
      { pdfName: 'Dark Mode in Tailwind CSS', pdfLink: '' },
      { pdfName: 'Animating with Tailwind CSS', pdfLink: '' },
      { pdfName: 'Optimizing Tailwind CSS for Production', pdfLink: '' },
      { pdfName: 'Tailwind with React', pdfLink: '' },
      { pdfName: 'Tailwind with Next.js', pdfLink: '' },
      { pdfName: 'Advanced Tailwind CSS Techniques', pdfLink: '' }
    ]
  },
  Angular: {
    name: 'Angular',
    price: 300,
    img: js,
    pdfs: [
      { pdfName: 'Introduction to Angular', pdfLink: '' },
      { pdfName: 'Angular Components and Modules', pdfLink: '' },
      { pdfName: 'Angular Services and Dependency Injection', pdfLink: '' },
      { pdfName: 'Routing in Angular', pdfLink: '' },
      { pdfName: 'Forms and Validation in Angular', pdfLink: '' },
      { pdfName: 'Reactive Programming with RxJS', pdfLink: '' },
      { pdfName: 'State Management with NgRx', pdfLink: '' },
      { pdfName: 'Testing Angular Applications', pdfLink: '' },
      { pdfName: 'Optimizing Angular Applications', pdfLink: '' },
      { pdfName: 'Angular with REST APIs', pdfLink: '' },
      { pdfName: 'Building Progressive Web Apps with Angular', pdfLink: '' },
      { pdfName: 'Advanced Angular Concepts', pdfLink: '' }
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
