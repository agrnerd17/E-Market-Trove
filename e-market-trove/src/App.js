import './App.css'; // Import in style settings
import React from 'react'; // Import react for front end
import Navbar from "./navbar"
import Product from "./pages/products"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from './pages/contact';
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </>
  )
}

export default App