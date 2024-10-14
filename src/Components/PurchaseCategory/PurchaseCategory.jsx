import React, { useState } from 'react';
import './PurchaseCategory.css';
import { useNavigate } from 'react-router-dom';
import reactIcon from './../../Assets/reactIcon.png'; // Importing the JavaScript image
import jsIcon from './../../Assets/jsIcon.png'; // Importing the JavaScript image
import nodeIcon from './../../Assets/nodeIcon.png'; // Importing the JavaScript image
import expressIcon from './../../Assets/expressIcon.png'; // Importing the JavaScript image
import angularIcon from './../../Assets/angularIcon.webp'
import tailwindIcon from './../../Assets/tailwindcssIcon.png'
import nextIcon from './../../Assets/nextjsIcon.svg'

// Unified notesData structure (same as in PurchaseCategory)
const notesData = {
  JavaScript: {
    name: 'JavaScript Basics',
    price: 300,
    img: jsIcon,
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
    img: reactIcon,
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
    img: expressIcon,
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
    img: nodeIcon,
    pdfs: [
      { pdfName: 'Node Introduction', pdfLink: '' },
      { pdfName: 'Asynchronous NodeJS', pdfLink: '' },
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
    img: nextIcon,
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
    img: reactIcon,
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
    img: tailwindIcon,
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
    img: angularIcon,
    pdfs: [
      { pdfName: 'Node Introduction', pdfLink: '' },
      { pdfName: 'Asynchronous NodeJS', pdfLink: '' },
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

const PurchaseCategory = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  const OnSelectCategory = (category) => {
    console.log('selected category', category);
    navigate('/notes', { state: { category } });
  };

  const handleSeeAll = () => {
    navigate('/all-categories'); // Navigate to a page where all categories can be explored
  };

  return (
    <div className="Pcategory-wrapper">
      <h1 className="Pcategory-heading">Explore Our Categories</h1>
      <div className="Pcategory-container">
        {Object.keys(notesData).map((category, index) => (
          <div 
            key={index} 
            className="Pcategory-box"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            onClick={() => OnSelectCategory(category)}
          >
            <div className="Pcategory-image">
              <img src={notesData[category].img} alt={`${category} Image`} className="Pcategory-img" />
            </div>
            <p className="Pcategory-title">{category}</p>

            <p className="Pcategory-price">Price: Rs {notesData[category].price}</p>
            <button className="Pbuy-button">Buy Now</button>
            {hoveredCategory === category && (
              <div className="Ppopup">
                <h3>{category} Content</h3>
                <p>{notesData[category].name}</p>
                <img src={notesData[category].img} alt="Category Preview" className="Ppopup-img" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="Psee-all-button-wrapper">
        <button className="Psee-all-button" onClick={handleSeeAll}>
          See All
        </button>
      </div>
    </div>
  );
};

export default PurchaseCategory;
