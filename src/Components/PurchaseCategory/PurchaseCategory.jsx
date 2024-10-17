import React, { useEffect, useState } from 'react';
import './PurchaseCategory.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPDFs } from '../../redux/slice/pdfSlice';

const ApiUrl = process.env.REACT_APP_BASE_URL

const PurchaseCategory = () => {
  const navigate = useNavigate();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.pdfs);

  useEffect(() => {
    dispatch(fetchPDFs()); // Fetch the PDF data when the component mounts
  }, [dispatch]);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

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
        {data.map((category, index) => (
          <div
            key={category._id} // Use the unique ID instead of index
            className="Pcategory-box"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
            onClick={() => OnSelectCategory(category)}
          >
            <div className="Pcategory-image">
              <img
src={`https://ameyashriwas.in/${category.pdfImg}`} // Ensure the slash is there
// alt={`${category.pdfName} Image`} // Use pdfName for alt text
                className="Pcategory-img"
              />

            </div>
            <p className="Pcategory-title">{category.pdfName}</p>
            <p className="Pcategory-price">Price: Rs {category.pdfPrice}</p>
            <button className="Pbuy-button">Buy Now</button>
            {hoveredCategory?._id === category._id && ( // Check hovered category by ID
              <div className="Ppopup">
                <h3>{category.pdfName} Content</h3> {/* Access pdfName directly */}
                <p>{category.pdfSubTypes.join(', ')}</p> {/* Display subtypes */}
                <img
                  src={category.pdfImg} // Use pdfImg for popup
                  alt="Category Preview"
                  className="Ppopup-img"
                />
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
