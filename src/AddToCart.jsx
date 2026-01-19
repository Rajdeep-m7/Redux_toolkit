import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartList from './CartList';

function AddToCart() {
  const cartSelector = useSelector((state)=> state.cart.items);
  
  
  return (
    <div className="cart"><Link className='Cart-link' to={'/cart'}>
    <span className="cart-icon">🛒</span></Link>
    <span className="cart-count">{cartSelector.length ? cartSelector.length : 0}</span>
    
  </div>
  )
}

export default AddToCart