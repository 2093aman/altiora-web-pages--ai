import React from 'react'

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