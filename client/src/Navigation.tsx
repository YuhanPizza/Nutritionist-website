import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
import "./styles/Navigation.css"; // Your custom CSS can still be used

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
            <i className="fa fa-cutlery"></i> FlavourOfHealth
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
          <div className={`collapse navbar-collapse justify-content-center ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav topBottomBordersOut">
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/">
                  <i className="fa fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/about">
                  <i className="fa fa-info-circle"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/recipes">
                <i className="fa fa-book"></i> Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/nutrition">
                  <i className="fa fa-apple"></i> Nutrition
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/services">
                  <i className="fa fa-bell"></i> Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/add-recipe">
                  <i className="fa fa-plus-circle"></i> Add New Recipe
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/add-article">
                  <i className="fa fa-plus-circle"></i> Add New Article
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