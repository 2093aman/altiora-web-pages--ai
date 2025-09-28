import React from 'react'
import './Web3.css';

const Web3Page = () => (
    <div style={{ backgroundColor: '#060615', minHeight: '100vh', color: '#ffffff' }}>
        {/* Hero Section */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #060620 0%, #1a1a3a 100%)' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Section - First Column */}
                    <div className="col-lg-6">
                        <div className="text-center mb-5">
                            <img
                                src="/web3.jpg"
                                alt="Blockchain Innovation"
                                className="img-fluid rounded-3"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                                }}
                                onError={(e) => {
                                    // Fallback if image doesn't load
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'block';
                                }}
                            />
                            {/* Fallback content if image fails to load */}
                            <div
                                className="rounded-3 p-5 text-center"
                                style={{
                                    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                                    height: '400px',
                                    display: 'none'
                                }}
                            >
                                <i className="fas fa-cubes text-white display-1 mb-3"></i>
                                <h3 className="text-white">Blockchain Innovation</h3>
                            </div>
                        </div>
                    </div>
                    {/* Text Section - Second Column */}
                    <div className="col-lg-6">
                        <h1 className="display-3 fw-bold mb-4">
                            We launch blockchain products that make money
                            <br />
                            <span className="text-primary display-6"> From token to CEX — in 6–12 weeks with support at every stage</span>
                        </h1>
                        <p className="lead mb-4" style={{ color: '#cccccc' }}>
                            Whether you’re launching a token, developing smart contracts, or deploying a CEX — we turn your vision into revenue-driving blockchain solutions with clarity, control, and trust.
                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-warning btn-lg px-4">Start Your Web3 Journey</button>
                            <button className="btn btn-outline-light btn-lg px-4">View Portfolio</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* What We Deliver Section */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">What We Deliver</h2>
                    <p className="lead" style={{ color: '#cccccc', maxWidth: '900px', margin: '0 auto' }}>
                        The cost and timeline for a specific project depend on the technical specification and expected
                        load. Below are approximate prices and development times. For some services we already have
                        ready-made solutions that help you save budget and time, launching the project as quickly as
                        possible and at a favorable price
                    </p>
                </div>

                {/* Row 1 */}
                <div className="row g-4 mb-4">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <circle cx="24" cy="24" r="20" fill="#ffc107" opacity="0.2" />
                                        <path d="M24 8L32 16L24 24L16 16L24 8Z" fill="#ffc107" />
                                        <circle cx="24" cy="32" r="4" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">Tokenization Rails (RWA / Utility / Revenue-Share)</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Compliance-ready Contracts → investor onboarding → Payouts & analytics in 4-6
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Book a 20-min build audit to scope your token launch.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect x="8" y="12" width="32" height="24" rx="4" fill="#ffc107" opacity="0.2" />
                                        <path d="M12 16H36V20H12V16Z" fill="#ffc107" />
                                        <path d="M12 24H28V28H12V24Z" fill="#ffc107" />
                                        <circle cx="36" cy="26" r="3" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">Smart Contract Development (+ Audit Liaison)</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Solidity/Rust contracts with tests, simulations, and audit-ready reports; optional third-party audit.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Get a fixed quote and test plan this week.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect x="6" y="12" width="36" height="24" rx="6" fill="#ffc107" opacity="0.2" />
                                        <rect x="10" y="16" width="28" height="4" rx="2" fill="#ffc107" />
                                        <rect x="10" y="24" width="20" height="4" rx="2" fill="#ffc107" />
                                        <circle cx="38" cy="20" r="2" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">Account Abstraction Wallets (AA)</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Passkey/social logins, sponsored gas, recovery—Web2-simple UX on-chain.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    See a live demo and integration plan for your app.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect x="8" y="8" width="32" height="32" rx="8" fill="#ffc107" opacity="0.2" />
                                        <path d="M16 20H32V24H16V20Z" fill="#ffc107" />
                                        <circle cx="20" cy="30" r="2" fill="#ffc107" />
                                        <circle cx="28" cy="30" r="2" fill="#ffc107" />
                                        <path d="M18 14H30L28 18H20L18 14Z" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">On-Chain Payments & Settlement</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Stablecoin rails, invoicing, reconciliation dashboards, and treasury ops that cut costs.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Calculate your savings in a free payments consult.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row g-4 mb-5">
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <circle cx="24" cy="24" r="16" fill="#ffc107" opacity="0.2" />
                                        <path d="M16 24L24 16L32 24L24 32L16 24Z" fill="#ffc107" />
                                        <circle cx="24" cy="24" r="4" fill="#1a1a3a" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">DEX / Perp DEX (AMM Or Orderbook)</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Liquidity design, staking, fee switches, and governance wired for revenue—not just TVL.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Request our DEX mechanics workbook + timeline.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect x="6" y="6" width="36" height="36" rx="8" fill="#ffc107" opacity="0.2" />
                                        <path d="M12 18H36V22H12V18Z" fill="#ffc107" />
                                        <circle cx="18" cy="30" r="3" fill="#ffc107" />
                                        <circle cx="30" cy="30" r="3" fill="#ffc107" />
                                        <path d="M14 12H34V16H14V12Z" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">Centralized Exchange (Lean CEX Starter)</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Custody integrations, KYC/AML, liquidity routing, and admin ops—live in 4-6 weeks.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Get the feature matrix and compliance checklist.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <circle cx="24" cy="24" r="18" fill="#ffc107" opacity="0.2" />
                                        <path d="M18 20L30 20L28 16L20 16L18 20Z" fill="#ffc107" />
                                        <rect x="20" y="24" width="8" height="8" rx="2" fill="#ffc107" />
                                        <circle cx="16" cy="32" r="2" fill="#ffc107" />
                                        <circle cx="32" cy="32" r="2" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">DePIN & Telegram Mini-Apps</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Device/agent rewards, pools of useful work, and Telegram growth loops that actually retain.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Share your use case—leave with a 2-week pilot plan.
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div
                            className="card h-100 border border-primary p-4 delivery-card"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '15px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
                            }}
                        >
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect x="8" y="8" width="32" height="32" rx="6" fill="#ffc107" opacity="0.2" />
                                        <path d="M16 16L32 16L30 20L18 20L16 16Z" fill="#ffc107" />
                                        <rect x="20" y="24" width="8" height="8" rx="4" fill="#ffc107" />
                                        <circle cx="24" cy="34" r="2" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">NFT Programs & Loyalty</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Minting engines, gated utilities, and on-chain perks that drive repeat actions (not vanity drops).
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    See 3 program archetypes and their ROI math.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button
                        className="btn btn-primary btn-lg px-5 py-3"
                        style={{ borderRadius: '10px' }}
                    >
                        Discuss the project →
                    </button>
                </div>
            </div>
        </section>

