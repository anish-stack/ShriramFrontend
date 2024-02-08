import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import Cookies from 'js-cookie';
import Cart from '../cart/Cart';
import { toast } from 'react-hot-toast'
const SingleProduct = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([]);
  // State to store the selected size
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    // Set the selected size to the first size in the product.sizes array when the component mounts
    if (product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0].SizeNumber);
    }
  }, [product.sizes]);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  // console.log(id)
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(newQuantity);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post(`https://eccomerce-av7e.onrender.com/api/v1/single-product/${id}`);
      setProduct(response.data.data);
      console.log(response.data)
    } catch (error) {
      console.log(error.message || 'An error occurred while fetching data.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const [cart, setCart] = useState([]);

  const addToCart = () => {
    const itemToAdd = {
      id: product._id,
      name: product.ProductName,
      price: product.discountPrice,
      quantity: quantity,
      image: product.image,
      sizes: selectedSize
    };
    // Update local state
    // Update local state
    setCart(prevCart => [...prevCart, itemToAdd]);
    const existingCart = Cookies.get('cart') || '[]';
    const existingCartArray = JSON.parse(existingCart);
    const updatedCart = [...existingCartArray, itemToAdd];
    Cookies.set('cart', JSON.stringify(updatedCart));

    toast.success(`${quantity} ${product.ProductName}(s) added to the cart!`);
  };





  return (
    <>

      <div className='single-product-container'>
        <div className='img-container'>
          {product.image && product.image.length > 0 && (
            <img src={product.image[0]} alt='' />
          )}
        </div>
        <div className='product-information'>
          <div className='product-breadcrumb'>
            <span>Home/ Category/ {product.category}</span>
          </div>
          <h2 className='product-name'>{product.ProductName}</h2>
          <p className='product-description'>{product.ProductDescription}</p>
          <p className='product-price'>
            <del>Rs {product.prices}</del> <span>Rs {product.discountPrice
            }</span>
          </p>
          <p className='product-color'>
            Color: {product.color && product.color.length > 0 ? product.color.join(', ') : 'N/A'}
          </p>
          <p className='product-sizes'>
            Sizes: {product.sizes && product.sizes.length > 0 ? product.sizes.map(size => (
              <span
                key={size._id}
                className={`size ${selectedSize === size.SizeNumber ? 'selected' : ''}`}
                onClick={() => handleSizeSelection(size.SizeNumber)}>
                {size.SizeNumber}
              </span>
            )) : 'N/A'}
          </p>
          <div className='product-quantity'>
            <label htmlFor='quantity'>Quantity:</label>
            <input
              type='number'
              id='quantity'
              name='quantity'
              value={quantity}
              onChange={handleQuantityChange}
              min='1'
            />
          </div>
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>

  )
}

export default SingleProduct