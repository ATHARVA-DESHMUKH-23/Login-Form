// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ categories, onCategoryChange, onSortPriceChange, onSortRatingChange }) => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category}>
            <a onClick={() => onCategoryChange(category)}>{category}</a>
          </li>
        ))}
      </ul>
      
      <h2>Sort By</h2>
      <div className='sorting'>
        <h3>Price</h3>
        <select onChange={(e) => onSortPriceChange(e.target.value)}>
          <option value="price_asc">Low to High</option>
          <option value="price_desc">High to Low</option>
        </select>
      </div>
      
      <div className='sorting'>
        <h3>Rating</h3>
        <select onChange={(e) => onSortRatingChange(e.target.value)}>
          <option value="rating_asc">Low to High</option>
          <option value="rating_desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
