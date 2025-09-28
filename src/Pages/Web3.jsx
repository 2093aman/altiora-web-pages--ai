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

        {/* Technology Stack Section with Original Brand Colors */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4 tech-stack-title">TECHNOLOGY STACK</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        We use cutting-edge technologies, honing our expertise every day
                    </p>
                    <h3 className="text-warning mb-5">Blockchain</h3>
                </div>

                {/* Top Row - Blockchain */}
                <div className="row g-4 mb-5">
                    {/* Chains */}
                    <div className="col-lg-4">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">Chains</h4>
                                <div className="row g-3">
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#f7931a', borderRadius: '50%' }}>
                                                <img
                                                    src="https://www.citypng.com/public/uploads/preview/hd-black-round-btc-logo-icon-png-701751695055062bu18prgeot.png"
                                                    //alt="Bitcoin"
                                                    style={{ width: '45px', height: '45px', objectFit: 'contain' }}
                                                />
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">BTC</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#627eea', borderRadius: '50%' }}>
                                                <i className="fab fa-ethereum text-white" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">ETH</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#8247e5', borderRadius: '50%' }}>
                                                <svg width="30" height="30" viewBox="0 0 38 33" fill="white">
                                                    <path d="M29 10.2c-.7-.4-1.6-.4-2.4 0L21 13.5l-3.8 2.1-5.5 3.3c-.7.4-1.6.4-2.4 0L5 16.3c-.7-.4-1.2-1.2-1.2-2.1v-5c0-.8.4-1.6 1.2-2.1l4.3-2.5c.7-.4 1.6-.4 2.4 0L16 7.2c.7.4 1.2 1.2 1.2 2.1v3.3l3.8-2.2V7c0-.8-.4-1.6-1.2-2.1l-8-4.7c-.7-.4-1.6-.4-2.4 0L1.2 5C.4 5.4 0 6.2 0 7v9.4c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l5.5-3.2 3.8-2.2 5.5-3.2c.7-.4 1.6-.4 2.4 0l4.3 2.5c.7.4 1.2 1.2 1.2 2.1v5c0 .8-.4 1.6-1.2 2.1L29 26.5c-.7.4-1.6.4-2.4 0l-4.3-2.5c-.7-.4-1.2-1.2-1.2-2.1V19l-3.8 2.2v3.3c0 .8.4 1.6 1.2 2.1l8.1 4.7c.7.4 1.6.4 2.4 0l8.1-4.7c.7-.4 1.2-1.2 1.2-2.1V15c0-.8-.4-1.6-1.2-2.1L29 10.2z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Polygon</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #9945ff, #14f195)', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>S</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">SOL</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#f3ba2f', borderRadius: '50%' }}>
                                                <span className="fw-bold text-dark" style={{ fontSize: '18px' }}>B</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">BSC</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#0088cc', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>T</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">TON</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#ff0013', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>T</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Tron</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#ff6600', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>M</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">XMR</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tools */}
                    <div className="col-lg-4">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">Tools</h4>
                                <div className="row g-3">
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#f16822', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '14px' }}>W3</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Web3.js</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#2535aa', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>E</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Ethers.js</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #41873f, #3f8b3d)', borderRadius: '50%' }}>
                                                <i className="fab fa-node-js text-white" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Node.JS</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#3aac59', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>C</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Chia</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#fff04d', borderRadius: '50%' }}>
                                                <span className="fw-bold text-dark" style={{ fontSize: '18px' }}>H</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Hardhat</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#5e464d', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>T</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Truffle</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="col-lg-4">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">Services</h4>
                                <div className="row g-3">
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#0364ff', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>W</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Web3auth</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#2081e2', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>O</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Opensea</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#68d391', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>C</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Coingecko</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#041e42', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>M</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Moralis</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#ff5722', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>I</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Infura</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#f6851b', borderRadius: '50%' }}>
                                                <i className="fas fa-wallet text-white" style={{ fontSize: '20px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">MetaMask</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Row - Web, Mobile, Database */}
                <div className="row g-4 mb-5">
                    {/* Web */}
                    <div className="col-lg-4">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">Web</h4>
                                <div className="row g-3">
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#3178c6', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '14px' }}>TS</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">TypeScript</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#61dafb', borderRadius: '50%' }}>
                                                <i className="fab fa-react text-dark" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">React</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#f7df1e', borderRadius: '50%' }}>
                                                <span className="fw-bold text-dark" style={{ fontSize: '14px' }}>JS</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">JavaScript</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#000000', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>N</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Next.js</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#764abc', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>R</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Redux</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#663399', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>G</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Gatsby</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Development */}
                    <div className="col-lg-4">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">Mobile development</h4>
                                <div className="row g-3 justify-content-center">
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#61dafb', borderRadius: '50%' }}>
                                                <i className="fab fa-react text-dark" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">React Native</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#02569b', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>F</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Flutter</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Database */}
                    <div className="col-lg-4">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">Database</h4>
                                <div className="row g-3">
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#336791', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>P</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">PostgreSQL</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#00758f', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>M</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">MySQL</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#4db33d', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>M</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">MongoDB</small>
                                    </div>
                                    <div className="col-6 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#dc382d', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>R</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Redis</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* DevOps and Cloud */}
                <div className="row g-4 justify-content-center">
                    {/* DevOps */}
                    <div className="col-lg-6">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">DevOps</h4>
                                <div className="row g-3">
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#68d391', borderRadius: '50%' }}>
                                                <i className="fab fa-node-js text-white" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Node.JS</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#e0234e', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>N</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Nest.JS</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#68d391', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>E</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Express</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#2496ed', borderRadius: '50%' }}>
                                                <i className="fab fa-docker text-white" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Docker</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#e6522c', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>P</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Prometheus</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#f46800', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>G</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Grafana</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cloud Technologies */}
                    <div className="col-lg-6">
                        <div
                            className="card h-100 border border-primary p-4 tech-stack-card"
                            style={{
                                backgroundColor: '#3a4a7a',
                                borderRadius: '15px'
                            }}
                        >
                            <div className="card-body">
                                <h4 className="text-warning mb-4 text-center">Cloud technologies</h4>
                                <div className="row g-3">
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#ff9900', borderRadius: '50%' }}>
                                                <i className="fab fa-aws text-white" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">AWS</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#0078d4', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>A</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Azure</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#ffca28', borderRadius: '50%' }}>
                                                <span className="fw-bold text-dark" style={{ fontSize: '18px' }}>F</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Firebase</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#4285f4', borderRadius: '50%' }}>
                                                <i className="fab fa-google text-white" style={{ fontSize: '24px' }}></i>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Google Cloud</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#430098', borderRadius: '50%' }}>
                                                <span className="fw-bold text-white" style={{ fontSize: '18px' }}>H</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">Heroku</small>
                                    </div>
                                    <div className="col-4 text-center">
                                        <div className="mb-2">
                                            <div className="tech-icon d-inline-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px', background: '#1bdbdb', borderRadius: '50%' }}>
                                                <span className="fw-bold text-dark" style={{ fontSize: '18px' }}>G</span>
                                            </div>
                                        </div>
                                        <small className="text-white fw-bold">GoDaddy</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                        <div
                            className="card h-100 border-0 p-4"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <div className="card-body">
                                <div
                                    className="rounded-3 p-3 d-inline-block mb-3"
                                    style={{ background: 'linear-gradient(45deg, #667eea, #764ba2)' }}
                                >
                                    <i className="fas fa-file-contract text-white fs-3"></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Smart Contracts</h4>
                                <p className="card-text" style={{ color: '#cccccc' }}>
                                    Develop secure, audited smart contracts that automate business processes and ensure transparency in transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="card h-100 border-0 p-4"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <div className="card-body">
                                <div
                                    className="rounded-3 p-3 d-inline-block mb-3"
                                    style={{ background: 'linear-gradient(45f, #f093fb, #f5576c)' }}
                                >
                                    <i className="fas fa-mobile-alt text-white fs-3"></i>
                                </div>
                                <h4 className="card-title text-white mb-3">DApps Development</h4>
                                <p className="card-text" style={{ color: '#cccccc' }}>
                                    Build decentralized applications that run on blockchain networks, providing users with full control and ownership.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="card h-100 border-0 p-4"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <div className="card-body">
                                <div
                                    className="rounded-3 p-3 d-inline-block mb-3"
                                    style={{ background: 'linear-gradient(45deg, #4facfe, #00f2fe)' }}
                                >
                                    <i className="fas fa-coins text-white fs-3"></i>
                                </div>
                                <h4 className="card-title text-white mb-3">NFT Solutions</h4>
                                <p className="card-text" style={{ color: '#cccccc' }}>
                                    Create and launch NFT marketplaces, collections, and platforms that drive engagement and revenue.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="card h-100 border-0 p-4"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <div className="card-body">
                                <div
                                    className="rounded-3 p-3 d-inline-block mb-3"
                                    style={{ background: 'linear-gradient(45deg, #fa709a, #fee140)' }}
                                >
                                    <i className="fas fa-exchange-alt text-white fs-3"></i>
                                </div>
                                <h4 className="card-title text-white mb-3">DeFi Platforms</h4>
                                <p className="card-text" style={{ color: '#cccccc' }}>
                                    Build decentralized finance applications including DEXs, lending platforms, and yield farming solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="card h-100 border-0 p-4"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <div className="card-body">
                                <div
                                    className="rounded-3 p-3 d-inline-block mb-3"
                                    style={{ background: 'linear-gradient(45deg, #a8edea, #fed6e3)' }}
                                >
                                    <i className="fas fa-link text-white fs-3"></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Blockchain Integration</h4>
                                <p className="card-text" style={{ color: '#cccccc' }}>
                                    Integrate blockchain technology into existing systems and workflows for enhanced security and transparency.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div
                            className="card h-100 border-0 p-4"
                            style={{ backgroundColor: '#1a1a3a' }}
                        >
                            <div className="card-body">
                                <div
                                    className="rounded-3 p-3 d-inline-block mb-3"
                                    style={{ background: 'linear-gradient(45deg, #ffecd2, #fcb69f)' }}
                                >
                                    <i className="fas fa-shield-alt text-white fs-3"></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Security Audits</h4>
                                <p className="card-text" style={{ color: '#cccccc' }}>
                                    Comprehensive security audits and testing to ensure your blockchain applications are secure and reliable.
                                </p>
                            </div>
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