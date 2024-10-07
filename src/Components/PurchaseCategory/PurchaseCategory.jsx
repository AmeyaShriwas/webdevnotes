import React, { useState } from 'react';
import './PurchaseCategory.css';
import { useNavigate } from 'react-router-dom';
import js from './../../Assets/js.png'; // Importing the JavaScript image

// Unified notesData structure
const notesData = {
  JavaScript: {
    name: 'JavaScript Basics',
    price: 300,
    img: js,
    pdfs: [
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
