import React from 'react'; // Import react for front end
import Navbar from "./navbar"
import Home from "./pages/home"
import About from "./pages/about"
import Contact from './pages/contact';
import Clothing from './pages/clothing';
import Furniture from './pages/furniture';
import Technology from './pages/tech';



import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
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
  )
}

export default App