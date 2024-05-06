import '../styles.css'; // Import style settings from one directory above

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

// Map out product information, and showcase it 
const ProductList = ({ products, showNamesOnly }) => ( // declare list component
    <div className="product-list"> {/* contains CSS class info */}
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
    /*   const inventory = [ // list of current inventory, currently hard-coded for simplicity ----------------------------------------
        { id: 1, name: 'pants', price: 20, imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'shirts', price: 25, imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'shoes', price: 30, imageUrl: 'https://via.placeholder.com/150' },
    ];
    const [filteredProducts, setFilteredProducts] = useState([]); // extract filtered word and update list
    const [input, setSearchVal] = useState(""); // store input to search
    const [showNamesOnly, setShowNamesOnly] = useState(false); // define state to show names only

    // Perform search when clicked
    function handleSearch() {
        if (input === "") { // show all inventory if search input is empty
            setFilteredProducts(inventory);
            setShowNamesOnly(false); // reset to show full details 
            return;
        }
        const filterBySearch = inventory.filter(item => // filter inventory based on search input
            item.name.toLowerCase().includes(input.toLowerCase())
        );
        setFilteredProducts(filterBySearch); // update filtered products
        setShowNamesOnly(true); // show names only when searched
    }

    // Function to detect key press
    function handleKeyPress(event) {
        if (event.key === 'Enter') { // search once enter is pressed
            handleSearch(); // call search function
        }
    } 
    <header>
                <div className="logo-search">
                    <div className="logo">
                        <button onClick={handleSearch}><BsCart3 size={24} /></button>
                    </div>
                    <input // Search bar with key detection 
                        type="text"
                        placeholder="Search..."
                        value={input}
                        onChange={e => setSearchVal(e.target.value)}
                        onKeyDown={handleKeyPress} // call key handling function, after enter is pressed 
                    />
                </div>
                <ProductList products={filteredProducts} showNamesOnly={showNamesOnly} />
            </header> 
    */
  

    return ( // Frontend for homepage
        <div className="app">
            <h1>Home</h1>
            
              
          
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
