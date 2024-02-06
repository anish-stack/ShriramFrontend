import React, { useState, useEffect } from 'react';
import './product.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ Product }) => {
    console.log(Product)
  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const products = Product
  console.log("products",products)
  const totalPages = Math.ceil(products.length / productsPerPage);

  const startIdx = (currentPage - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const currentProducts = products.slice(startIdx, endIdx);
  console.log("currentProducts",currentProducts)

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
        <div className="product-container">
    <div className="products">
  {currentProducts.length > 0 ? (
    <>
      {console.log("currentProducts", currentProducts)}
      {currentProducts.map((item) => (
        <Link to={`/Product-Info/${item._id}`} key={item.id} className="product-card">
          <div className="product-img">
            <img src={item.image} alt={item.ProductName} />
          </div>
          <div className="product-info">
            <span className="product-name">{item.ProductName}</span>
            <h4 className="price-dis">
              <del>{item.prices}</del> <span>{item.discoundPrice}</span>
            </h4>
            <p>{item.ProductDescription}</p>
          </div>
          <div className="tag">
            <span>{item.tag}</span>
          </div>
          <div className="hover-show">
            <i className="ri-shopping-cart-line"></i>
          </div>
        </Link>
      ))}
    </>
  ) : (
    <div className="no-data-message">No products available.</div>
  )}
</div>

    
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