{/* Services Section */}
<section className="py-5">
    <div className="container">
        <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Web3 Services</h2>
            <p className="lead" style={{ color: '#cccccc' }}>
                Complete blockchain solutions from smart contracts to decentralized applications
            </p>
        </div>
        <div className="row g-4">
            <div className="col-lg-4 col-md-6">
                <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                    <div className="service-icon-container mb-4">
                        <div className="service-icon-wrapper">
                            <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" fill="url(#gradient1)" opacity="0.2"/>
                                <path d="M30 35h40v5H30v-5zm0 10h40v5H30v-5zm0 10h30v5H30v-5z" fill="url(#gradient1)"/>
                                <path d="M25 25h50v50H25V25zm5 5v40h40V30H30z" fill="url(#gradient1)" stroke="url(#gradient1)" strokeWidth="1"/>
                                <circle cx="65" cy="30" r="8" fill="url(#gradient1)"/>
                                <path d="M60 27l3 3 6-6" stroke="white" strokeWidth="2" fill="none"/>
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#667eea"/>
                                        <stop offset="100%" stopColor="#764ba2"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h4 className="service-title text-white mb-3">Smart Contracts</h4>
                    <p className="service-description" style={{ color: '#cccccc' }}>
                        Develop secure, audited smart contracts that automate business processes and ensure transparency in transactions.
                    </p>
                    <div className="service-hover-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                    <div className="service-icon-container mb-4">
                        <div className="service-icon-wrapper">
                            <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" fill="url(#gradient2)" opacity="0.2"/>
                                <rect x="20" y="30" width="60" height="40" rx="5" fill="url(#gradient2)" opacity="0.3"/>
                                <rect x="25" y="35" width="50" height="30" rx="3" fill="url(#gradient2)"/>
                                <circle cx="35" cy="45" r="3" fill="white"/>
                                <circle cx="50" cy="45" r="3" fill="white"/>
                                <circle cx="65" cy="45" r="3" fill="white"/>
                                <path d="M30 55h40v3H30v-3z" fill="white"/>
                                <path d="M30 60h25v3H30v-3z" fill="white"/>
                                <defs>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f093fb"/>
                                        <stop offset="100%" stopColor="#f5576c"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h4 className="service-title text-white mb-3">DApps Development</h4>
                    <p className="service-description" style={{ color: '#cccccc' }}>
                        Build decentralized applications that run on blockchain networks, providing users with full control and ownership.
                    </p>
                    <div className="service-hover-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                    <div className="service-icon-container mb-4">
                        <div className="service-icon-wrapper">
                            <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" fill="url(#gradient3)" opacity="0.2"/>
                                <rect x="25" y="25" width="50" height="35" rx="5" fill="url(#gradient3)" opacity="0.3"/>
                                <rect x="30" y="30" width="40" height="25" rx="3" fill="url(#gradient3)"/>
                                <path d="M35 70l5-5 5 5 5-5 5 5 5-5 5 5" stroke="url(#gradient3)" strokeWidth="2" fill="none"/>
                                <circle cx="40" cy="40" r="3" fill="white"/>
                                <circle cx="50" cy="40" r="3" fill="white"/>
                                <circle cx="60" cy="40" r="3" fill="white"/>
                                <path d="M35 48h30v2H35v-2z" fill="white"/>
                                <defs>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#4facfe"/>
                                        <stop offset="100%" stopColor="#00f2fe"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h4 className="service-title text-white mb-3">NFT Solutions</h4>
                    <p className="service-description" style={{ color: '#cccccc' }}>
                        Create and launch NFT marketplaces, collections, and platforms that drive engagement and revenue.
                    </p>
                    <div className="service-hover-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                    <div className="service-icon-container mb-4">
                        <div className="service-icon-wrapper">
                            <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" fill="url(#gradient4)" opacity="0.2"/>
                                <circle cx="30" cy="40" r="12" fill="url(#gradient4)" opacity="0.3"/>
                                <circle cx="70" cy="40" r="12" fill="url(#gradient4)" opacity="0.3"/>
                                <circle cx="50" cy="65" r="12" fill="url(#gradient4)" opacity="0.3"/>
                                <path d="M38 48l12 8M62 48l-12 8M42 57l8-8M58 57l-8-8" stroke="url(#gradient4)" strokeWidth="3"/>
                                <circle cx="30" cy="40" r="6" fill="url(#gradient4)"/>
                                <circle cx="70" cy="40" r="6" fill="url(#gradient4)"/>
                                <circle cx="50" cy="65" r="6" fill="url(#gradient4)"/>
                                <defs>
                                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#fa709a"/>
                                        <stop offset="100%" stopColor="#fee140"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h4 className="service-title text-white mb-3">DeFi Platforms</h4>
                    <p className="service-description" style={{ color: '#cccccc' }}>
                        Build decentralized finance applications including DEXs, lending platforms, and yield farming solutions.
                    </p>
                    <div className="service-hover-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                    <div className="service-icon-container mb-4">
                        <div className="service-icon-wrapper">
                            <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" fill="url(#gradient5)" opacity="0.2"/>
                                <rect x="20" y="35" width="60" height="30" rx="5" fill="url(#gradient5)" opacity="0.3"/>
                                <circle cx="35" cy="50" r="8" fill="url(#gradient5)"/>
                                <circle cx="65" cy="50" r="8" fill="url(#gradient5)"/>
                                <path d="M43 50h14" stroke="url(#gradient5)" strokeWidth="4"/>
                                <path d="M25 25h50v5H25v-5z" fill="url(#gradient5)"/>
                                <path d="M25 70h50v5H25v-5z" fill="url(#gradient5)"/>
                                <circle cx="50" cy="27" r="2" fill="white"/>
                                <circle cx="50" cy="73" r="2" fill="white"/>
                                <defs>
                                    <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#a8edea"/>
                                        <stop offset="100%" stopColor="#fed6e3"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h4 className="service-title text-white mb-3">Blockchain Integration</h4>
                    <p className="service-description" style={{ color: '#cccccc' }}>
                        Integrate blockchain technology into existing systems and workflows for enhanced security and transparency.
                    </p>
                    <div className="service-hover-overlay"></div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6">
                <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                    <div className="service-icon-container mb-4">
                        <div className="service-icon-wrapper">
                            <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                <circle cx="50" cy="50" r="45" fill="url(#gradient6)" opacity="0.2"/>
                                <circle cx="50" cy="50" r="25" fill="url(#gradient6)" opacity="0.3"/>
                                <circle cx="50" cy="50" r="15" fill="url(#gradient6)"/>
                                <path d="M35 35l30 30M65 35l-30 30" stroke="white" strokeWidth="3"/>
                                <circle cx="50" cy="25" r="4" fill="url(#gradient6)"/>
                                <circle cx="75" cy="50" r="4" fill="url(#gradient6)"/>
                                <circle cx="50" cy="75" r="4" fill="url(#gradient6)"/>
                                <circle cx="25" cy="50" r="4" fill="url(#gradient6)"/>
                                <defs>
                                    <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ffecd2"/>
                                        <stop offset="100%" stopColor="#fcb69f"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <h4 className="service-title text-white mb-3">Security Audits</h4>
                    <p className="service-description" style={{ color: '#cccccc' }}>
                        Comprehensive security audits and testing to ensure your blockchain applications are secure and reliable.
                    </p>
                    <div className="service-hover-overlay"></div>
                </div>
            </div>
        </div>
    </div>
</section>

        {/* Features Section */}
        <section className="py-5" style={{ backgroundColor: '#1a1a3a' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h2 className="display-6 fw-bold mb-4">Why Choose Our Web3 Solutions?</h2>
                        <p className="mb-4" style={{ color: '#cccccc' }}>
                            Web3 is not merely a technology stack, it is a system of ownership and inclusion and freedom. We assist you in achieving alignment of governance, security, and usability for long-term success.
                        </p>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-rocket text-primary me-3 mt-1"></i>
                                    <div>
                                        <h5 className="text-white mb-2">Production Ready</h5>
                                        <p className="mb-0" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                            Deploy-ready solutions tested for security and performance
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-users text-primary me-3 mt-1"></i>
                                    <div>
                                        <h5 className="text-white mb-2">Community Focus</h5>
                                        <p className="mb-0" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                            Building for user ownership and community governance
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-code text-primary me-3 mt-1"></i>
                                    <div>
                                        <h5 className="text-white mb-2">Expert Development</h5>
                                        <p className="mb-0" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                            Experienced team with deep blockchain knowledge
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-start">
                                    <i className="fas fa-chart-line text-primary me-3 mt-1"></i>
                                    <div>
                                        <h5 className="text-white mb-2">Scalable Solutions</h5>
                                        <p className="mb-0" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                            Built to scale with your growing user base
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div
                            className="rounded-3 p-5 text-center"
                            style={{
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                height: '400px'
                            }}
                        >
                            <div className="d-flex flex-column justify-content-center h-100">
                                <i className="fas fa-globe-americas text-white display-1 mb-3"></i>
                                <h3 className="text-white mb-3">Decentralized Future</h3>
                                <p className="text-white opacity-75">
                                    Building the infrastructure for tomorrow's internet
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Technology Stack */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Our Technology Stack</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        We work with cutting-edge blockchain technologies and frameworks
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">Ethereum</h5>
                            <p className="text-muted mb-0">Smart Contracts & DApps</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">Solidity</h5>
                            <p className="text-muted mb-0">Smart Contract Development</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">Web3.js</h5>
                            <p className="text-muted mb-0">Blockchain Integration</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">IPFS</h5>
                            <p className="text-muted mb-0">Decentralized Storage</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">Polygon</h5>
                            <p className="text-muted mb-0">Layer 2 Solutions</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">Hardhat</h5>
                            <p className="text-muted mb-0">Development Framework</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">MetaMask</h5>
                            <p className="text-muted mb-0">Wallet Integration</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div
                            className="card border-0 p-3 text-center h-100"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <h5 className="text-white mb-3">OpenZeppelin</h5>
                            <p className="text-muted mb-0">Security Standards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ backgroundColor: '#1a1a3a' }}>
            <div className="container">
                <div className="text-center">
                    <h2 className="display-6 fw-bold mb-4">Ready to Build Your Web3 Solution?</h2>
                    <p className="lead mb-4" style={{ color: '#cccccc' }}>
                        Join the decentralized revolution with our expert blockchain development team.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                        <button className="btn btn-primary btn-lg px-5">Start Your Project</button>
                        <button className="btn btn-outline-light btn-lg px-5">Schedule Consultation</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default Web3Page;