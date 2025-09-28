import React from 'react'
import './Web2.css';
import web2pic from '../../assets/web2.jpg';
import TechnologyStackSection from '../TechnologyStack/TechnologyStackSection';

const Web2Page = () => (
    <div style={{ backgroundColor: '#060615', minHeight: '100vh', color: '#ffffff' }}>
        {/* Hero Section */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #060620 0%, #1a1a3a 100%)' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Image Section - First Column */}
                    <div className="col-lg-6">
                        <div className="text-center mb-5">
                            <img
                                src={web2pic}
                                className="img-fluid rounded-top"
                                alt=""
                            />
                        </div>
                    </div>
                    {/* Text Section - Second Column */}
                    <div className="col-lg-6">
                        <h1 className="display-3 fw-bold mb-4">
                            Website & App Development that Elevates Experiences
                            <br />
                            <span className="text-primary display-6">From MVP to enterprise — scalable solutions in 4–8 weeks</span>
                        </h1>
                        <p className="lead mb-4" style={{ color: '#cccccc' }}>
                            Website & App Development that Elevates Experiences
                            We design and develop high-quality, performance-driven products that do more than just look good. Our focus is on building solutions that drive conversions,
                            remove friction across every customer touchpoint, and deliver seamless experiences. 
                            Each product is crafted to align with your business objectives and is built with scalability in mind—ensuring it grows in step with your vision, operations, and long-term goals.                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-warning btn-lg px-4">Start Your Web Project</button>
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
                        From simple landing pages to complex web applications, we deliver solutions that are fast, secure, and scalable.
                        Our development process ensures quality code, responsive design, and optimal performance across all devices.
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
                                        <rect x="8" y="12" width="32" height="24" rx="4" fill="#ffc107" opacity="0.2" />
                                        <path d="M12 16H36V20H12V16Z" fill="#ffc107" />
                                        <path d="M12 24H28V28H12V24Z" fill="#ffc107" />
                                        <circle cx="36" cy="26" r="3" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">Responsive Web Design</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Mobile-first designs that look stunning on all devices with optimized user experience.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Get a design mockup this week
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
                                        <circle cx="24" cy="24" r="20" fill="#ffc107" opacity="0.2" />
                                        <path d="M16 20H32V24H16V20Z" fill="#ffc107" />
                                        <circle cx="20" cy="30" r="2" fill="#ffc107" />
                                        <circle cx="28" cy="30" r="2" fill="#ffc107" />
                                        <path d="M18 14H30L28 18H20L18 14Z" fill="#ffc107" />
                                    </svg>
                                </div>
                                <h4 className="card-title text-white mb-3">E-Commerce Solutions</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Full-featured online stores with payment integration, inventory management, and analytics.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    See e-commerce demo and pricing
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
                                <h4 className="card-title text-white mb-3">Content Management Systems</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Custom CMS solutions that make content updates simple and efficient for your team.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Explore CMS features and setup
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
                                <h4 className="card-title text-white mb-3">Web Applications</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Complex web apps with real-time features, dashboards, and integrations.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Discuss your web app requirements
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
                                <h4 className="card-title text-white mb-3">API Development & Integration</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    RESTful APIs and third-party integrations to connect your systems seamlessly.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Review API architecture options
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
                                <h4 className="card-title text-white mb-3">Performance Optimization</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Speed optimization, SEO enhancements, and performance monitoring for better rankings.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Get a performance audit report
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
                                <h4 className="card-title text-white mb-3">Cloud Hosting & DevOps</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Plan your cloud infrastructure
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
                                <h4 className="card-title text-white mb-3">Maintenance & Support</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Ongoing support, security updates, and feature enhancements to keep your site running smoothly.
                                </p>
                                <button
                                    className="btn btn-primary w-100"
                                    style={{ borderRadius: '10px' }}
                                >
                                    Explore support packages
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
                        Discuss your project →
                    </button>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">Our Web Development Services</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        Comprehensive web solutions from frontend to backend development
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                            <div className="service-icon-container mb-4">
                                <div className="service-icon-wrapper">
                                    <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                        <circle cx="50" cy="50" r="45" fill="url(#webGradient1)" opacity="0.2" />
                                        <rect x="20" y="30" width="60" height="40" rx="5" fill="url(#webGradient1)" opacity="0.3" />
                                        <rect x="25" y="35" width="50" height="30" rx="3" fill="url(#webGradient1)" />
                                        <path d="M30 45h40v3H30v-3z" fill="white" />
                                        <path d="M30 50h25v3H30v-3z" fill="white" />
                                        <path d="M30 55h35v3H30v-3z" fill="white" />
                                        <circle cx="35" cy="40" r="2" fill="white" />
                                        <circle cx="40" cy="40" r="2" fill="white" />
                                        <circle cx="45" cy="40" r="2" fill="white" />
                                        <defs>
                                            <linearGradient id="webGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#667eea" />
                                                <stop offset="100%" stopColor="#764ba2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h4 className="service-title text-white mb-3">Frontend Development</h4>
                            <p className="service-description" style={{ color: '#cccccc' }}>
                                Modern React, Vue.js, and Angular applications with responsive design and optimal performance.
                            </p>
                            <div className="service-hover-overlay"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                            <div className="service-icon-container mb-4">
                                <div className="service-icon-wrapper">
                                    <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                        <circle cx="50" cy="50" r="45" fill="url(#webGradient2)" opacity="0.2" />
                                        <rect x="25" y="25" width="50" height="50" rx="5" fill="url(#webGradient2)" opacity="0.3" />
                                        <rect x="30" y="30" width="40" height="5" rx="2" fill="url(#webGradient2)" />
                                        <rect x="30" y="40" width="40" height="5" rx="2" fill="url(#webGradient2)" />
                                        <rect x="30" y="50" width="40" height="5" rx="2" fill="url(#webGradient2)" />
                                        <rect x="30" y="60" width="25" height="5" rx="2" fill="url(#webGradient2)" />
                                        <circle cx="65" cy="35" r="3" fill="url(#webGradient2)" />
                                        <defs>
                                            <linearGradient id="webGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#f093fb" />
                                                <stop offset="100%" stopColor="#f5576c" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h4 className="service-title text-white mb-3">Backend Development</h4>
                            <p className="service-description" style={{ color: '#cccccc' }}>
                                Robust server-side solutions with Node.js, Python, PHP, and database management systems.
                            </p>
                            <div className="service-hover-overlay"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                            <div className="service-icon-container mb-4">
                                <div className="service-icon-wrapper">
                                    <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                        <circle cx="50" cy="50" r="45" fill="url(#webGradient3)" opacity="0.2" />
                                        <rect x="15" y="35" width="70" height="30" rx="5" fill="url(#webGradient3)" opacity="0.3" />
                                        <rect x="20" y="40" width="60" height="20" rx="3" fill="url(#webGradient3)" />
                                        <path d="M25 48h15v2H25v-2z" fill="white" />
                                        <path d="M25 52h20v2H25v-2z" fill="white" />
                                        <circle cx="70" cy="50" r="5" fill="white" />
                                        <path d="M67 48l2 2 4-4" stroke="#4facfe" strokeWidth="1.5" fill="none" />
                                        <defs>
                                            <linearGradient id="webGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#4facfe" />
                                                <stop offset="100%" stopColor="#00f2fe" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h4 className="service-title text-white mb-3">E-Commerce Development</h4>
                            <p className="service-description" style={{ color: '#cccccc' }}>
                                Complete online store solutions with payment gateways, inventory management, and analytics.
                            </p>
                            <div className="service-hover-overlay"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                            <div className="service-icon-container mb-4">
                                <div className="service-icon-wrapper">
                                    <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                        <circle cx="50" cy="50" r="45" fill="url(#webGradient4)" opacity="0.2" />
                                        <rect x="30" y="20" width="40" height="60" rx="5" fill="url(#webGradient4)" opacity="0.3" />
                                        <rect x="35" y="25" width="30" height="20" rx="3" fill="url(#webGradient4)" />
                                        <rect x="35" y="50" width="30" height="3" rx="1" fill="url(#webGradient4)" />
                                        <rect x="35" y="55" width="20" height="3" rx="1" fill="url(#webGradient4)" />
                                        <rect x="35" y="60" width="25" height="3" rx="1" fill="url(#webGradient4)" />
                                        <circle cx="42" cy="70" r="2" fill="url(#webGradient4)" />
                                        <circle cx="50" cy="70" r="2" fill="url(#webGradient4)" />
                                        <circle cx="58" cy="70" r="2" fill="url(#webGradient4)" />
                                        <defs>
                                            <linearGradient id="webGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#fa709a" />
                                                <stop offset="100%" stopColor="#fee140" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h4 className="service-title text-white mb-3">Mobile-First Design</h4>
                            <p className="service-description" style={{ color: '#cccccc' }}>
                                Responsive designs that work perfectly on all devices with mobile-first approach.
                            </p>
                            <div className="service-hover-overlay"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                            <div className="service-icon-container mb-4">
                                <div className="service-icon-wrapper">
                                    <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                        <circle cx="50" cy="50" r="45" fill="url(#webGradient5)" opacity="0.2" />
                                        <circle cx="50" cy="50" r="25" fill="url(#webGradient5)" opacity="0.3" />
                                        <circle cx="50" cy="50" r="15" fill="url(#webGradient5)" />
                                        <path d="M42 42l16 16M58 42l-16 16" stroke="white" strokeWidth="2" />
                                        <circle cx="30" cy="30" r="5" fill="url(#webGradient5)" />
                                        <circle cx="70" cy="30" r="5" fill="url(#webGradient5)" />
                                        <circle cx="30" cy="70" r="5" fill="url(#webGradient5)" />
                                        <circle cx="70" cy="70" r="5" fill="url(#webGradient5)" />
                                        <path d="M35 30h30M30 35v30M65 30h5M70 35v30" stroke="url(#webGradient5)" strokeWidth="2" />
                                        <defs>
                                            <linearGradient id="webGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#a8edea" />
                                                <stop offset="100%" stopColor="#fed6e3" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h4 className="service-title text-white mb-3">API Integration</h4>
                            <p className="service-description" style={{ color: '#cccccc' }}>
                                Seamless integration with third-party services and custom API development for your applications.
                            </p>
                            <div className="service-hover-overlay"></div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="service-card h-100 p-4" style={{ backgroundColor: '#1a1a3a' }}>
                            <div className="service-icon-container mb-4">
                                <div className="service-icon-wrapper">
                                    <svg className="service-icon" width="64" height="64" viewBox="0 0 100 100" fill="none">
                                        <circle cx="50" cy="50" r="45" fill="url(#webGradient6)" opacity="0.2" />
                                        <rect x="20" y="30" width="60" height="40" rx="5" fill="url(#webGradient6)" opacity="0.3" />
                                        <path d="M30 40h40v5H30v-5z" fill="url(#webGradient6)" />
                                        <path d="M30 50h30v3H30v-3z" fill="url(#webGradient6)" />
                                        <path d="M30 55h35v3H30v-3z" fill="url(#webGradient6)" />
                                        <circle cx="70" cy="52" r="3" fill="url(#webGradient6)" />
                                        <path d="M68 50l2 2 4-4" stroke="white" strokeWidth="1" fill="none" />
                                        <defs>
                                            <linearGradient id="webGradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#ffecd2" />
                                                <stop offset="100%" stopColor="#fcb69f" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <h4 className="service-title text-white mb-3">Performance Optimization</h4>
                            <p className="service-description" style={{ color: '#cccccc' }}>
                                Speed optimization, SEO improvements, and performance monitoring for better user experience.
                            </p>
                            <div className="service-hover-overlay"></div>
                        </div>
                    </div>
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
                        Our proven development methodology ensures successful web project delivery
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div
                            className="how-we-main-container p-4"
                            style={{
                                background: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a4a 100%)',
                                borderRadius: '20px',
                                border: '2px solid rgba(255, 193, 7, 0.3)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div className="row g-4 align-items-center">
                                {/* Left Side - Process Steps */}
                                <div className="col-lg-6">
                                    <div className="process-steps-container">
                                        <div className="process-item d-flex align-items-start mb-4">
                                            <div className="process-number me-4">
                                                <span className="process-badge">01</span>
                                            </div>
                                            <div className="process-content">
                                                <h4 className="process-title mb-2">Discovery & Planning</h4>
                                                <p className="process-description mb-0">
                                                    Deep dive into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="process-item d-flex align-items-start mb-4">
                                            <div className="process-number me-4">
                                                <span className="process-badge">02</span>
                                            </div>
                                            <div className="process-content">
                                                <h4 className="process-title mb-2">Design & Prototyping</h4>
                                                <p className="process-description mb-0">
                                                    Create wireframes, mockups, and interactive prototypes to visualize the user experience before development begins.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="process-item d-flex align-items-start mb-4">
                                            <div className="process-number me-4">
                                                <span className="process-badge">03</span>
                                            </div>
                                            <div className="process-content">
                                                <h4 className="process-title mb-2">Development & Testing</h4>
                                                <p className="process-description mb-0">
                                                    Build your application using modern technologies with comprehensive testing at every stage to ensure quality and performance.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="process-item d-flex align-items-start mb-4">
                                            <div className="process-number me-4">
                                                <span className="process-badge">04</span>
                                            </div>
                                            <div className="process-content">
                                                <h4 className="process-title mb-2">Deployment & Launch</h4>
                                                <p className="process-description mb-0">
                                                    Seamless deployment to production environments with monitoring, security configurations, and performance optimization.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="process-item d-flex align-items-start">
                                            <div className="process-number me-4">
                                                <span className="process-badge">05</span>
                                            </div>
                                            <div className="process-content">
                                                <h4 className="process-title mb-2">Support & Maintenance</h4>
                                                <p className="process-description mb-0">
                                                    Ongoing support, regular updates, security patches, and feature enhancements to keep your application running smoothly.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Image */}
                                <div className="col-lg-6">
                                    <div className="image-container text-center">
                                        {/* Fallback content */}
                                        <div
                                            className="image-fallback"
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
                                                border: '2px solid rgba(255, 193, 7, 0.2)',
                                                position: 'relative',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {/* Code Icon */}
                                            <div className="fallback-bitcoin mb-3" style={{ position: 'relative', zIndex: '2' }}>
                                                <i className="fas fa-code text-warning" style={{ fontSize: '80px' }}></i>
                                            </div>

                                            {/* Web Development Text */}
                                            <h4 className="text-white mb-2" style={{ position: 'relative', zIndex: '2' }}>Web Development</h4>
                                            <p className="text-white opacity-75" style={{ position: 'relative', zIndex: '2' }}>
                                                Building the future of web
                                            </p>

                                            {/* Animated Particles */}
                                            <div className="fallback-particles">
                                                <div className="fallback-particle fallback-particle-1"></div>
                                                <div className="fallback-particle fallback-particle-2"></div>
                                                <div className="fallback-particle fallback-particle-3"></div>
                                                <div className="fallback-particle fallback-particle-4"></div>
                                                <div className="fallback-particle fallback-particle-5"></div>
                                                <div className="fallback-particle fallback-particle-6"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Background Animation */}
                            <div className="how-we-background-animation"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">Our Technology Stack</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        We use cutting-edge technologies to build fast, secure, and scalable web applications
                    </p>
                </div>

                <div className="row g-4">
                    {/* Frontend Technologies */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tech-card h-100 p-4 text-center" style={{ backgroundColor: '#1a1a3a', borderRadius: '15px', border: '2px solid transparent' }}>
                            <div className="mb-4">
                                <i className="fab fa-react text-info" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4 className="text-white mb-3">Frontend</h4>
                            <p style={{ color: '#cccccc' }}>React, Vue.js, Angular, TypeScript, HTML5, CSS3, SASS</p>
                        </div>
                    </div>

                    {/* Backend Technologies */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tech-card h-100 p-4 text-center" style={{ backgroundColor: '#1a1a3a', borderRadius: '15px', border: '2px solid transparent' }}>
                            <div className="mb-4">
                                <i className="fab fa-node-js text-success" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4 className="text-white mb-3">Backend</h4>
                            <p style={{ color: '#cccccc' }}>Node.js, Python, PHP, Java, .NET, Express.js</p>
                        </div>
                    </div>

                    {/* Database Technologies */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tech-card h-100 p-4 text-center" style={{ backgroundColor: '#1a1a3a', borderRadius: '15px', border: '2px solid transparent' }}>
                            <div className="mb-4">
                                <i className="fas fa-database text-warning" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4 className="text-white mb-3">Database</h4>
                            <p style={{ color: '#cccccc' }}>MySQL, PostgreSQL, MongoDB, Redis, Firebase</p>
                        </div>
                    </div>

                    {/* Cloud & DevOps */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tech-card h-100 p-4 text-center" style={{ backgroundColor: '#1a1a3a', borderRadius: '15px', border: '2px solid transparent' }}>
                            <div className="mb-4">
                                <i className="fab fa-aws text-primary" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4 className="text-white mb-3">Cloud & DevOps</h4>
                            <p style={{ color: '#cccccc' }}>AWS, Azure, Google Cloud, Docker, Kubernetes</p>
                        </div>
                    </div>

                    {/* Mobile Technologies */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tech-card h-100 p-4 text-center" style={{ backgroundColor: '#1a1a3a', borderRadius: '15px', border: '2px solid transparent' }}>
                            <div className="mb-4">
                                <i className="fas fa-mobile-alt text-info" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4 className="text-white mb-3">Mobile</h4>
                            <p style={{ color: '#cccccc' }}>React Native, Flutter, Progressive Web Apps</p>
                        </div>
                    </div>

                    {/* Tools & Frameworks */}
                    <div className="col-lg-4 col-md-6">
                        <div className="tech-card h-100 p-4 text-center" style={{ backgroundColor: '#1a1a3a', borderRadius: '15px', border: '2px solid transparent' }}>
                            <div className="mb-4">
                                <i className="fas fa-tools text-warning" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <h4 className="text-white mb-3">Tools</h4>
                            <p style={{ color: '#cccccc' }}>Git, Webpack, CI/CD, Jest, Cypress, Figma</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-5" style={{ backgroundColor: '#1a1a3a' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">Our Recent Projects</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        Explore some of our successful web development projects
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-card" style={{ backgroundColor: '#060615', borderRadius: '15px', overflow: 'hidden', border: '2px solid rgba(255, 193, 7, 0.2)' }}>
                            <div style={{ height: '200px', background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-shopping-cart text-white" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="p-4">
                                <h5 className="text-white mb-2">E-Commerce Platform</h5>
                                <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Modern online store with payment integration and inventory management
                                </p>
                                <span className="badge bg-primary me-2">React</span>
                                <span className="badge bg-success me-2">Node.js</span>
                                <span className="badge bg-warning">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-card" style={{ backgroundColor: '#060615', borderRadius: '15px', overflow: 'hidden', border: '2px solid rgba(255, 193, 7, 0.2)' }}>
                            <div style={{ height: '200px', background: 'linear-gradient(45deg, #f093fb 0%, #f5576c 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-chart-line text-white" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="p-4">
                                <h5 className="text-white mb-2">Analytics Dashboard</h5>
                                <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Real-time data visualization and reporting dashboard
                                </p>
                                <span className="badge bg-primary me-2">Vue.js</span>
                                <span className="badge bg-success me-2">Python</span>
                                <span className="badge bg-warning">PostgreSQL</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="portfolio-card" style={{ backgroundColor: '#060615', borderRadius: '15px', overflow: 'hidden', border: '2px solid rgba(255, 193, 7, 0.2)' }}>
                            <div style={{ height: '200px', background: 'linear-gradient(45deg, #4facfe 0%, #00f2fe 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-users text-white" style={{ fontSize: '3rem' }}></i>
                            </div>
                            <div className="p-4">
                                <h5 className="text-white mb-2">Social Platform</h5>
                                <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Community platform with real-time messaging and content sharing
                                </p>
                                <span className="badge bg-primary me-2">Angular</span>
                                <span className="badge bg-success me-2">PHP</span>
                                <span className="badge bg-warning">MySQL</span>
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
                    <h2 className="display-6 fw-bold mb-4">Ready to Build Your Web Solution?</h2>
                    <p className="lead mb-4" style={{ color: '#cccccc' }}>
                        Transform your ideas into powerful web applications with our expert development team.
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

export default Web2Page;