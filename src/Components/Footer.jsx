// src/Components/Footer.jsx
import React, { useMemo } from 'react';
import logo from '../icons/logo.png'; // adjust path if your logo lives elsewhere

const socials = [
  {
    name: 'x',
    href: 'https://x.com/altiorainfotech',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path fill="currentColor" d="M3,3l7.5,9.1L3.7,21h2.4l5.6-6.5L16.8,21H21l-7.8-9.3L20.3,3h-2.4l-5.1,6L7.2,3H3z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/altiora-infotech/posts/?feedView=all',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.8v2h.1c.5-.9 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V23h-4v-6.5c0-1.6 0-3.7-2.3-3.7s-2.7 1.8-2.7 3.6V23h-4V8.5z"
        />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/people/Altiora-Infotech/61578624501721/?mibextid=wwXIfr',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.99 3.66 9.12 8.44 9.86v-6.99H8.07v-2.87h2.41V9.83c0-2.39 1.43-3.7 3.61-3.7 1.05 0 2.15.19 2.15.19v2.37h-1.21c-1.2 0-1.58.75-1.58 1.52v1.82h2.69l-.43 2.87h-2.26v6.99c4.78-.74 8.44-4.87 8.44-9.86 0-5.5-4.46-9.96-9.96-9.96z"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/altiora.infotech/',
    svg: (
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.38-.88a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25z"
        />
      </svg>
    ),
  },
];

const columns = [
  { title: 'Products', links: ['Altiora Core', 'Payments & Billing', 'Identity & Auth', 'Observability'] },
  { title: 'Services', links: ['Web3 & Blockchain', 'AI & Data', 'Web 2.0'] },
  { title: 'Company', links: ['About', 'Careers', 'Contact'] },
  { title: 'Resources', links: ['Docs', 'Blog', 'Changelog', 'Support'] },
];

const tickerItems = [
  'Account Abstraction (ERC-4337)',
  'ZK Proofs',
  'Smart Wallets',
  'L2 Rollups',
  'LLM Agents',
  'RAG Pipelines',
  'Realtime AI',
  'Edge Functions',
];

// normalized labels → hrefs
const LINK_MAP = {
  about: '/about',
  careers: 'https://www.linkedin.com/company/altiora-infotech/jobs/',
  career: '/careers',
  contact: '/contact',
  blog: '/blog',
  'web3 & blockchain': '/developers',
  'ai & data': '/developers',
  'web 2.0': '/developers',
  'mobile & web': '/developers',
};

const hrefFor = (raw) => LINK_MAP[raw.trim().toLowerCase()] ?? null;

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const ticker = useMemo(() => [...tickerItems, ...tickerItems], []);

  return (
    <footer className="text-light pt-0" style={{ backgroundColor: '#000' }}>
      {/* gradient top veil */}
      <div className="position-relative overflow-hidden" style={{ height: 56 }}>
        <div
          className="position-absolute top-0 start-0 end-0 h-100"
          aria-hidden
          style={{
            pointerEvents: 'none',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 100%)',
          }}
        />
        <div
          className="position-absolute top-0 start-0 end-0"
          aria-hidden
          style={{
            height: 1,
            background:
              'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.1) 50%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      <div className="container px-3 px-md-4">
        {/* socials + brand + columns */}
        <div className="row gy-5 pb-4 border-bottom border-white-10">
          {/* brand */}
          <div className="col-md-5">
            <a href="/" aria-label="Altiora Infotech — home" className="d-inline-flex align-items-center">
              <img
                src={logo}  // imported logo from src/
                alt="Altiora Infotech"
                width="56"
                height="56"
                className="rounded"
                loading="eager"
              />
            </a>

            <p className="mt-2 small text-white-50 mb-3">
              Engineering modern experiences across Web, Mobile, AI, and Blockchain.
              We design for trust, scale, and measurable impact.
            </p>

            <div className="d-flex align-items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  target="_blank"
                  rel="noreferrer"
                  className="d-inline-flex align-items-center justify-content-center rounded-circle"
                  title={s.name}
                  style={{
                    width: 36,
                    height: 36,
                    border: '1px solid rgba(255,255,255,0.15)',
                    background: 'rgba(255,255,255,0.04)',
                  }}
                >
                  <span className="text-white">{s.svg}</span>
                </a>
              ))}
            </div>
          </div>

          {/* columns */}
          <div className="col-md-7">
            <div className="row">
              {columns.map((col) => (
                <div className="col-6 col-sm-6 col-md-3 mb-3" key={col.title}>
                  <div className="text-white fw-semibold small">{col.title}</div>
                  <ul className="list-unstyled mt-2 mb-0">
                    {col.links.map((label) => {
                      const href = hrefFor(label);
                      return (
                        <li key={label} className="mb-2">
                          {href ? (
                            <a href={href} className="small text-light text-opacity-75 text-decoration-none">
                              {label}
                            </a>
                          ) : (
                            <span
                              role="link"
                              aria-disabled="true"
                              className="small text-light text-opacity-50"
                              title="Coming soon"
                            >
                              {label}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ticker */}
        <div className="position-relative py-3 border-bottom border-white-10">
          <div
            className="position-absolute top-0 start-0 end-0"
            style={{
              height: 1,
              background:
                'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.1) 50%, rgba(255,255,255,0) 100%)',
            }}
            aria-hidden
          />
          <div className="overflow-hidden">
            <div className="d-flex gap-4 ticker-track">
              {ticker.map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="text-uppercase text-white-50"
                  style={{ fontSize: 12, letterSpacing: '0.14em', whiteSpace: 'nowrap' }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 py-4">
          <p className="mb-0 small text-white-50">© {year} Altiora. All rights reserved.</p>
          <div className="d-flex flex-wrap align-items-center gap-3">
            <a href="/privacy" className="small text-white-50 text-decoration-none">
              Privacy
            </a>
            <a href="/terms" className="small text-white-50 text-decoration-none">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* local CSS */}
      <style>{`
        .border-white-10 { border-color: rgba(255,255,255,0.10) !important; }
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          will-change: transform;
          animation: ticker 28s linear infinite;
        }
      `}</style>
    </footer>
  );
}
