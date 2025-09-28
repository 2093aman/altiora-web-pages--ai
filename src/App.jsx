import React, { useState } from 'react';
import HomePage from './Pages/Home.jsx';
import Web3Page from './Pages/Web3/Web3.jsx';
import Web2Page from './Pages/Web2/Web2.jsx';
import Navbar from './Components/Navbar.jsx';

// Placeholder component for pages that aren't implemented yet
const PlaceholderPage = ({ title }) => (
  <div style={{ backgroundColor: '#060620', minHeight: '100vh', color: '#ffffff' }}>
    <div className="container py-5">
      <div className="text-center">
        <h1 className="display-4 fw-bold mb-4">{title}</h1>
        <p className="lead">This page is coming soon!</p>
      </div>
    </div>
  </div>
);

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage />;
      case 'web3':
        return <Web3Page />;
      case 'web2':
        return <Web2Page />;
      case 'ai':
        return <PlaceholderPage title="AI" />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default App;