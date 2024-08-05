import React from 'react';
import { Link } from 'react-router-dom'; 
import './Nav.scss'; 

const Nav = () => {
  return (
    <div className='nav'>  
      <Link to='/'>PageTitle</Link>
      <div className='links'>
        <Link to='/blog'>Blog</Link>
        <Link to='/products'>Products</Link>
        <Link to='/about'>About</Link>
      </div>
    </div>
  );
};

export default Nav;
