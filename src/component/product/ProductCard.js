import React, { useState, useEffect } from 'react';
import './product.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ Product }) => {
  console.log(Product)
  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const products = Product
  console.log("products", products)
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const currentProducts = products.slice(startIdx, endIdx);
  console.log("currentProducts", currentProducts)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="product-main-box">
        {currentProducts.length > 0 ? (
          <>
            {console.log("currentProducts", currentProducts)}
            {currentProducts.map((item) => (
              <Link to={`/Product-Info/${item._id}`} key={item.id} className="product-card">
                <div className='product-image'>
                  <img src={item.image[0]} alt={item.ProductName} />
                </div>
                <div className='product-detail'>
                  <span className="product-name">{item.ProductName}</span>
                  <div className="priceandcategory">
                    <span className='product-category'>{item.category}</span>
                    <span className='product-price'><del>{item.prices}</del><h4>{item.discoundPrice}</h4></span>
                  </div>
                  <div className='cart-box'>
                  <i class="ri-shopping-cart-fill"></i>
                  </div>
                </div>
                <span className='product-span'>{item.tag}</span>
              </Link>
            ))}
          </>
        ) : (
          <div className="no-data-message">No products available.</div>
        )}
      </div>


      {products.length > productsPerPage && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              className={page === currentPage ? 'active' : ''}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </>

  );
};

export default ProductCard;
