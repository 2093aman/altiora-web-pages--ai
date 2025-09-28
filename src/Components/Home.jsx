import React from 'react'

const HomePage = () => (
    <div style={{ backgroundColor: '# git push --set-upstream origin main', minHeight: '100vh', color: '#ffffff' }}>
      {/* Hero Section */}
      <section className="py-5" style={{ background: 'linear-gradient(135deg, #060620 0%, #1a1a3a 100%)' }}>
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                AI, Blockchain & Software Engineering
                <span className="text-primary"> for Growth Acceleration</span>
              </h1>
              <p className="lead mb-4" style={{ color: '#cccccc' }}>
                Engineering, security, and growth—aligned to ship faster. We design and create products that drive business today through innovative web development, mobile applications, blockchain ecosystems and AI-based solutions.
              </p>
              <div className="d-flex gap-3">
                <button className="btn btn-primary btn-lg px-4">Get Started</button>
                <button className="btn btn-outline-light btn-lg px-4">Learn More</button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <div 
                  className="rounded-3 p-5 d-flex align-items-center justify-content-center"
                  style={{ 
                    background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
                    height: '400px'
                  }}
                >
                  <h3 className="text-white">Innovation Visualization</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Expertise</h2>
            <p className="lead" style={{ color: '#cccccc' }}>
              From regulated organizations to high-growth teams, we convert domain complexity into credible, tangible digital outcomes.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div 
                className="card h-100 border-0 p-4"
                style={{ backgroundColor: '#1a1a3a' }}
              >
                <div className="card-body text-center">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #667eea, #764ba2)' }}
                  >
                    <i className="fas fa-cube text-white fs-2"></i>
                  </div>
                  <h4 className="card-title text-white mb-3">Web3 Solutions</h4>
                  <p className="card-text" style={{ color: '#cccccc' }}>
                    Blockchain-based solutions that bring transparency, trust, and innovation to your business ecosystem.
                  </p>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setCurrentPage('web3')}
                  >
                    Explore Web3
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div 
                className="card h-100 border-0 p-4"
                style={{ backgroundColor: '#1a1a3a' }}
              >
                <div className="card-body text-center">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #f093fb, #f5576c)' }}
                  >
                    <i className="fas fa-globe text-white fs-2"></i>
                  </div>
                  <h4 className="card-title text-white mb-3">Web2 Applications</h4>
                  <p className="card-text" style={{ color: '#cccccc' }}>
                    Scalable web and mobile applications that deliver exceptional user experiences and drive growth.
                  </p>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setCurrentPage('web2')}
                  >
                    Explore Web2
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div 
                className="card h-100 border-0 p-4"
                style={{ backgroundColor: '#1a1a3a' }}
              >
                <div className="card-body text-center">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: '80px', height: '80px', background: 'linear-gradient(45deg, #4facfe, #00f2fe)' }}
                  >
                    <i className="fas fa-brain text-white fs-2"></i>
                  </div>
                  <h4 className="card-title text-white mb-3">AI Solutions</h4>
                  <p className="card-text" style={{ color: '#cccccc' }}>
                    Transform data into actionable intelligence with our cutting-edge AI and machine learning platforms.
                  </p>
                  <button 
                    className="btn btn-outline-primary"
                    onClick={() => setCurrentPage('ai')}
                  >
                    Explore AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
export default HomePage;