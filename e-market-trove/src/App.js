import './App.css'; // Import in style settings
import React from 'react'; // Import react for front end
import Navbar from './navbar';
import Products from './pages/products';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';

import { Route, Routes } from 'react-router-dom';



// Show featured product information
const featuredProducts = [
  { id: 1, name: 'Featured Product 1', price: 50, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Featured Product 2', price: 60, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Featured Product 3', price: 70, imageUrl: 'https://via.placeholder.com/150' },
];

// Show production information for sale
const productsForSale = [
  { id: 4, name: 'Product for Sale 1', price: 30, imageUrl: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product for Sale 2', price: 40, imageUrl: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product for Sale 3', price: 50, imageUrl: 'https://via.placeholder.com/150' },
];

// Showcases the product, displays button for interaction
const Product = ({ product }) => (
  <div className="product">
    <img src={product.imageUrl} alt={product.name} />
    <div className="product-details">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  </div>
);

// Map out product information
const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map(product => (
      <Product key={product.id} product={product} />
    ))}
  </div>
);

// Main website function
function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}/>

      </Routes>
    </div>
    </>
  );
};



export default App; // alows other files to read App.js function