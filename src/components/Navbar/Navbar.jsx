import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imag from '../../assets/best-stores-logo-design-shop-icon-vector-23329896.jpg';
import images from '../../assets/cart_icon.png';

const Navbar = () => {
  const [item, setItem] = useState("Shop");

  return (
    <div className='Nav'>
      <img className="logo-imag" src={imag} alt='imag' />
      <ul>
        <li onClick={() => setItem("Shop")} >
          
          <Link to="/" style={{textDecoration:"none"}}>Shop</Link>
          {item === "Shop" && <div className="underline"><hr /></div>}
        </li>
        <li onClick={() => setItem("Men")} >

          <Link to="/men" style={{textDecoration:"none"}}>Men</Link>
          {item === "Men" && <div className="underline"><hr /></div>}

        </li>
        <li onClick={() => setItem("Kids")} style={{textDecoration:"none"}}>

          <Link to="/kids" style={{textDecoration:"none"}}>Kids</Link>
          {item === "Kids" && <div className="underline"><hr /></div>}

        </li>
      </ul>
      <button><span><Link to="/login" className='btn'>Login</Link></span></button>
      <div className='cart-container'>
        <img src={images} alt='' />
        <span className='counter'>0</span>
      </div>
    </div>
  );
}

export default Navbar;
