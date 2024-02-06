import React from 'react';
import Cookies from 'js-cookie';
import './Cart.css'
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
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
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
