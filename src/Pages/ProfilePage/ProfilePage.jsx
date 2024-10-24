import React, { useState } from 'react';
import './ProfilePage.css';
import Header from '../../Components/Header/Header';
import ProfileIcon from './../../Assets/profile.webp';
import { FaUser,FaCog,  FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '+1234567890',
    password: '********',
    profileImage: ProfileIcon
  });
  const [pdfs, setPdfs] = useState([]);
  const token = useSelector((state) => state?.auth?.token);   // Get authentication token from Redux


  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://notesapi.ameyashriwas.in/userOrder', {
          headers: {
            Authorization: `Bearer ${token}` // Ensure token is valid
          }
        });
        
        // Extract PDFs from the orders
        const orders = response.data.data;
        console.log(response.data.data)
        const pdfData = [];

        orders.forEach(order => {
          order.pdfs.forEach(pdf => {
            pdfData.push({
              name: pdf.name, // assuming name is inside the pdf object
              invoice: pdf.invoice || order.razorpay_order_id, // you can use order id if invoice is not available
              purchaseDate: order.purchaseDate || 'N/A', // use a fallback if no date is provided
              downloadLink: pdf.downloadLink || '#' // assuming there is a link for downloading
            });
          });
        });

        setPdfs(pdfData); // Update state with extracted PDF data

      } catch (error) {
        console.error('error fetching PDFs', error);
      }
    };

    if (token) {
      fetchData(); // Call the function if the token exists
    }
  }, [token, activeSection]);


  const {user, email} = useSelector((state) => state.auth);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., API call
    alert('Profile updated successfully!');
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="profile-details-container">
          <div className="profile-details">
            <h2>Profile Details</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
            <div className="image-wrapper">
                  <img src={profileData.profileImage} alt="Profile" className="profile-image" loading="lazy"  />
                </div>
              
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  
                  value={number}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div> */}
            </form>
          </div>
        </div>
        
        );
      case 'pdf':
        return (
          <div className="account-details">
      <h2>PDFs</h2>
      <table>
        <thead>
          <tr>
            <th>PDF Name</th>
            <th>PDF Invoice</th>
            <th>Purchase Date</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No PDFs purchased yet
              </td>
            </tr>
          ) : (
            pdfs.map((pdf, index) => (
              <tr key={index}>
                <td>{pdf.name}</td>
                <td>{pdf.invoice}</td>
                <td>{pdf.purchaseDate}</td>
                <td>
                  <a href={pdf.downloadLink} download>
                    <button>Download</button>
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
        );
      case 'settings':
        return (
          <div className="settings">
            <h2>Settings</h2>
            <p>Update your settings here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="profile-page">
      <div className="sidebar">
      <ul>
        <li
          className={activeSection === 'profile' ? 'active' : ''}
          onClick={() => setActiveSection('profile')}
        >
          <FaUserCircle className="icon" /> Profile Details
        </li>
        <li
          className={activeSection === 'pdf' ? 'active' : ''}
          onClick={() => setActiveSection('pdf')}
        >
          <FaUser className="icon" /> PDF
        </li>
        <li
          className={activeSection === 'orders' ? 'active' : ''}
          onClick={() => setActiveSection('orders')}
        >
          <FaCog className="icon" /> Orders
        </li>
      <li
          className={activeSection === 'setting' ? 'active' : ''}
          onClick={() => setActiveSection('setting')}
        >
          <FaCog className="icon" /> Setting
        </li>
         {/*<li
          className={activeSection === 'wishlist' ? 'active' : ''}
          onClick={() => setActiveSection('wishlist')}
        >
          <FaRegHeart className="icon" /> Wishlist
        </li>
        <li
          className={activeSection === 'cart' ? 'active' : ''}
          onClick={() => setActiveSection('cart')}
        >
          <FaShoppingCart className="icon" /> Cart
        </li>
        <li
          className={activeSection === 'notifications' ? 'active' : ''}
          onClick={() => setActiveSection('notifications')}
        >
          <FaBell className="icon" /> Notifications
        </li> */}
      </ul>
    </div>
        <div className="content">
          {renderSection()}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
