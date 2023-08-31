import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/Navigation.css"; // You can still use this for any custom styles you may have

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ps-5">
          <Link className="navbar-brand text-warning" to="/">
            FlavourOfHealth
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav topBottomBordersOut">
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/recipes">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/nutrition">
                  Nutrition
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/book-online">
                  Book Online
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/add-recipe">
                  Add New Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/add-article">
                  Add New Article
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;