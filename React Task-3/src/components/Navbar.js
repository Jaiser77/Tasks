import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top p-3">
      <div className="container-fluid">
        <a className="navbar-brand text-light fw-bold" href="#"><h3>GymFinity</h3></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"> {/* Add class for the collapsible container */}
          <ul className="navbar-nav  mx-auto justify-content-center">
            <li className="nav-item">
              <Link to="#home" smooth className="nav-link active text-light" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="#aboutus" smooth className="nav-link active text-light">About</Link>
            </li>
            
            <li className="nav-item">
              <Link to="#benefits" smooth className="nav-link active text-light">Benefits</Link>
            </li>
            <li className="nav-item">
              <Link to="#contact" smooth className="nav-link active text-light">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
