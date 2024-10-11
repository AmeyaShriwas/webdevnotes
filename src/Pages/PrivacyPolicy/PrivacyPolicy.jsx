import React from 'react';
import './PrivacyPolicy.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <div className="pageLeft">
          <h1>Privacy Policy</h1>
        </div>
        <div className="pageRight">
          <p>
            At Webdevnotes, we are committed to protecting your privacy
            and ensuring the security of your personal information. This
            Privacy Policy explains how we collect, use, and protect your data
            when you visit our website, make a purchase, or interact with our
            services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            When you purchase our PDF notes or interact with our website, we may
            collect the following types of information:
          </p>
          <ul>
            <li>
              <strong>Personal Information:</strong> Your name, email address,
              and other contact details.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect for the following purposes:
          </p>
          <ul>
            <li>To process and fulfill your orders for PDF notes.</li>
            <li>To send you purchase confirmations and product updates.</li>
            <li>
              To improve our website, products, and customer service through
              analytics.
            </li>
            <li>
              To ensure secure payment processing through our trusted payment
              providers.
            </li>
          </ul>

          <h2>3. Payment Processing</h2>
          <p>
            All payments on our website are securely processed through
            third-party payment gateway such as Razorpay. We do not store any credit card details on our servers.
            These payment providers comply with PCI-DSS standards to ensure the
            protection of your financial information. For more information on
            how your data is handled, please refer to the respective payment
            provider's privacy policy.
          </p>

        
          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to protect your personal information
            from unauthorized access, use, or disclosure. However, no method of
            transmission over the internet or electronic storage is 100% secure,
            so we cannot guarantee absolute security.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal data
            at any time. You may also request that we stop processing your data
            for specific purposes. To exercise these rights, please contact us
            at <strong>ameya0015@gmail.com</strong>.
          </p>

          <h2>7. Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting the updated policy on our
            website.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy or
            how we handle your personal information, please contact us at
            ameya0015@gmail.com.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
