// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api/api';
import ProductItem from './ProductItem';
import Sidebar from './Sidebar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortPriceOption, setSortPriceOption] = useState(null);
  const [sortRatingOption, setSortRatingOption] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const productsData = await fetchProducts();
      setProducts(productsData);
      setFilteredProducts(productsData);

      // Extract unique categories
      const uniqueCategories = [...new Set(productsData.map(product => product.category))];
      setCategories(uniqueCategories);
    };

    getProducts();
  }, []);

  useEffect(() => {
    let sortedProducts = [...filteredProducts];
    
    // Apply sorting by price
    if (sortPriceOption) {
      sortedProducts.sort((a, b) => {
        if (sortPriceOption === 'price_asc') {
          return a.price - b.price;
        }
        return b.price - a.price;
      });
    }

    // Apply sorting by rating
    if (sortRatingOption) {
      sortedProducts.sort((a, b) => {
        if (sortRatingOption === 'rating_asc') {
          return a.rating - b.rating;
        }
        return b.rating - a.rating;
      });
    }

    setFilteredProducts(sortedProducts);
  }, [sortPriceOption, sortRatingOption]);

  useEffect(() => {
    let filtered = [...products];
    
    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory]);

  return (
    <div className="product-list-container">
      <Sidebar
        categories={categories}
        onCategoryChange={setSelectedCategory}
        onSortPriceChange={setSortPriceOption}
        onSortRatingChange={setSortRatingOption}
      />
      <div className="product-list">
        <div className="products">
          {filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
