import React from 'react';
import './Category.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const Category = () => {
  const categories = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React JS', icon: <FaReact /> },
    { name: 'Node JS', icon: <FaNodeJs /> },
    { name: 'Express JS', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'MySQL', icon: <FaDatabase /> }
  ];

  return (
    <div className="category-wrapper">
      <h1 className="category-heading">Explore Our Categories</h1>
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-box">
            <div className="category-icon">{category.icon}</div>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
