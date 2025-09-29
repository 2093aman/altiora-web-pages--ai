// src/App.jsx
import React, { useState } from 'react';
import HomePage from './Pages/Home.jsx';
import Web3Page from './Pages/Web3/Web3.jsx';
import Web2Page from './Pages/Web2/Web2.jsx';
import AIPage from './Pages/AI/AIPage.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Chatbot from './Components/Chatbot.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('web3'); // start on Web3

  const renderPage = () => {
    switch (currentPage) {
      case 'web3': return <Web3Page />;
      case 'web2': return <Web2Page />;
      case 'ai':   return <AIPage />;
      case 'home': return <HomePage />;
      default:     return <Web3Page />; // default to Web3
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-grow-1">{renderPage()}</main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Chatbot />
    </div>
  );
}
