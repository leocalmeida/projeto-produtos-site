import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Product from './Pages/Product';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' end element={<Home />} />
      <Route path='contato' element={<Contact />} />
      <Route path='produto/:id' element={<Product />} />
    </Routes>
  );
};

export default AppRoutes;
