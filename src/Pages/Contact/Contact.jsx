import React, { useState } from 'react';
import './Contact.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header />
      <div className="pageContainer">
        <div className="pageLeft">
          <h1>Contact Us</h1>
        </div>
        <div className="pageRight">
        <h1>Welcome to our Contact Page! We specialize in providing high-quality notes in PDF format tailored for web development.</h1>
          <p>Whether you are a student, a professional, or someone looking to expand your knowledge in web development, we are here to assist you. If you have any questions, suggestions, or need support regarding our products, please feel free to reach out.</p>
          <p>Your feedback is important to us as we strive to improve our offerings and provide you with the best learning resources.</p>

          <form onSubmit={handleSubmit} className="contactForm">
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="formGroup">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="submitButton">Send Message</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
