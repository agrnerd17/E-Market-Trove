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


const App = () => (
    <div className="app">
        <h1>Home</h1>
      <header>
        <div className="logo-search"> {/* used to style header, connects with CSS class */}
          <input type="text" placeholder="Search..." /> {/* placerholder search bar for now */}
        </div>
      </header>
      <main className="main-content"> {/* class containing GUI components */}
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
  

export default function Home() {
   return App();
}
