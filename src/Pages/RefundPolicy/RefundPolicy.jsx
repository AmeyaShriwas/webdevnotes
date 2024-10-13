import React from 'react';
import './RefundPolicy.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const RefundPolicy = () => {
  return (
    <>
      <Header />
      <div className="pageContainer">
        <div className="pageLeft">
          <h1>Refund & Cancellation Policy</h1>
        </div>
        <div className="pageRight">
          <section>
            <h2>1. Introduction</h2>
            <p>
              At Webdevnotes, we strive to provide the best digital products (PDF notes) for our customers. This Refund & Cancellation Policy explains the conditions under which we offer refunds and cancellations for purchases made on our platform.
            </p>
          </section>

          <section>
            <h2>2. No Refund Policy for Digital Products</h2>
            <p>
              Since our products are digital downloads, we do not offer refunds once the product is delivered and the download link is provided. Please ensure that you have reviewed the product details before completing your purchase.
            </p>
          </section>

          <section>
            <h2>3. Exceptions to the No Refund Policy</h2>
            <p>
              In exceptional cases, such as if a product is not delivered as described, you may contact our support team for assistance. Refunds will only be issued at our discretion after an investigation. Please contact us at <a href="mailto:ameya0015@gmail.com">ameya0015@gmail.com</a> within 7 days of purchase.
            </p>
          </section>

          <section>
            <h2>4. Order Cancellations</h2>
            <p>
              As our products are delivered instantly via download links, cancellation of orders is not possible once payment has been processed. Ensure you verify your order before confirming the purchase.
            </p>
          </section>

          <section>
            <h2>5. Payment Disputes</h2>
            <p>
              If you encounter any issues with your payment or believe there has been an error, please contact our support team immediately. All disputes related to payments are handled in accordance with Razorpay’s payment dispute resolution policies.
            </p>
          </section>

          <section>
            <h2>6. Contact Us</h2>
            <p>
              For any further questions regarding our Refund & Cancellation Policy, please contact our support team at <a href="mailto:ameya0015@gmail.com">ameya0015@gmail.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default RefundPolicy;
