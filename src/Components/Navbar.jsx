import React from 'react'

const Navbar = ({ currentPage, setCurrentPage }) => (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#060615' }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#" style={{ fontSize: '1.5rem', color: '#ffffff' }}>
          ALTIORA INFOTECH
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
                href="#"
                onClick={() => setCurrentPage('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'web3' ? 'active' : ''}`}
                href="#"
                onClick={() => setCurrentPage('web3')}
              >
                Web3
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'web2' ? 'active' : ''}`}
                href="#"
                onClick={() => setCurrentPage('web2')}
              >
                Web2
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${currentPage === 'ai' ? 'active' : ''}`}
                href="#"
                onClick={() => setCurrentPage('ai')}
              >
                AI
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

export default Navbar;