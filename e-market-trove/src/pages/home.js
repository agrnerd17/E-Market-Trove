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
const ProductList = ({ products, showNamesOnly }) => (
    <div className="product-list">
        {products.map(product => (
            <div key={product.id} className="product">
                {showNamesOnly ? ( 
                    <h3>{product.name}</h3> // render just the name
                ) : (
                    <div>
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p>${product.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        ))}
    </div>
);

// Main home display function
const Home = () => {
    const inventory = [ // list of current inventory, currently hard-coded for simplicity ----------------------------------------
        { id: 1, name: 'pants', price: 20, imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'shirts', price: 25, imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'shoes', price: 30, imageUrl: 'https://via.placeholder.com/150' },
    ];
    const [filteredProducts, setFilteredProducts] = useState([]); // extract filtered word and update list
    const [input, setSearchVal] = useState(""); // store input to search

    // Perform search when clicked
    function handleSearch() {
        if (input === "") { // show all inventory if search input is empty
            setFilteredProducts(inventory);
            return;
        }
        const filterBySearch = inventory.filter(item => // filter inventory based on search input
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredProducts(filterBySearch); // update filtered products
    }

    // Function to detect key press
    function handleKeyPress(event) {
        if (event.key === 'Enter') { // search once enter is pressed
            handleSearch(); // call search function
        }
    }

    const showNamesOnly = input !== ""; // once input is detected search only by name, not product ---------------------------

    return ( // Frontend for homepage
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
                        onKeyDown={handleKeyPress} // call key handling function, after enter is pressed 
                    />
                </div>
                <ProductList products={filteredProducts} showNamesOnly={showNamesOnly} /> {/* display filtered products after search */}
            </header> {/* Class containing GUI components */}
            <main className="main-content">
                <section className="featured-products">
                    <h2>Featured Products</h2>
                    <ProductList products={featuredProducts} showNamesOnly={false} /> {/* always show full details for featured products */}
                </section>
                <section className="products-for-sale">
                    <h2>Products for Sale</h2>
                    <ProductList products={productsForSale} showNamesOnly={false} /> {/* always show full details for products for sale */}
                </section>
            </main>
            <footer>
                <p>&copy; 2024 E-Market Trove</p> {/* copyright footer */}
            </footer>
        </div>
    );
};
export default Home;  // export home to other files
