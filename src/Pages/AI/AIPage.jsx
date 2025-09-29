import React from 'react'
import './AIPage.css';
import aiImage from '../../assets/ai.jpg';

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

        {/* Why AI is Important Section */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">Why AI is Critical for Modern Business</h2>
                    <p className="lead" style={{ color: '#cccccc', maxWidth: '900px', margin: '0 auto' }}>
                        Artificial Intelligence isn't just the future—it's the present. Companies leveraging AI 
                        are seeing unprecedented growth, efficiency, and competitive advantages.
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
                            <h4 className="text-white mb-3">Boost Productivity by 40%</h4>
                            <p style={{ color: '#cccccc' }}>
                                AI automates repetitive tasks, allowing your team to focus on strategic initiatives 
                                and creative problem-solving. Studies show 40% productivity increases across industries.
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
                            <h4 className="text-white mb-3">Predictive Analytics</h4>
                            <p style={{ color: '#cccccc' }}>
                                Make data-driven decisions with AI-powered insights. Predict market trends, 
                                customer behavior, and potential issues before they become problems.
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
                            <h4 className="text-white mb-3">24/7 Customer Support</h4>
                            <p style={{ color: '#cccccc' }}>
                                AI chatbots and virtual assistants provide instant customer support around the clock, 
                                improving satisfaction while reducing operational costs.
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
                            <h4 className="text-white mb-3">Enhanced Security</h4>
                            <p style={{ color: '#cccccc' }}>
                                AI-powered security systems detect threats in real-time, protecting your business 
                                from cyber attacks and fraud with advanced pattern recognition.
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
                            <h4 className="text-white mb-3">Personalized Experiences</h4>
                            <p style={{ color: '#cccccc' }}>
                                Deliver personalized customer experiences at scale. AI analyzes user behavior 
                                to provide tailored recommendations and content.
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
                            <h4 className="text-white mb-3">Cost Reduction</h4>
                            <p style={{ color: '#cccccc' }}>
                                Reduce operational costs by up to 30% through intelligent automation, 
                                optimized resource allocation, and streamlined processes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* AI Solutions We Offer */}
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">AI Solutions We Deliver</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        From concept to deployment, we build AI solutions that drive real business value
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-comments" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">AI Chatbots & Virtual Assistants</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Intelligent conversational AI that handles customer queries, bookings, and support.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    Explore Chatbot Solutions
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-search" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Computer Vision & Image Recognition</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Advanced image processing for quality control, object detection, and visual analysis.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    See Vision AI Demos
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-brain" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Machine Learning Models</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Custom ML models for prediction, classification, and pattern recognition.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    Build Custom ML Models
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-chart-bar" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Predictive Analytics</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Data-driven insights and forecasting to make informed business decisions.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    Get Analytics Dashboard
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-language" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Natural Language Processing</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Text analysis, sentiment analysis, and language understanding capabilities.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    Explore NLP Solutions
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-cogs" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Process Automation</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Intelligent automation for workflows, document processing, and operations.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    Automate Your Processes
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-microphone" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Speech Recognition & Voice AI</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Voice-activated systems and speech-to-text applications for accessibility.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    Build Voice Applications
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="ai-solution-card h-100 border border-primary p-4" 
                             style={{ backgroundColor: '#1a1a3a', borderRadius: '15px' }}>
                            <div className="card-body text-center">
                                <div className="mb-4">
                                    <i className="fas fa-star" style={{ fontSize: '3rem', color: '#ffc107' }}></i>
                                </div>
                                <h4 className="card-title text-white mb-3">Recommendation Systems</h4>
                                <p className="card-text mb-4" style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                    Personalized recommendation engines to boost engagement and sales.
                                </p>
                                <button className="btn btn-primary w-100" style={{ borderRadius: '10px' }}>
                                    Create Recommendation Engine
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-5" style={{ backgroundColor: '#1a1a3a' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4">Industries We Transform with AI</h2>
                    <p className="lead" style={{ color: '#cccccc' }}>
                        AI solutions tailored for specific industry needs and challenges
                    </p>
                </div>
                
                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <div className="industry-card text-center p-4" style={{ backgroundColor: '#060615', borderRadius: '15px' }}>
                            <i className="fas fa-heartbeat" style={{ fontSize: '3rem', color: '#ff6b6b', marginBottom: '1rem' }}></i>
                            <h5 className="text-white mb-2">Healthcare</h5>
                            <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Medical imaging, diagnosis assistance, patient management
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="industry-card text-center p-4" style={{ backgroundColor: '#060615', borderRadius: '15px' }}>
                            <i className="fas fa-shopping-cart" style={{ fontSize: '3rem', color: '#4ecdc4', marginBottom: '1rem' }}></i>
                            <h5 className="text-white mb-2">E-commerce</h5>
                            <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Product recommendations, demand forecasting, fraud detection
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="industry-card text-center p-4" style={{ backgroundColor: '#060615', borderRadius: '15px' }}>
                            <i className="fas fa-university" style={{ fontSize: '3rem', color: '#ffd93d', marginBottom: '1rem' }}></i>
                            <h5 className="text-white mb-2">Finance</h5>
                            <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Risk assessment, algorithmic trading, compliance monitoring
                            </p>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="industry-card text-center p-4" style={{ backgroundColor: '#060615', borderRadius: '15px' }}>
                            <i className="fas fa-graduation-cap" style={{ fontSize: '3rem', color: '#a8e6cf', marginBottom: '1rem' }}></i>
                            <h5 className="text-white mb-2">Education</h5>
                            <p style={{ color: '#cccccc', fontSize: '0.9rem' }}>
                                Personalized learning, student assessment, content creation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-5" style={{ backgroundColor: '#060615' }}>
            <div className="container">
                <div className="text-center">
                    <h2 className="display-6 fw-bold mb-4">Ready to Embrace the AI Revolution?</h2>
                    <p className="lead mb-4" style={{ color: '#cccccc' }}>
                        Don't let your competitors get ahead. Start your AI transformation today 
                        and unlock unprecedented growth opportunities.
                    </p>
                    <div className="d-flex gap-3 justify-content-center">
                        <button className="btn btn-primary btn-lg px-5">Start AI Project</button>
                        <button className="btn btn-outline-light btn-lg px-5">Book AI Consultation</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AIPage;