import React from 'react';
import './TermsAndConditions.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const TermsAndConditions = () => {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <div className="pageLeft">
          <h1>Terms & Conditions</h1>
        </div>
        <div className="pageRight">
          <section>
            <h2>1. Introduction</h2>
            <p>
              Welcome to Webdevnotes! These terms and conditions outline the rules and regulations for the use of our website and the purchase of our digital products (PDF notes). By accessing this website and purchasing any product, you agree to comply with these terms.
            </p>
          </section>

          <section>
            <h2>2. Payment & Billing</h2>
            <p>
              We use Razorpay as our payment gateway for all transactions. When making a purchase, you agree to provide accurate and complete payment information. All payments are subject to verification and acceptance by Razorpay. Upon successful payment, you will receive an order confirmation via email.
            </p>
          </section>

          <section>
            <h2>3. Refund Policy</h2>
            <p>
              As all our products are digital (PDF notes), we do not offer refunds once the product is delivered. Please review the product details carefully before making a purchase. If you face any issues with your purchase, you can contact our support team for assistance.
            </p>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>
              All content, including text, images, and digital products available on Webdevnotes, is the intellectual property of Webdevnotes. Unauthorized reproduction, distribution, or use of the materials is strictly prohibited and may lead to legal action.
            </p>
          </section>

          <section>
            <h2>5. Limitation of Liability</h2>
            <p>
              Webdevnotes will not be liable for any direct, indirect, or consequential damages arising from the use of our website or products. We strive to ensure the accuracy and availability of our content but do not guarantee its continuous or error-free operation.
            </p>
          </section>

          <section>
            <h2>6. Amendments</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. Changes will be posted on this page, and it is your responsibility to review them regularly. Continued use of the website following any changes constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about these terms and conditions, please contact us at ameya0015@gmail.com.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TermsAndConditions;
