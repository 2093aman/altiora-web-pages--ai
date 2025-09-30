// src/pages/AIPage.jsx (or wherever you keep this page)
import React, { useEffect } from 'react';
import './AIPage.css';
import AICorouselSection from '../../Components/AICorousel';
import SolutionsCarousel from '../../Components/SolutionsCarousel';
import calenderly1 from '../../assets/copy2.webp'; // update path if needed

const AIPage = () => {
  // Load Calendly embed script once
  useEffect(() => {
    if (document.querySelector('script[data-calendly]')) return;
    const s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    s.setAttribute('data-calendly', 'true');
    document.body.appendChild(s);
  }, []);

  return (
    <div style={{ backgroundColor: '#060615', minHeight: '100vh', color: '#ffffff' }}>
      <div className="ai-hero">
        {/* Hero Section */}
        <section
          className="py-5"
          style={{
            background: 'linear-gradient(135deg, #06061517 0%, #1a1a3a9c 100%)',
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              {/* Text */}
              <div className="col-lg-6">
                <h1 className="display-3 fw-bold mb-4">
                  Leading the way in AI-Powered Transformation
                </h1>
                <p className="lead mb-4" style={{ color: '#cccccc' }}>
                  Partner with us to harness AI-driven innovation and intelligent automation,
                  unlocking new opportunities for growth and lasting business impact.
                </p>
                <div className="d-flex gap-3">
                  {/* <button className="btn btn-warning btn-lg px-4 ai-cta-btn">Start AI Journey</button>
                  <button className="btn btn-outline-light btn-lg px-4">Book Consultation</button> */}
                   <a className="btn btn-gradient btn-lg px-4" href="https://www.altiorainfotech.com/developers">
                 Start AI Journey
                </a>
                <a className="btn btn-outline-light btn-lg px-4" href="https://www.altiorainfotech.com/contact">
                  Contact Us
                </a>
                </div>
              </div>
              {/* Visual holder */}
              <div className="col-lg-6 p-4 rounded-4">{/* add illustration/video here if needed */}</div>
            </div>
          </div>
        </section>
      </div>

      {/* Statistics */}
      <section className="py-5" style={{ backgroundColor: '#060615' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Empowering Global Innovators Across Industries</h2>
          </div>
          <div className="row g-4">
            {[
              { value: '5+', label: 'Years of Business' },
              { value: '120+', label: 'Customers' },
              { value: '20+', label: 'Countries' },
              { value: '80%', label: 'Industries Choose Us' },
            ].map((item, idx) => (
              <div className="col-lg-3 col-md-6" key={idx}>
                <div
                  className="stats-card text-center p-4"
                  style={{
                    backgroundColor: '#1a1a3a',
                    borderRadius: '20px',
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.8)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <h2 className="display-3 fw-bold mb-3" style={{ color: '#64B5F6', fontWeight: 700 }}>
                    {item.value}
                  </h2>
                  <p className="mb-0" style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 500 }}>
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AICorouselSection />

      {/* Why AI-First Product Engineering */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-4">Why AI-First Product Engineering?</h2>
            <p className="lead" style={{ color: '#cccccc', maxWidth: 900, margin: '0 auto' }}>
              Modern businesses need smart, flexible, and scalable solutions. AI-powered products elevate
              processes and experiences, helping teams move faster with confidence.
            </p>
          </div>

          <div className="row g-4">
            {[
              { title: 'Scalability', desc: 'AI-driven architectures adapt to growing workloads and dynamic demands.', icon: 'fas fa-chart-line', color: '#00ff88' },
              { title: 'Faster Time to Market', desc: 'AI-assisted prototyping accelerates development and deployments.', icon: 'fas fa-eye', color: '#ff6b6b' },
              { title: 'Cost Optimization', desc: 'Automation reduces ops cost while increasing throughput.', icon: 'fas fa-robot', color: '#4ecdc4' },
              { title: 'Bridging Innovation Gap', desc: 'AI outperforms classic paradigms on speed and accuracy.', icon: 'fas fa-shield-alt', color: '#a8e6cf' },
              { title: 'Quality Assurance', desc: 'Continuous learning improves accuracy and reliability.', icon: 'fas fa-users', color: '#ff9ff3' },
              { title: 'Personalization', desc: 'Turn data into fluid, tailored user journeys at scale.', icon: 'fas fa-dollar-sign', color: '#ffd93d' },
            ].map((b, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="ai-benefit-card h-100 p-4" style={{ backgroundColor: '#1a1a3a', borderRadius: 20 }}>
                  <div className="ai-icon-container mb-4">
                    <div className="ai-icon-wrapper">
                      <i className={b.icon} style={{ fontSize: '3rem', color: b.color }} />
                    </div>
                  </div>
                  <h4 className="text-white mb-3">{b.title}</h4>
                  <p style={{ color: '#cccccc' }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our AI-First Approach */}
      <section className="py-5" style={{ backgroundColor: '#060615' }}>
        <div className="container">
          <div className="mb-5">
            <h2 className="display-5 fw-bold mb-3">Our AI-First Approach</h2>
            <p style={{ color: '#cccccc', fontSize: '1.1rem' }}>
              A strategic, AI-assisted product model that is intelligent, scalable, and future-ready.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                step: 'Step 1',
                title: 'Discover & Define',
                desc: 'AI-based research and analytics inform decisive product moves.',
                svg: (
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                    <circle cx="50" cy="35" r="12" fill="#ffc107" />
                    <path d="M35 70 Q35 55 50 55 Q65 55 65 70 L65 75 L35 75 Z" fill="#ffc107" />
                    <ellipse cx="60" cy="25" rx="15" ry="8" fill="none" stroke="#ffc107" strokeWidth="2" />
                  </svg>
                ),
              },
              {
                step: 'Step 2',
                title: 'Build & Optimize',
                desc: 'Scalable models and automation power efficient delivery.',
                svg: (
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                    <path d="M30 60 Q30 50 40 50 L45 50 L45 35 Q45 30 50 30 Q55 30 55 35 L55 50 L60 50 Q70 50 70 60 L70 75 Q70 80 65 80 L35 80 Q30 80 30 75 Z" fill="#ffc107" />
                    <rect x="43" y="55" width="14" height="14" rx="2" fill="#1a1a3a" />
                    <text x="50" y="66" fontSize="10" fill="#ffc107" textAnchor="middle" fontWeight="bold">AI</text>
                  </svg>
                ),
              },
              {
                step: 'Step 3',
                title: 'Deliver & Scale',
                desc: 'Agile iterations and AI testing ensure smooth rollouts.',
                svg: (
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                    <path d="M30 50 Q30 45 35 45 L40 45 L40 35 Q40 32 43 32 Q46 32 46 35 L46 45 L50 45 L50 35 Q50 32 53 32 Q56 32 56 35 L56 45 L60 45 Q65 45 65 50 L65 70 Q65 75 60 75 L35 75 Q30 75 30 70 Z" fill="#ffc107" />
                    <rect x="38" y="52" width="24" height="18" rx="2" fill="#1a1a3a" />
                    <path d="M45 52 L45 48 Q45 46 47 46 L53 46 Q55 46 55 48 L55 52" stroke="#ffc107" strokeWidth="2" fill="none" />
                  </svg>
                ),
              },
              {
                step: 'Step 4',
                title: 'Evolve & Innovate',
                desc: 'Continuous AI upgrades keep you ahead.',
                svg: (
                  <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                    <ellipse cx="50" cy="55" rx="18" ry="20" fill="#ffc107" />
                    <rect x="45" y="72" width="10" height="6" fill="#ffc107" />
                    <rect x="43" y="78" width="14" height="3" fill="#ffc107" />
                    <path d="M50 45 L50 35 M45 40 L55 40" stroke="#1a1a3a" strokeWidth="2" />
                    <circle cx="60" cy="35" r="6" fill="#ffc107" />
                    <circle cx="60" cy="35" r="3" fill="#1a1a3a" />
                    <circle cx="40" cy="38" r="5" fill="#ffc107" />
                    <circle cx="40" cy="38" r="2.5" fill="#1a1a3a" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div className="col-lg-3 col-md-6" key={i}>
                <div
                  className="approach-card h-100 p-4"
                  style={{
                    background: 'linear-gradient(135deg, #2a2a4a 0%, #1a1a3a 100%)',
                    borderRadius: 20,
                    border: '2px solid rgba(102, 126, 234, 0.3)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.8)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(102, 126, 234, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.3)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ position: 'absolute', top: 20, right: 20, color: '#64B5F6', fontSize: '2rem', fontWeight: 'bold' }}>»</div>
                  <div className="mb-4">{card.svg}</div>
                  <div className="mb-2" style={{ color: '#cccccc', fontSize: '.9rem' }}>{card.step}</div>
                  <h4 className="mb-3" style={{ color: '#ffffff', fontSize: '1.2rem', fontWeight: 600 }}>{card.title}</h4>
                  <p style={{ color: '#cccccc', marginBottom: 0 }}>{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SolutionsCarousel />

      {/* Calendly Appointment Section */}
      <section className="appointment-section py-5" style={{ backgroundColor: '#0b0d22' }}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#ffffff' }}>
            Book an Appointment
          </h2>

          <div className="appointment-card position-relative mx-auto">
            <div className="row g-0 align-items-stretch">
              {/* Left: Calendly */}
              <div className="col-12 col-lg-6 d-flex">
                <div className="w-100">
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/altiorainfotech/30min"
                    style={{ width: '100%', minWidth: 0, height: 597 }}
                  />
                </div>
              </div>

              {/* Right: Image */}
              <div className="col-12 col-lg-6 d-flex">
                <img
                  src={calenderly1}
                  alt="Consultation illustration"
                  className="appointment-img flex-grow-1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AIPage;
