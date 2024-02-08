import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import './Cart.css'
import cart from './cart.png'
import { Link } from 'react-router-dom';
const Cart = ({ setCart }) => {
  const cartItemss = Cookies.get('cart');
  const cartItems = JSON.parse(cartItemss || '[]');
  console.log(cartItems)

  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    Cookies.set('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const calculateTotalSum = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  sessionStorage.setItem('Total_p',calculateTotalSum())
  const collectAllProductId = () => {
    const allIds = []; // Array to store all product IDs

    for (let index = 0; index < cartItems.length; index++) {
        const element = cartItems[index];
        const Ids = element.id;
        console.log(Ids);
        allIds.push(Ids); // Push the ID to the array
    }

    sessionStorage.setItem('Ids', JSON.stringify(allIds)); // Save the array in sessionStorage

    window.location.href = "/Payform";
}


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
        <div className='min-h-screen'>
          <ul>
            {cartItems.map((item, index) => (
              <li className='cart-p' key={index} >
                {item.image && item.image.length > 0 && (
                  <img src={item.image[0]} width={80} alt='cart-img' />
                )}
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: Rs {item.price}</span>
                <span>Size:  {item.sizes || "Select Sizes" }</span>

                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-sum">Total: Rs {calculateTotalSum()}</div>

          <button onClick={collectAllProductId} >PayForThis</button>
        </div>
        
      )}
                    

    </div>
  );
};

export default Cart;
