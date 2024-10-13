import React, { useState } from 'react';
import './Contact.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApiUrl = process.env.REACT_APP_BASE_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const token = useSelector((state) => state?.auth?.token);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    if (!token) {
      toast.error('Authentication token is missing.');
      return;
    }

    try {
      const response = await axios.post(
        `${ApiUrl}/contactUs`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success('Message sent successfully.');
      console.log('Response:', response.data);
    } catch (error) {
      toast.error('Error submitting the contact form.');
      console.error('Submission error:', error);
    }
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
          <p>If you have any questions, suggestions, or need support regarding our products, feel free to reach out to us. Your feedback helps us improve our offerings.</p>

          <div className="contactForm">
            <div className="formGroup">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
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
                placeholder="Enter your email"
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
                placeholder="Enter your message"
                required
              />
            </div>
            <button onClick={handleSubmit} className="submitButton">Send Message</button>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Contact;
