import { Link, useMatch, useResolvedPath } from "react-router-dom"
import search_icon_dark from '../src/assets/search-b.png';
import search_icon_light from '../src/assets/search-w.png';
import toggle_light from '../src/assets/night.png';
import toggle_dark from '../src/assets/day.png';
import { BsCart3 } from "react-icons/bs";
import React, {useState} from "react";

export default function Navbar({
  theme, 
  setTheme

}) {
  const productList = ["pants", "shirt", "shoes", "tech"]
  const [products, setProducts] = useState(productList);
  const [searchVal, setSearchVal] = useState("");
  function handleSearchClick() {
    if (searchVal === "") { setProducts(productList); return; }
    const filterBySearch = productList.filter((item) => {
      if (item.toLocaleLowerCase()
          .includes(searchVal.toLocaleLowerCase())) { return item; }
    })
    setProducts(filterBySearch)
  }


  const toggle_mode = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        E-Market-Trove
      </Link>
      <ul>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact Us</CustomLink>
        <CustomLink to="/furniture">Furniture</CustomLink>
        <CustomLink to="/tech">Technology</CustomLink>
        <CustomLink to="/clothing">Clothing</CustomLink>



      </ul>
      <div className="search-box">
    <input 
    onChange={e => setSearchVal(e.target.value)}
    type="text" 
    placeholder="Search"
    />
    <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="" />
    
    </div>
    {/* Shopping Cart */}
    <div className="shopping-cart-logo">
        < BsCart3 size={24}/>
        {/* Add shopping cart functionality here */}
    </div>
    <div>
    <img onClick={()=>{toggle_mode()}} src={theme === 'light' ? toggle_light : toggle_dark} alt="" className='toggle-icon'/>

    </div>
    
    </nav>

  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}