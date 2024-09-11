// src/api/api.js
const API_URL = 'https://dummyjson.com/products/';

export const fetchProducts = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products; // Adjusted to match the data structure
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};
