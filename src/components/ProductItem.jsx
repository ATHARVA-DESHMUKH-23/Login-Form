// src/components/ProductItem.jsx
import React from 'react';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className='decription'>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating} ⭐</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default ProductItem;
