// src/App.jsx
import React, { useEffect, useState } from 'react';
import HomePage from './Pages/Home.jsx';
import Web3Page from './Pages/Web3/Web3.jsx';
import Web2Page from './Pages/Web2/Web2.jsx';
import AIPage from './Pages/AI/AIPage.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import Chatbot from './Components/Chatbot.jsx';

const ALLOWED = ['web3', 'web2', 'ai', 'home'];

export default function App() {
  const [currentPage, setCurrentPage] = useState('ai'); // default = AI

  // First load: honor hash if valid; otherwise force #ai
  useEffect(() => {
    const initial = (window.location.hash || '').replace('#', '');
    if (ALLOWED.includes(initial)) {
      setCurrentPage(initial);
    } else {
      window.location.hash = 'ai';
      setCurrentPage('ai');
    }
  }, []);

  // Keep URL hash synced with state (so direct links/back/forward are neat)
  useEffect(() => {
    if (window.location.hash.replace('#', '') !== currentPage) {
      window.location.hash = currentPage;
    }
  }, [currentPage]);

  // React to manual hash changes (back/forward or user edits)
  useEffect(() => {
    const onHashChange = () => {
      const page = (window.location.hash || '').replace('#', '');
      if (ALLOWED.includes(page)) setCurrentPage(page);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'web3': return <Web3Page />;
      case 'web2': return <Web2Page />;
      case 'ai':   return <AIPage />;
      case 'home': return <HomePage />;
      default:     return <AIPage />; // safe fallback
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
