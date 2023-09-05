import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { JwtPayload } from "jwt-decode";
import "font-awesome/css/font-awesome.min.css";
import "./styles/Navigation.css"; // Your custom CSS can still be used
import jwtDecode from "jwt-decode";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOwner, setIsOwner] = useState(false); // New state to check if owner

  useEffect(() => {
    // Fetch the token from localStorage
    const token = localStorage.getItem("token");

    if (token && typeof token === "string") {
      const decodedToken: JwtPayload = jwtDecode(token);

      const currTime = Math.floor(Date.now() / 1000);

      if (decodedToken.exp && decodedToken.exp > currTime) {
        setIsOwner(true);
      }
    }
  }, []); // Empty dependency array ensures this runs once when the component mounts

  //Logout Handler, changes state and erases token from storage.
  const handleLogout = () => {
    setIsOwner(false);
    localStorage.removeItem("token");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header-container">
      <header>
        <nav className="navbar navbar-expand-lg  ps-5">
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
          <div
            className={`collapse navbar-collapse justify-content-center ${
              isOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav topBottomBordersOut">
              <li className="nav-item">
                <Link className="nav-link px-3 text-light" to="/">
                  <i className="fa fa-home"> Home</i>
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

              {/* Display Add New Recipe and Add New Article links only for the owner */}
              {isOwner && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link px-3 text-light" to="/add-recipe">
                      <i className="fa fa-plus-circle"></i> Add New Recipe
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link px-3 text-light"
                      to="/add-article"
                    >
                      <i className="fa fa-plus-circle"></i> Add New Article
                    </Link>
                  </li>
                  <Link to="/admin-login">
                    <button
                      className="btn bg-secondary bg-gradient text-white "
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;
