import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing/Landing';
import AuthForm from './Components/Form/Form';
import NotesPage from './Pages/NotesPage/NotesPage';
import CartPage from './Pages/CartPage/CartPage';




const Navigation = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
   
  );
};

export default Navigation;
