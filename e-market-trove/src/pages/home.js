import '../styles.css'; // Import style settings from one directory above
import { BsCart3 } from "react-icons/bs"; // Import shopping cart icon
import React, { useState } from 'react'; // Allow React to manage lists

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
const Product = ({ product }) => ( // declare product component
    <div className="product"> {/* contains CSS class info */}
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
        {products.map(product => ( // products wil be mapped to a list
            <Product key={product.id} product={product} />
        ))}
    </div>
);

// Main home display function
const Home = () => {
    const inventory = ["pants", "shirts", "shoes"]; // list of current inventory, currently hard-coded for simplicity
    const [filteredProducts, setFilteredProducts] = useState(inventory); // extract filtered word from current and update new list
    const [input, setSearchVal] = useState(""); // store input to search

    // Perform search when clicked
    function handleSearch() {
        if (input === "") { // find marching input value in inventory
            setFilteredProducts(inventory); 
            return;
        }
        const filterBySearch = inventory.filter(item => // convert input to lowercase for better matches
            item.toLowerCase().includes(input.toLowerCase()) 
        );
        setFilteredProducts(filterBySearch); // update new filter list
    }

    // Function to detect key press
    function handleKeyPress(event) {
        if (event.key === 'Enter') { // search once enter is pressed
            handleSearch();
        }
    }

    return ( // Frontend for home
        <div className="app">
            <h1>Home</h1>
            <header>
                <div className="logo-search"> {/* used to style header, connects with CSS class */}
                    <div className="logo">  {/* logo class */}
                    <button onClick={handleSearch}><BsCart3 size={24} /></button> {/* cart icon with search, size 24 */}
                    </div>
                    <input // Search bar with key detection 
                        type="text" 
                        placeholder="Search..." 
                        value={input}
                        onChange={e => setSearchVal(e.target.value)}
                        onKeyDown={handleKeyPress} // call the key handling function, once enter is pressed 
                    />
                </div>
                <ProductList products={filteredProducts} /> {/* display filtered products after search */}
            </header> {/* Class containing GUI components */}
            <main className="main-content"> 
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <ProductList products={featuredProducts} />
                </section>
                <section className="products-for-sale">
                    <h2>Products for Sale</h2>
                    <ProductList products={productsForSale} />
                </section>
            </main>
            <footer>
                <p>&copy; 2024 E-Market Trove</p> {/* copyright footer */}
            </footer>
        </div>
    );
};

export default Home;  // export home to other files
