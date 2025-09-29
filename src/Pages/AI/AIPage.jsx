import React from 'react'
import './AIPage.css';
import aiImage from '../../assets/ai.jpg';
import AICorouselSection from '../../Components/AICorousel';
import SolutionsCarousel from '../../Components/SolutionsCarousel';

const AIPage = () => (
    <div style={{ backgroundColor: '#060615', minHeight: '100vh', color: '#ffffff' }}>
        {/* Hero Section */}
        <section className="py-5" style={{ background: 'linear-gradient(135deg, #060620 0%, #1a1a3a 100%)' }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Section - First Column */}
                    <div className="col-lg-6">
                        <h1 className="display-3 fw-bold mb-4">
                            Transform Your Business with
                            <br />
                            <span className="text-primary display-6 ai-gradient-text">Artificial Intelligence</span>
                        </h1>
                        <p className="lead mb-4" style={{ color: '#cccccc' }}>
                            Harness the power of AI to automate processes, gain insights, and drive innovation.
                            From machine learning to natural language processing, we build intelligent solutions
                            that give your business a competitive edge.
                        </p>
                        <div className="d-flex gap-3">
                            <button className="btn btn-warning btn-lg px-4 ai-cta-btn">Start AI Journey</button>
                            <button className="btn btn-outline-light btn-lg px-4">Book Consultation</button>
                        </div>
                    </div>

                    <div className="col-lg-6  p-4 rounded-4">
                        <img
                            src={aiImage}
                            alt="AI Illustration"
                            className="img-fluid"
                            style={{ borderRadius: '20px', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)' }}
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Statistics Section - Add this to your AIPage.jsx */}
        <section className="py-5" style={{ backgroundColor: '#060615' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#ffffff' }}>
                        Empowering Global Innovators Across Industries
                    </h2>
                </div>

                <div className="row g-4">
                    {/* Years of Business */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="stats-card text-center p-4"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                height: '100%'
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
                            <h2 className="display-3 fw-bold mb-3" style={{
                                color: '#64B5F6',
                                fontWeight: '700'
                            }}>
                                5+
                            </h2>
                            <p className="mb-0" style={{
                                color: '#ffffff',
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}>
                                Years of Business
                            </p>
                        </div>
                    </div>

                    {/* Customers */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="stats-card text-center p-4"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                height: '100%'
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
                            <h2 className="display-3 fw-bold mb-3" style={{
                                color: '#64B5F6',
                                fontWeight: '700'
                            }}>
                                120+
                            </h2>
                            <p className="mb-0" style={{
                                color: '#ffffff',
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}>
                                Customers
                            </p>
                        </div>
                    </div>

                    {/* Countries */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="stats-card text-center p-4"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                height: '100%'
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
                            <h2 className="display-3 fw-bold mb-3" style={{
                                color: '#64B5F6',
                                fontWeight: '700'
                            }}>
                                20+
                            </h2>
                            <p className="mb-0" style={{
                                color: '#ffffff',
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}>
                                Countries
                            </p>
                        </div>
                    </div>

                    {/* Industries Choose Us */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="stats-card text-center p-4"
                            style={{
                                backgroundColor: '#1a1a3a',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                height: '100%'
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
                            <h2 className="display-3 fw-bold mb-3" style={{
                                color: '#64B5F6',
                                fontWeight: '700'
                            }}>
                                80%
                            </h2>
                            <p className="mb-0" style={{
                                color: '#ffffff',
                                fontSize: '1.1rem',
                                fontWeight: '500'
                            }}>
                                Industries Choose Us
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <AICorouselSection />

        {/* Why AI is Important Section */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">Why AI-First Product Engineering?</h2>
                    <p className="lead" style={{ color: '#cccccc', maxWidth: '900px', margin: '0 auto' }}>
                        The modern day businesses require smart, flexible and scalable solutions.
                        The purpose of AI-powered products is to bring life to processes, giving services and experiences to a higher level in a scaled version.
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-lg-4 col-md-6">
                        <div className="ai-benefit-card h-100 p-4" style={{ backgroundColor: '#1a1a3a', borderRadius: '20px' }}>
                            <div className="ai-icon-container mb-4">
                                <div className="ai-icon-wrapper">
                                    <i className="fas fa-chart-line" style={{ fontSize: '3rem', color: '#00ff88' }}></i>
                                </div>
                            </div>
                            <h4 className="text-white mb-3">Scalability</h4>
                            <p style={{ color: '#cccccc' }}>
                                AI driven architecture adapt to growing workloads and dynamic demands
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="ai-benefit-card h-100 p-4" style={{ backgroundColor: '#1a1a3a', borderRadius: '20px' }}>
                            <div className="ai-icon-container mb-4">
                                <div className="ai-icon-wrapper">
                                    <i className="fas fa-eye" style={{ fontSize: '3rem', color: '#ff6b6b' }}></i>
                                </div>
                            </div>
                            <h4 className="text-white mb-3">Faster time to Market.</h4>
                            <p style={{ color: '#cccccc' }}>
                                AI based prototyping enhances product development acceleration and deployments.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="ai-benefit-card h-100 p-4" style={{ backgroundColor: '#1a1a3a', borderRadius: '20px' }}>
                            <div className="ai-icon-container mb-4">
                                <div className="ai-icon-wrapper">
                                    <i className="fas fa-robot" style={{ fontSize: '3rem', color: '#4ecdc4' }}></i>
                                </div>
                            </div>
                            <h4 className="text-white mb-3">Cost Optimization</h4>
                            <p style={{ color: '#cccccc' }}>
                                The AI automation is less costly and highly efficient.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="ai-benefit-card h-100 p-4" style={{ backgroundColor: '#1a1a3a', borderRadius: '20px' }}>
                            <div className="ai-icon-container mb-4">
                                <div className="ai-icon-wrapper">
                                    <i className="fas fa-shield-alt" style={{ fontSize: '3rem', color: '#a8e6cf' }}></i>
                                </div>
                            </div>
                            <h4 className="text-white mb-3">Bridging the Innovation Gap</h4>
                            <p style={{ color: '#cccccc' }}>
                                The AI-based intelligence is a step forward in the performance of the classical engineering paradigms.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="ai-benefit-card h-100 p-4" style={{ backgroundColor: '#1a1a3a', borderRadius: '20px' }}>
                            <div className="ai-icon-container mb-4">
                                <div className="ai-icon-wrapper">
                                    <i className="fas fa-users" style={{ fontSize: '3rem', color: '#ff9ff3' }}></i>
                                </div>
                            </div>
                            <h4 className="text-white mb-3">Quality Assurance</h4>
                            <p style={{ color: '#cccccc' }}>
                                Continuous learning models improve accuracy and system reliability.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="ai-benefit-card h-100 p-4" style={{ backgroundColor: '#1a1a3a', borderRadius: '20px' }}>
                            <div className="ai-icon-container mb-4">
                                <div className="ai-icon-wrapper">
                                    <i className="fas fa-dollar-sign" style={{ fontSize: '3rem', color: '#ffd93d' }}></i>
                                </div>
                            </div>
                            <h4 className="text-white mb-3">Personalization</h4>
                            <p style={{ color: '#cccccc' }}>
                                AI, in turn, converts data into smooth interactive experiences to enhance interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* AI Solutions We Offer */}
        {/* Add this section to your AIPage.jsx */}
        <section className="py-5" style={{ backgroundColor: '#060615' }}>
            <div className="container">
                <div className="mb-5">
                    <h2 className="display-5 fw-bold mb-3" style={{ color: '#ffffff' }}>
                        Our AI-First Approach
                    </h2>
                    <p style={{ color: '#cccccc', fontSize: '1.1rem' }}>
                        An AI-assisted strategic product development model that is intelligent, scalable, and future-ready.
                    </p>
                </div>

                <div className="row g-4">
                    {/* Step 1 - Discover & Define */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="approach-card h-100 p-4"
                            style={{
                                background: 'linear-gradient(135deg, #2a2a4a 0%, #1a1a3a 100%)',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
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
                            {/* Arrow Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                color: '#64B5F6',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}>
                                »
                            </div>

                            {/* Icon */}
                            <div className="mb-4">
                                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                                    {/* Person icon */}
                                    <circle cx="50" cy="35" r="12" fill="#ffc107" />
                                    <path d="M35 70 Q35 55 50 55 Q65 55 65 70 L65 75 L35 75 Z" fill="#ffc107" />
                                    {/* Lasso/rope */}
                                    <ellipse cx="60" cy="25" rx="15" ry="8" fill="none" stroke="#ffc107" strokeWidth="2" />
                                </svg>
                            </div>

                            {/* Step Label */}
                            <div className="mb-3" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Step 1
                            </div>

                            {/* Title */}
                            <h4 className="mb-3" style={{
                                color: '#ffffff',
                                fontSize: '1.4rem',
                                fontWeight: '600'
                            }}>
                                Discover & Define
                            </h4>

                            {/* Description */}
                            <p style={{
                                color: '#cccccc',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                marginBottom: 0
                            }}>
                                Intelligent product decisions are informed by AI-based research and analytics.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 - Build & Optimize */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="approach-card h-100 p-4"
                            style={{
                                background: 'linear-gradient(135deg, #2a2a4a 0%, #1a1a3a 100%)',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
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
                            {/* Arrow Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                color: '#64B5F6',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}>
                                »
                            </div>

                            {/* Icon */}
                            <div className="mb-4">
                                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                                    {/* Hand with AI chip */}
                                    <path d="M30 60 Q30 50 40 50 L45 50 L45 35 Q45 30 50 30 Q55 30 55 35 L55 50 L60 50 Q70 50 70 60 L70 75 Q70 80 65 80 L35 80 Q30 80 30 75 Z" fill="#ffc107" />
                                    {/* AI chip symbol */}
                                    <rect x="43" y="55" width="14" height="14" rx="2" fill="#1a1a3a" />
                                    <text x="50" y="66" fontSize="10" fill="#ffc107" textAnchor="middle" fontWeight="bold">AI</text>
                                </svg>
                            </div>

                            {/* Step Label */}
                            <div className="mb-3" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Step 2
                            </div>

                            {/* Title */}
                            <h4 className="mb-3" style={{
                                color: '#ffffff',
                                fontSize: '1.4rem',
                                fontWeight: '600'
                            }}>
                                Build & Optimize
                            </h4>

                            {/* Description */}
                            <p style={{
                                color: '#cccccc',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                marginBottom: 0
                            }}>
                                Scalable AI models and automation will guarantee an efficient development.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 - Deliver & Scale */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="approach-card h-100 p-4"
                            style={{
                                background: 'linear-gradient(135deg, #2a2a4a 0%, #1a1a3a 100%)',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
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
                            {/* Arrow Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                color: '#64B5F6',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}>
                                »
                            </div>

                            {/* Icon */}
                            <div className="mb-4">
                                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                                    {/* Hand holding box */}
                                    <path d="M30 50 Q30 45 35 45 L40 45 L40 35 Q40 32 43 32 Q46 32 46 35 L46 45 L50 45 L50 35 Q50 32 53 32 Q56 32 56 35 L56 45 L60 45 Q65 45 65 50 L65 70 Q65 75 60 75 L35 75 Q30 75 30 70 Z" fill="#ffc107" />
                                    {/* Shopping bag/box on hand */}
                                    <rect x="38" y="52" width="24" height="18" rx="2" fill="#1a1a3a" />
                                    <path d="M45 52 L45 48 Q45 46 47 46 L53 46 Q55 46 55 48 L55 52" stroke="#ffc107" strokeWidth="2" fill="none" />
                                </svg>
                            </div>

                            {/* Step Label */}
                            <div className="mb-3" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Step 3
                            </div>

                            {/* Title */}
                            <h4 className="mb-3" style={{
                                color: '#ffffff',
                                fontSize: '1.4rem',
                                fontWeight: '600'
                            }}>
                                Deliver & Scale
                            </h4>

                            {/* Description */}
                            <p style={{
                                color: '#cccccc',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                marginBottom: 0
                            }}>
                                Agile iterations and AI testing promote a smooth development.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 - Evolve & Innovate */}
                    <div className="col-lg-3 col-md-6">
                        <div
                            className="approach-card h-100 p-4"
                            style={{
                                background: 'linear-gradient(135deg, #2a2a4a 0%, #1a1a3a 100%)',
                                borderRadius: '20px',
                                border: '2px solid rgba(102, 126, 234, 0.3)',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer'
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
                            {/* Arrow Icon */}
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                color: '#64B5F6',
                                fontSize: '2rem',
                                fontWeight: 'bold'
                            }}>
                                »
                            </div>

                            {/* Icon */}
                            <div className="mb-4">
                                <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                                    <circle cx="50" cy="50" r="45" fill="#ffc107" opacity="0.1" />
                                    {/* Lightbulb with gears */}
                                    <ellipse cx="50" cy="55" rx="18" ry="20" fill="#ffc107" />
                                    <rect x="45" y="72" width="10" height="6" fill="#ffc107" />
                                    <rect x="43" y="78" width="14" height="3" fill="#ffc107" />
                                    {/* Bulb filament */}
                                    <path d="M50 45 L50 35 M45 40 L55 40" stroke="#1a1a3a" strokeWidth="2" />
                                    {/* Gear symbols */}
                                    <circle cx="60" cy="35" r="6" fill="#ffc107" />
                                    <circle cx="60" cy="35" r="3" fill="#1a1a3a" />
                                    <circle cx="40" cy="38" r="5" fill="#ffc107" />
                                    <circle cx="40" cy="38" r="2.5" fill="#1a1a3a" />
                                </svg>
                            </div>

                            {/* Step Label */}
                            <div className="mb-3" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Step 4
                            </div>

                            {/* Title */}
                            <h4 className="mb-3" style={{
                                color: '#ffffff',
                                fontSize: '1.4rem',
                                fontWeight: '600'
                            }}>
                                Evolve & Innovate
                            </h4>

                            {/* Description */}
                            <p style={{
                                color: '#cccccc',
                                fontSize: '0.95rem',
                                lineHeight: '1.6',
                                marginBottom: 0
                            }}>
                                Constant AI upgrades ensure that your product is in the future.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SolutionsCarousel />
    </div>
);

export default AIPage;