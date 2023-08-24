import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar " style={{boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}>
      <div className='container'>
      <a className="navbar-brand" href="#" style={{color:'white', fontWeight:'600'}}><h3>TamilNadu Tourism</h3></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Places To Visit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Best Time To Visit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Packages</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Destination</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" style={{color:'white', fontWeight:'600'}}>Food</a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
