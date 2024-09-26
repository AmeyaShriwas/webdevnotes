import React, { useState } from 'react';
import './PurchaseCategory.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const PurchaseCategory = () => {
  const categories = [
    { name: 'HTML', icon: <FaHtml5 style={{ color: '#E44D26' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `HTML PDF ${i + 1}`) },
    { name: 'CSS', icon: <FaCss3Alt style={{ color: '#1572B6' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `CSS PDF ${i + 1}`) },
    { name: 'JavaScript', icon: <FaJs style={{ color: '#F7DF1E' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `JavaScript PDF ${i + 1}`) },
    { name: 'React JS', icon: <FaReact style={{ color: '#61DAFB' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `React PDF ${i + 1}`) },
    { name: 'Node JS', icon: <FaNodeJs style={{ color: '#8CC84B' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `Node PDF ${i + 1}`) },
    { name: 'Express JS', icon: <SiExpress style={{ color: '#000000' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `Express PDF ${i + 1}`) },
    { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `MongoDB PDF ${i + 1}`) },
    { name: 'MySQL', icon: <FaDatabase style={{ color: '#00758F' }} />, pdfs: Array.from({ length: 40 }, (_, i) => `MySQL PDF ${i + 1}`) }
  ];

  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setHoveredCategory(category);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="Pcategory-wrapper">
      <h1 className="Pcategory-heading">Explore Our Categories</h1>
      <div className="Pcategory-container">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="Pcategory-box"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="Pcategory-icon">{category.icon}</div>
            <p className="Pcategory-title">{category.name}</p>
            <p>{category.pdfs.length} PDFs available</p>
            <p className="Pcategory-price">Price: Rs 300</p>
            <button className="Pbuy-button">Buy Now</button>
            {hoveredCategory === category && (
              <div className="Ppopup">
                <h3>{category.name} Contents</h3>
                <ul>
                  {category.pdfs.map((pdf, i) => (
                    <li key={i}>{pdf}</li>
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
}

export default PurchaseCategory;
