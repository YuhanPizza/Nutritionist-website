import React from 'react';
import Navigation from './Navigation';
function About() {
  return (
    <div>
      <Navigation />
      <div className="container mt-5">
  <div className="card mb-5">
    <div className="card-body">
      {/* Introduction */}
      <section className="mt-2 mb-2">
        <h2 className="text-center">About Candace</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </section>

      {/* Details */}
      <section className="mb-2">
        <div className="row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Placeholder" className="img-fluid" />
          </div>
          <div className="col-md-8">
            <h3 className="text-center">Details</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </section>
      </div>
      </div>

      {/* Contact Form */}
      <section className="mt-4 d-flex justify-content-center" style={{ paddingBottom: '50px' }}>
        <div className="card w-50">
          <div className="card-body">
            <h3 className="text-center">Contact Me</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows={4} placeholder="Enter your message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  </div>
  );
}

export default About;