// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = ({ categories, onCategoryChange, onSortPriceChange, onSortRatingChange }) => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <div >
        {categories.map(category => (
          <div key={category}>
            <div className='category' onClick={() => onCategoryChange(category)}>{category}</div>
          </div>
        ))}
      </div >
      
      <h2>Sort By</h2>
      <div className='sorting'>
        <h3>Price</h3>
        <select className='option-tab' onChange={(e) => onSortPriceChange(e.target.value)}>
          <option value="price_asc">Low to High</option>
          <option value="price_desc">High to Low</option>
        </select>
      </div>
      
      <div className='sorting'>
        <h3>Rating</h3>
        <select className='option-tab' onChange={(e) => onSortRatingChange(e.target.value)}>
          <option value="rating_asc">Low to High</option>
          <option value="rating_desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
