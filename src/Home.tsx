import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Navigation />
      <div className="container mt-4">
        <div className="row justify-content-center">

          <div className="col-md-7"> {/* Smaller width for single column */}
            <h2>Hi I'm Candace, Welcome to my Website</h2>
          
          <Link to="/recipes" className="text-decoration-none">
            <div className="card mb-4 mt-4" style={{cursor:'pointer'}}>
              <div className="card-body text-center">
                <h3>Featured Recipes</h3>
                {/* Display featured recipes here */}
              </div>
            </div>
          </Link>

          <Link to="/nutrition" className="text-decoration-none">
            <div className="card mb-4" style={{cursor: 'pointer'}}>
              <div className="card-body text-center">
                <h3>Nutrition Articles</h3>
                {/* Display nutrition articles here */}
              </div>
            </div>
          </Link>

            <Link to="/about" className="text-decoration-none">
              <div className="card mb-4" style={{ cursor: 'pointer' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4 text-center">
                      <img src="https://via.placeholder.com/150" alt="Placeholder" className="img-fluid mb-3" />
                    </div>
                    <div className="col-md-8">
                      <h3>About Me</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      {/* Link to detailed About Me page */}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          {/* Add Social Media Integration or other additional content as needed */}
        </div>
      </div>
    </div>
  );
}


export default Home;