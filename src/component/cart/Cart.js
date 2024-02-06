import React from 'react';
import Cookies from 'js-cookie';
import './Cart.css'
import cart from './cart.png'
import { Link } from 'react-router-dom';
const Cart = ({ setCart }) => {
  const cartItemss = Cookies.get('cart');
  const cartItems = JSON.parse(cartItemss || '[]');

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    Cookies.set('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const calculateTotalSum = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <div className='heading'>
      <span>Shopping Cart</span>
      </div>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <img src={cart} alt="" />
          <h4>Your Cart is Empty</h4>
          <Link to={`/shop`} >Go Shopping!</Link>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <img src= {item.image} alt='images' width={80} />
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: Rs {item.price}</span>
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-sum">Total: Rs {calculateTotalSum()}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
