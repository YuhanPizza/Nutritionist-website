import { Link } from "react-router-dom";
import "./styles/Navigation.css";

function Navigation() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ps-5">
          <Link className="navbar-brand" to="/">
            FlavourOfHealth
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav topBottomBordersOut">
              <li className="nav-item">
                <Link className="nav-link px-3" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/recipes">
                  Recipes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/nutrition">
                  Nutrition
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-3" to="/book-online">
                  Book Online
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
