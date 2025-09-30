// src/Components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import logo from '../icons/logo.png'; // <-- import logo from src/

const NAV = [
  { label: 'About Us',    href: 'https://www.altiorainfotech.com/about' },
  { label: 'Services',    href: 'https://www.altiorainfotech.com/developers' },
  { label: 'Blog',        href: 'https://www.altiorainfotech.com/blog' },
  { label: 'Contact Us',  href: 'https://www.altiorainfotech.com/contact' },
];

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [open, setOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  // Close mobile menu on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const goHome = (e) => {
    e.preventDefault();
    setCurrentPage?.('home');
    setOpen(false);
  };

  return (
    <header className="sticky-top" style={{ zIndex: 1040 }}>
      <div
        className="position-relative border-bottom"
        style={{
          borderColor: 'rgba(255,255,255,0.10)',
          background: 'rgba(0,0,0,0.55)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
        }}
      >
        {/* hairline glow */}
        <div
          className="position-absolute start-0 end-0"
          style={{
            bottom: -1,
            height: 1,
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.20) 50%, rgba(255,255,255,0) 100%)',
            pointerEvents: 'none',
          }}
          aria-hidden
        />

        <div className="container" style={{ maxWidth: 1120 }}>
          <div className="d-flex align-items-center justify-content-between gap-2" style={{ height: 61 }}>
            {/* Brand */}
            <a
              href="https://www.altiorainfotech.com"
              aria-label="Home"
              onClick={goHome}
              className="d-inline-flex align-items-center rounded"
            >
              {logoOk ? (
               
                <img
                  src={logo}
                  alt="Logo"
                  width={60}
                  height={60}
                  className="rounded flex-shrink-0"
                  onError={() => setLogoOk(false)}
                />
              
              ) : (
                <span
                  className="d-grid rounded text-black fw-bold"
                  style={{
                    width: 56,
                    height: 56,
                    placeItems: 'center',
                    background: '#fff',
                    fontSize: 16,
                  }}
                >
                  ●
                </span>
              )}
            </a>

            {/* Desktop nav (external links) */}
            <nav className="d-none d-md-flex align-items-center gap-1" style={{ fontSize: 14, fontWeight: 500 }}>
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="position-relative px-3 py-2 rounded text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#d1d5db' }} // gray-300
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#d1d5db')}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right CTA (empty to match original) */}
            <div className="d-none d-md-flex"></div>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="d-inline-flex d-md-none align-items-center justify-content-center rounded p-2"
              onClick={() => setOpen((v) => !v)}
              style={{ color: '#000' }} // gray-200
            >
              {open ? (
                // X icon
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </svg>
              ) : (
                // Hamburger icon
                <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          id="mobile-menu"
          className="d-md-none overflow-hidden"
          style={{
            maxHeight: open ? 384 : 0,
            opacity: open ? 1 : 0,
            transition: 'max-height 300ms ease-out, opacity 300ms ease-out',
          }}
        >
          <div className="container pb-3" style={{ maxWidth: 1120 }}>
            <nav className="d-flex flex-column gap-1">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded px-3 py-2 text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 14,
                    color: '#d1d5db',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#d1d5db';
                  }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
