import React, { useState } from 'react';
import './PurchaseCategory.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const notesData = {
  JavaScript: {
    pdfs: [
      { name: 'JavaScript Basics', link: 'https://basponccollege.org/LMS/EMaterial/Science/Comp/HVP/JS%20Notes.pdf' },
      { name: 'Advanced JavaScript', link: '#' },
      { name: 'JavaScript ES6 Features', link: '#' },
    ],
    price: 300,
  },
  ReactJS: {
    pdfs: [
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
    ],
    price: 300,
  },
  NodeJS: {
    pdfs: [
      { name: 'Node Introduction', link: '#' },
      { name: 'Asynchronous NodeJS', link: '#' },
      { name: 'Node with Express', link: '#' },
    ],
    price: 300,
  },
};

const iconsMap = {
  JavaScript: <FaJs style={{ color: '#F7DF1E' }} />,
  ReactJS: <FaReact style={{ color: '#61DAFB' }} />,
  ExpressJs: <SiExpress style={{ color: '#000000' }} />,
  NodeJS: <FaNodeJs style={{ color: '#8CC84B' }} />,
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
            <div className="Pcategory-icon">{iconsMap[category]}</div>
            <p className="Pcategory-title">{category}</p>
            <p>{notesData[category].pdfs.length} PDFs available</p>
            <p className="Pcategory-price">Price: Rs {notesData[category].price}</p>
            <button className="Pbuy-button">Buy Now</button>
            {hoveredCategory === category && (
              <div className="Ppopup">
                <h3>{category} Contents</h3>
                <ul>
                  {notesData[category].pdfs.map((pdf, i) => (
                    <li key={i}>
                      <a href={pdf.link} target="_blank" rel="noopener noreferrer">
                        {pdf.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <img src="/sample-image.jpg" alt="PDF Preview" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCategory;
