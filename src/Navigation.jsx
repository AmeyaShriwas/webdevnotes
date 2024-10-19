import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load your components
const Landing = React.lazy(() => import('./Pages/Landing/Landing'));
const AuthForm = React.lazy(() => import('./Components/Form/Form'));
const NotesPage = React.lazy(() => import('./Pages/NotesPage/NotesPage'));
const CartPage = React.lazy(() => import('./Pages/CartPage/CartPage'));
const NotFoundPage = React.lazy(() => import('./Pages/PageNotFound/PageNotFound'));
const ResetPassword = React.lazy(() => import('./Components/ResetPassword/ResetPassword'));
const Contact = React.lazy(() => import('./Pages/Contact/Contact'));
const PrivacyPolicy = React.lazy(() => import('./Pages/PrivacyPolicy/PrivacyPolicy'));
const RefundPolicy = React.lazy(() => import('./Pages/RefundPolicy/RefundPolicy'));
const ShippingPolicy = React.lazy(() => import('./Pages/ShippingPolicy/ShippingPolicy'));
const TermsAndConditions = React.lazy(() => import('./Pages/TermsAndConditions/TermsAndConditions'));
const ScrollToTop = React.lazy(() => import('./Components/ScrollToTop/ScrollToTop'));
const ProfilePage = React.lazy(() => import('./Pages/ProfilePage/ProfilePage'));

const Loading = () => <div>Loading...</div>; // Loading component for lazy loading

const Navigation = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Router>
  );
};

export default Navigation;
