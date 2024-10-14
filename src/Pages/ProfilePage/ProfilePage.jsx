import React, { useState } from 'react';
import './ProfilePage.css';
import Header from '../../Components/Header/Header';
import ProfileIcon from './../../Assets/profileIcon.png';
import { FaUser, FaRegHeart, FaShoppingCart, FaCog, FaBoxOpen, FaBell, FaUserCircle } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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

  // Simulate API call
  useEffect(() => {
    fetchPdfs(); // You can replace this with the actual API call
  }, []);

  const fetchPdfs = async () => {
    // Simulated API response (replace with actual API call)
    const apiResponse = []; // Empty array means no PDFs purchased yet

    // Update state
    setPdfs(apiResponse);
  };


  const { error, isAuthenticated, user, email, number } = useSelector((state) => state.auth);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileData({ ...profileData, profileImage: URL.createObjectURL(file) });
    }
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
                  <img src={profileData.profileImage} alt="Profile" className="profile-image" />
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
      case 'account':
        return (
          <div className="account-details">
          <h2>Account</h2>
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
                      <button>Download</button>
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
          className={activeSection === 'account' ? 'active' : ''}
          onClick={() => setActiveSection('account')}
        >
          <FaUser className="icon" /> Account
        </li>
        {/* <li
          className={activeSection === 'settings' ? 'active' : ''}
          onClick={() => setActiveSection('settings')}
        >
          <FaCog className="icon" /> Settings
        </li>
        <li
          className={activeSection === 'orders' ? 'active' : ''}
          onClick={() => setActiveSection('orders')}
        >
          <FaBoxOpen className="icon" /> Orders
        </li>
        <li
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
