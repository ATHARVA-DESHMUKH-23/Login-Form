// src/components/SortOptions.jsx
import React from 'react';

const SortOptions = ({ onSortChange }) => {
  return (
    <div className="sort-options">
      <h2>Sort By</h2>
      <select onChange={(e) => onSortChange(e.target.value)}>
        <option value="price_asc">Price: Low to High</option>
        <option value="price_desc">Price: High to Low</option>
        <option value="rating_asc">Rating: Low to High</option>
        <option value="rating_desc">Rating: High to Low</option>
      </select>
    </div>
  );
};

export default SortOptions;
