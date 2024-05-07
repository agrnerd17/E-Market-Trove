import React, { useEffect, useState } from 'react'; // Import react for front end
import Navbar from "./navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from './pages/contact';
import Clothing from './pages/clothing';
import Furniture from './pages/furniture';
import Technology from './pages/tech';
import Checkout from './pages/checkout/Checkout';

import { Route, Routes } from "react-router-dom"

function App() {
  
  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme);
  }, [theme])

  return (
    <>
      <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/checkout" element={<Checkout />} />
  



        </Routes>
      </div>
    </>
  )
}

export default App