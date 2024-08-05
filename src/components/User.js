import React from 'react';
import { Data } from './data';
import './user.scss';
import Item  from './Item';

const User = (props) => {
  return (
    <div className='user'>
      {Data.map((d, i) => {
        return (
            <Item 
            key={i} {...d}
            />
          
        );
      })}
    </div>
  );
}

export default User;
