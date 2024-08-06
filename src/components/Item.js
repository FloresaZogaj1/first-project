import React from 'react'

const Item = ({title, description}) => {
  return ( 
    <div className='item'>
            <h6>{title}</h6>
            <p>{description}</p>
          </div> 
  )
}

export default Item