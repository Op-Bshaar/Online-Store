import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './components/Navbar/Navbar.css';
import Login from './pages/login';
import Hero from './components/Hero/Hero';
import './components/Hero/Hero.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Shop from './pages/shop';
import Cart from './pages/cart';
import Product from './pages/product';
import Category from './pages/shopcategory';
import Men from './components/Men/Men';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/login' element={<Login />} />
          <Route path='/shopcategory' element={<Category />} />
          <Route path='/men' element={<Men />} />
          <Route path='/kids' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
