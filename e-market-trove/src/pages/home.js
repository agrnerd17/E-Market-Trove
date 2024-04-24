import '../styles.css';
import { BsCart3 } from "react-icons/bs";
import React, { useState } from 'react';

const featuredProducts = [
    { id: 1, name: 'Featured Product 1', price: 50, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Featured Product 2', price: 60, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Featured Product 3', price: 70, imageUrl: 'https://via.placeholder.com/150' },
];

const productsForSale = [
    { id: 4, name: 'Product for Sale 1', price: 30, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product for Sale 2', price: 40, imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product for Sale 3', price: 50, imageUrl: 'https://via.placeholder.com/150' },
];

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

const ProductList = ({ products }) => (
    <div className="product-list">
        {products.map(product => (
            <Product key={product.id} product={product} />
        ))}
    </div>
);

const Home = () => { 
    const inventory = [
        { name: "pants" },
        { name: "shirts" },
        { name: "shoes" }
    ]; 

    const [filteredInventory, setFilteredInventory] = useState(inventory);
    const [filteredFeaturedProducts, setFilteredFeaturedProducts] = useState(featuredProducts);
    const [filteredProductsForSale, setFilteredProductsForSale] = useState(productsForSale);
    const [input, setInput] = useState("");

    function handleSearch() {
        if (input === "") {
            setFilteredInventory([]);
            setFilteredFeaturedProducts([]);
            setFilteredProductsForSale([]);
            return;
        }
    
        const filterBySearchInventory = inventory.filter(item =>
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredInventory(filterBySearchInventory);
    
        const filterBySearchFeaturedProducts = featuredProducts.filter(product =>
            product.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredFeaturedProducts(filterBySearchFeaturedProducts);
    
        const filterBySearchProductsForSale = productsForSale.filter(product =>
            product.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredProductsForSale(filterBySearchProductsForSale);
    }
    
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="app">
            <h1>Home</h1>
            <header>
                <div className="logo-search">
                    <div className="logo">
                        <button onClick={handleSearch}><BsCart3 size={24} /></button>
                    </div>
                    <input 
                        type="text"
                        placeholder="Search..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />
                </div>
            </header>
            <main className="main-content">
                <section className="search-results">
                    <ProductList products={filteredInventory} />
                </section>
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <ProductList products={filteredFeaturedProducts} />
                </section>
                <section className="products-for-sale">
                    <h2>Products for Sale</h2>
                    <ProductList products={filteredProductsForSale} />
                </section>
            </main>
            <footer>
                <p>&copy; 2024 E-Market Trove</p>
            </footer>
        </div>
    );
};

export default Home;
