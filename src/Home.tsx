import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">FlavourOfHealth</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/recipes">Recipes</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/nutrition">Nutrition</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/book-online">Book Online</Link></li>
            </ul>
          </div>
        </nav>
      </header>
      <h2>Hi I'm Candace, Welcome to my Website</h2>
      <section>
        <h3>Featured Recipes</h3>
        {/* Display featured recipes here */}
      </section>
      <section>
        <h3>Nutrition Articles</h3>
        {/* Display nutrition articles here */}
      </section>
      <section>
        <h3>Main Course Recipes</h3>
        {/* Display main course recipes here */}
      </section>
      <section>
        <h3>About Me</h3>
        <p>A brief intro of the nutritionist</p>
        {/* Link to detailed About Me page */}
      </section>
      {/* Add Social Media Integration or other additional content as needed */}
    </div>
  );
}

export default Home;