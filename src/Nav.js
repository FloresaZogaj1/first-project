import React from 'react';
import { Link } from 'react-router-dom'; 
import './Nav.scss'; 
import ProductMegamenu from './ProductMegamenu';
import { AiFillApple } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { BsTriangleFill } from 'react-icons/bs';

const Nav = () => { 
  return (
    <div className='nav'>
      <Link to ='/' className='title'><AiFillApple/>Title</Link>
      <div className='linkedd'>
        <div className='nav-link'>
          <Link to='/' className='inner-link'>Product<MdKeyboardArrowDown/></Link>
          <BsTriangleFill className='arrow' />
          <ProductMegamenu/>
        </div>
         
        <div className='nav-link'>
          <Link to='/' className='inner-link'>Blog</Link>
        </div>
        <div className='nav-link'>
          <Link to='/' className='inner-link'>About</Link>
        </div>
        <div className='nav-link'>
          <Link to='/' className='inner-link'>Support</Link>
        </div>
      </div>
      <div className='auth'>
        <Link to='/'>Log in</Link>
        <Link to='/' className='signup'>Sign up</Link>
      </div>
    </div>
  );
};

export default Nav;
