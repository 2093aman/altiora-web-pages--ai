import React from 'react'
import './Web3.css';
import bitcoin from '../..//assets/bitcoin.jpg';
import web3 from '../../assets/web3.jpg';
import TechnologyStackSection from '../TechnologyStack/TechnologyStackSection';

const Web3Page = () => (
    <div style={{ backgroundColor: '#060615', minHeight: '100vh', color: '#ffffff' }}>
        {/* Hero Section */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #060620 0%, #1a1a3a 100%)' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Section - First Column */}
                    <div className="col-lg-6 order-1">
                        <div className="text-center mb-5">
                            <img
                                src={web3}
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
                    <div className="col-lg-6 order-2">
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

                {/* NEW NEW NEW NEW*/}
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
                                <h4 className="card-title text-white mb-3">dApps (Web/Mobile) with Real-Time Analytics</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    From MVP to production: wallets, indexers, event pipelines, and dashboards your team can trust.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Ask for our “8-week MVP” checklist.
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
                                <h4 className="card-title text-white mb-3">Blockchain Payment Processing / P2P Modules</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Crypto→fiat bridges, P2P frameworks, compliance screens, and dispute tooling.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Get a costed plan for your geography and KYC regime
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
                                <h4 className="card-title text-white mb-3">KYC/AML, Analytics & Risk</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Chain analysis hookups, sanctions checks, fraud rules, and alerting wired into your flows.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Book a 30-min risk review—leave with a heatmap
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
                                <h4 className="card-title text-white mb-3">Governance & Token Economics</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Emissions curves, sinks, buyback logic, and dashboards that keep incentives sustainable.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Request a token-economics sketch for your model.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/*--------------------------*/}



                {/* NEW NEW NEW NEW*/}
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
                                <h4 className="card-title text-white mb-3">Security, Testing & Audit Prep</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Coverage reports, fuzzing, static analysis, and auditor-grade documentation.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Run a free contract readiness check.
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
                                <h4 className="card-title text-white mb-3">Infra, DevOps & Observability</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    CI/CD, IaC, RPC/indexer strategy, cost-optimized cloud, and 24×7 monitoring.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    We’ll map your infra and give quick wins in 48h.
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
                                <h4 className="card-title text-white mb-3">Ready-Made Starters (Fixed-Scope, Fixed-Price)</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Wallet, Exchanger/CEX, Processing, P2P frameworks—customized and shipped fast.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Get inclusions/exclusions and a launch date today
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


        <TechnologyStackSection />


        {/* How We Do It Section */}
        <section className="py-5" style={{ backgroundColor: '#060615' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#ffffff' }}>How We Do It</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        Our proven methodology ensures successful blockchain project delivery
                    </p>
                </div>

                {/* Side-by-Side Layout: Image + Process Steps */}
                <div
                    className="how-we-main-container p-4"
                    style={{
                        background: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a4a 100%)',
                        borderRadius: '20px',
                        border: '2px solid rgba(255, 193, 7, 0.3)'
                    }}
                >
                    <div className="row g-4 align-items-center">
                        {/* Bitcoin Image - Left Side on Desktop, First on Mobile */}
                        <div className="col-lg-6 order-1 order-lg-1">
                            <div className="image-container text-center">
                                <img
                                    src={bitcoin}
                                    alt="How We Do It - Blockchain Development Process"
                                    className="img-fluid"
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        height: 'auto',
                                        borderRadius: '15px',
                                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))',
                                        border: '2px solid rgba(255, 193, 7, 0.2)'
                                    }}
                                    onError={(e) => {
                                        // Fallback if image doesn't load
                                        e.target.style.display = 'none';
                                        e.target.nextElementSibling.style.display = 'block';
                                    }}
                                />

                                {/* Fallback if image doesn't load */}
                                <div
                                    className="image-fallback d-none"
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        height: '400px',
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                        border: '2px solid rgba(255, 193, 7, 0.2)'
                                    }}
                                >
                                    <i className="fab fa-bitcoin text-warning" style={{ fontSize: '80px' }}></i>
                                    <h4 className="text-white mb-2">Blockchain Innovation</h4>
                                    <p className="text-white opacity-75">Building the future of Web3</p>
                                </div>
                            </div>
                        </div>

                        {/* Process Steps - Right Side on Desktop, Second on Mobile */}
                        <div className="col-lg-6 order-2 order-lg-2">
                            <div className="process-steps-container">
                                {/* Process Item 1 */}
                                <div className="process-item d-flex align-items-start mb-4">
                                    <div className="process-number me-3">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: '#ffc107',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                color: '#000'
                                            }}
                                        >
                                            01
                                        </div>
                                    </div>
                                    <div className="process-content">
                                        <h5 className="text-warning mb-2 fw-bold">Audit Ready</h5>
                                        <p className="text-light mb-0" style={{ fontSize: '0.95rem' }}>
                                            Contracts ship with tests, invariants, fuzzing, coverage reports, and auditor grade docs
                                        </p>
                                    </div>
                                </div>

                                {/* Process Item 2 */}
                                <div className="process-item d-flex align-items-start mb-4">
                                    <div className="process-number me-3">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: '#ffc107',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                color: '#000'
                                            }}
                                        >
                                            02
                                        </div>
                                    </div>
                                    <div className="process-content">
                                        <h5 className="text-warning mb-2 fw-bold">Built In Weeks</h5>
                                        <p className="text-light mb-0" style={{ fontSize: '0.95rem' }}>
                                            Productised sprints for wallets, DEX, payments, DePIN & AA so you ship fast and de-risk early
                                        </p>
                                    </div>
                                </div>

                                {/* Process Item 3 */}
                                <div className="process-item d-flex align-items-start mb-4">
                                    <div className="process-number me-3">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: '#ffc107',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                color: '#000'
                                            }}
                                        >
                                            03
                                        </div>
                                    </div>
                                    <div className="process-content">
                                        <h5 className="text-warning mb-2 fw-bold">Tokenomics That Sustain</h5>
                                        <p className="text-light mb-0" style={{ fontSize: '0.95rem' }}>
                                            Emissions curves, sinks, fee capture, and dashboards so tokens drive utility—not just speculation
                                        </p>
                                    </div>
                                </div>

                                {/* Process Item 4 */}
                                <div className="process-item d-flex align-items-start mb-4">
                                    <div className="process-number me-3">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: '#ffc107',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                color: '#000'
                                            }}
                                        >
                                            04
                                        </div>
                                    </div>
                                    <div className="process-content">
                                        <h5 className="text-warning mb-2 fw-bold">On-Chain Payments & Treasury Ops</h5>
                                        <p className="text-light mb-0" style={{ fontSize: '0.95rem' }}>
                                            Stablecoin rails, invoicing, reconciliation, and policy-driven payouts that finance teams trust
                                        </p>
                                    </div>
                                </div>

                                {/* Process Item 5 */}
                                <div className="process-item d-flex align-items-start">
                                    <div className="process-number me-3">
                                        <div
                                            className="rounded-circle d-flex align-items-center justify-content-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: '#ffc107',
                                                fontSize: '1.2rem',
                                                fontWeight: 'bold',
                                                color: '#000'
                                            }}
                                        >
                                            05
                                        </div>
                                    </div>
                                    <div className="process-content">
                                        <h5 className="text-warning mb-2 fw-bold">Fixed Scope, Fixed Price, Warranty</h5>
                                        <p className="text-light mb-0" style={{ fontSize: '0.95rem' }}>
                                            Clear inclusions/exclusions milestones billing, and a post-launch stabilisation window (We deliver Bug Bounties as and when required)
                                        </p>
                                    </div>
                                </div>
                            </div>
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