import React, { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {

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
    </nav>
  );
}

function CustomLink({ to, children}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
