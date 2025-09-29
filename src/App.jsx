import React, { useState } from 'react';
import HomePage from './Pages/Home.jsx';
import Web3Page from './Pages/Web3/Web3.jsx';
import Web2Page from './Pages/Web2/Web2.jsx';
import AIPage from './Pages/AI/AIPage.jsx';
import Navbar from './Components/Navbar.jsx';
import Chatbot from './Components/Chatbot.jsx';

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
        return <AIPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Chatbot />
    </div>
  );
};

export default App;