import React, { useState, useEffect, useCallback } from 'react';

import './App.css';
import ProductList from './ProductList';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();
      const productArr = [...data.products];
      setProducts(productArr);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchDataHandler();
  }, [fetchDataHandler]);

  return (
    <div className="app-container">
      <header className="App-header">
        <ProductList products={products} />
      </header>
    </div>
  );
}

export default App;
