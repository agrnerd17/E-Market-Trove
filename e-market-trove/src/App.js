//import './App.css';
import React, { useState } from 'react';
import Navbar from "./navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from './pages/contact';
import Clothing from './pages/clothing';
import Furniture from './pages/furniture';
import Technology from './pages/tech';
import { Route, Routes } from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/tech" element={<Technology />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
