import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://eccomerce-av7e.onrender.com/api/v1/all-product');
      setProduct(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      setError(error.message || 'An error occurred while fetching data.');
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className='heading'>Our <span>Products</span></h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {product.length > 0 && <ProductCard  Product={product} />}
      {product.length === 0 && !loading && !error && <p>No products available.</p>}
    </>
  );
};

export default Product;
