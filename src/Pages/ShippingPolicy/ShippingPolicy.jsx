import React from 'react';
import './ShippingPolicy.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const ShippingPolicy = () => {
    return (
        <>
          <Header />
          <div className="pageContainer">
            <div className="pageLeft">
              <h1>Digital Download Policy</h1>
            </div>
            <div className="pageRight">
              <section>
                <h2>1. Introduction</h2>
                <p>
                  At Webdevnotes, we offer digital products in the form of PDF notes. Once payment is successfully processed, you will receive a download link to access the purchased materials. This policy outlines the terms of our digital download process.
                </p>
              </section>
    
              <section>
                <h2>2. Delivery of Digital Products</h2>
                <p>
                  Upon successful payment, an email will be sent to the registered email address containing a secure download link for your PDF notes. You will also have access to your purchased files through your account on our website.
                </p>
              </section>
    
              <section>
                <h2>3. Access Duration</h2>
                <p>
                  The download link will remain active for 30 days from the date of purchase. Please ensure that you download the files within this period. After the expiration of the link, the download will no longer be available unless requested from customer support.
                </p>
              </section>
    
              <section>
                <h2>4. Issues with Download</h2>
                <p>
                  If you encounter any issues with downloading your product, such as corrupted files or broken links, please contact our support team at <a href="mailto:support@webdevnotes.com">support@webdevnotes.com</a>. We will assist you in resolving the issue and ensure you receive the correct files.
                </p>
              </section>
    
              <section>
                <h2>5. Payment Confirmation</h2>
                <p>
                  All payments are processed securely through Razorpay. Once payment is confirmed, you will receive an order confirmation via email along with the download link for your purchased PDF notes. Please allow a few minutes for the payment confirmation to process.
                </p>
              </section>
    
              <section>
                <h2>6. Refund & Cancellation</h2>
                <p>
                  Since our products are digital, we do not offer refunds after the download link has been provided. Please review your order carefully before completing the purchase.
                </p>
              </section>
    
              <section>
                <h2>7. Contact Us</h2>
                <p>
                  If you have any further questions or concerns regarding the Digital Download Policy, feel free to reach out to us at <a href="mailto:support@webdevnotes.com">support@webdevnotes.com</a>.
                </p>
              </section>
            </div>
          </div>
          <Footer/>
        </>
      );
    }
export default ShippingPolicy;
