
import React, { useEffect, useState } from 'react';
import './PageStyles.css';

const Home = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Fetch error:', error));
  }, []);

  return (
    <div className="page-container fade-in">
      <h1>Welcome to Our Store</h1>
      <p>This app lets you explore themes and shop in style!</p>

      <button className="theme-button">Click Me</button>

      <div className="product-list">
        {products.slice(0, 6).map((item) => (
          <div key={item.id} className="product-card">
            <h4>{item.title}</h4>
            <p>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
