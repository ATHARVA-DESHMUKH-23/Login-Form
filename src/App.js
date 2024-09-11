// src/App.js
import React from 'react';
import ProductList from './components/Productlist';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>eCommerce Store</h1>
      <ProductList />
    </div>
  );
};

export default App;
