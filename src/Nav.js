import React from 'react';
import { Link } from 'react-router-dom'; 
import './Nav.scss'; 

const Nav = () => {
  return (
    <div className='nav'>  
      <Link to='/' className='title'>PageTitle</Link>
      <div className='linked'>
        <Link to='/blog'>Blog</Link>
        <Link to='/product'>Product</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
};

export default Nav;
