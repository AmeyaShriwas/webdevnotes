import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Directly import your components
import Landing from './Pages/Landing/Landing';
import AuthForm from './Components/Form/Form';
import NotesPage from './Pages/NotesPage/NotesPage';
import CartPage from './Pages/CartPage/CartPage';
import NotFoundPage from './Pages/PageNotFound/PageNotFound';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Contact from './Pages/Contact/Contact';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import RefundPolicy from './Pages/RefundPolicy/RefundPolicy';
import ShippingPolicy from './Pages/ShippingPolicy/ShippingPolicy';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

const Navigation = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default Navigation;
