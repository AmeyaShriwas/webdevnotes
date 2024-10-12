import React, { useState } from 'react';
import './ProfilePage.css';
import Header from '../../Components/Header/Header';
import ProfileIcon from './../../Assets/profileIcon.png';

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phoneNumber: '+1234567890',
    password: '********',
    profileImage: ProfileIcon
  });

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
          <div className="profile-details">
            <h2>Profile Details</h2>
            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <img src={profileData.profileImage} alt="Profile" className="profile-image" />
                <input type="file" id="profileImage" name="profileImage" onChange={handleImageUpload} />
              </div>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={profileData.password}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="update-button">Update</button>
            </form>
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
                <tr>
                  <td>Invoice_001.pdf</td>
                  <td>INV-001</td>
                  <td>01/10/2024</td>
                  <td><button>Download</button></td>
                </tr>
                <tr>
                  <td>Invoice_002.pdf</td>
                  <td>INV-002</td>
                  <td>05/09/2024</td>
                  <td><button>Download</button></td>
                </tr>
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
            <li onClick={() => setActiveSection('profile')}>Profile Details</li>
            <li onClick={() => setActiveSection('account')}>Account</li>
            <li onClick={() => setActiveSection('settings')}>Settings</li>
            <li onClick={() => setActiveSection('orders')}>Orders</li>
            <li onClick={() => setActiveSection('wishlist')}>Wishlist</li>
            <li onClick={() => setActiveSection('cart')}>Cart</li>
            <li onClick={() => setActiveSection('notifications')}>Notifications</li>
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
