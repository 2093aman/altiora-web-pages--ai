import React, { useState, useEffect } from 'react';
import p1 from '../assets/1.webp';
import p2 from '../assets/2.webp';
import p3 from '../assets/3.webp';
import p4 from '../assets/4.webp';

{/* Add this section to your AIPage.jsx */}
const SolutionsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const slides = [
        {
            title: "Making Website Bug-Free with AI",
            image: p4,
            description: "Altiora Infotech was interested in creating a bug tracker that is fast, modern, and automated to enable the QA teams of businesses to report bugs in a quick manner on both web and mobile platforms. It aimed at establishing a clean interface with minimal friction allowing the QA engineers to spend more time on tracking down errors as opposed to wrestling with reporting applications. Through AI automation, the platform reduces the repetitiveness of duties, enhances accuracy of reporting and saves a lot of time to log and fix problems.",
            stats: [
                { value: "1K+", label: "Bugs logged" },
                { value: "1K", label: "Users" },
                { value: "1M", label: "Request Server" }
            ]
        },
        {
            title: "AI-Powered Customer Support System",
            image: p2,
            description: "Implemented an intelligent customer support platform that uses natural language processing to understand and respond to customer queries automatically. The system learns from interactions and improves response accuracy over time, reducing response time by 70% and improving customer satisfaction significantly.",
            stats: [
                { value: "5K+", label: "Queries Handled" },
                { value: "2K", label: "Active Users" },
                { value: "95%", label: "Accuracy Rate" }
            ]
        },
        {
            title: "Predictive Analytics for E-commerce",
            image: p3,
            description: "Developed an AI-driven predictive analytics solution that helps e-commerce businesses forecast demand, optimize inventory, and personalize customer experiences. The platform analyzes historical data and real-time trends to provide actionable insights that drive sales and reduce operational costs.",
            stats: [
                { value: "3K+", label: "Products Tracked" },
                { value: "500+", label: "Clients" },
                { value: "40%", label: "Cost Reduction" }
            ]
        },
        {
            title: "Automated Content Generation Platform",
            image: p1,
            description: "Created an advanced AI content generation system that produces high-quality marketing copy, product descriptions, and social media content. The platform uses machine learning to understand brand voice and generates content that resonates with target audiences while maintaining consistency across all channels.",
            stats: [
                { value: "10K+", label: "Content Pieces" },
                { value: "800+", label: "Brands" },
                { value: "85%", label: "Time Saved" }
            ]
        }
    ];

    // Auto-rotate carousel every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);

        return () => clearInterval(timer);
    }, [slides.length]);

    // Handle touch events for mobile swipe
    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 75) {
            nextSlide();
        }
        if (touchStart - touchEnd < -75) {
            prevSlide();
        }
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="py-5" style={{ backgroundColor: '#060615' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4" style={{ 
                        color: '#ffffff',
                        fontSize: '2.5rem',
                        lineHeight: '1.3'
                    }}>
                        Here's How Altiora's AI Solutions and Services Help Businesses Like Yours
                    </h2>
                </div>

                {/* Carousel Container */}
                <div 
                    className="position-relative"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ 
                        userSelect: 'none',
                        WebkitUserSelect: 'none'
                    }}
                >
                    {/* Main Card */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)',
                            borderRadius: '30px',
                            padding: '3rem',
                            position: 'relative',
                            overflow: 'hidden',
                            minHeight: '500px'
                        }}
                    >
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            style={{
                                position: 'absolute',
                                left: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                color: '#ffffff',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            }}
                        >
                            ‹
                        </button>

                        <button
                            onClick={nextSlide}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                background: 'rgba(255, 255, 255, 0.1)',
                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '50%',
                                width: '50px',
                                height: '50px',
                                color: '#ffffff',
                                fontSize: '1.5rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                            }}
                        >
                            ›
                        </button>

                        {/* Content */}
                        <div className="row align-items-center g-4">
                            {/* Left Side - Image */}
                            <div className="col-lg-5">
                                <div style={{ position: 'relative' }}>
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '350px',
                                            background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                                            backgroundImage: `url(${slides[currentSlide].image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            borderRadius: '20px',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        }}
                                    >
                                        {/* Placeholder overlay */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: 'rgba(255, 255, 255, 0.7)',
                                                fontSize: '1rem',
                                                fontWeight: '600',
                                                textAlign: 'center'
                                            }}
                                        >
                                        </div>
                                    </div>

                                    {/* Stats Cards */}
                                    <div className="d-flex gap-3 mt-4 justify-content-center flex-wrap">
                                        {slides[currentSlide].stats.map((stat, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    background: 'rgba(255, 255, 255, 0.1)',
                                                    border: '2px solid rgba(255, 255, 255, 0.2)',
                                                    borderRadius: '15px',
                                                    padding: '1rem 1.5rem',
                                                    textAlign: 'center',
                                                    backdropFilter: 'blur(10px)',
                                                    flex: '1',
                                                    minWidth: '100px'
                                                }}
                                            >
                                                <div style={{
                                                    fontSize: '1.5rem',
                                                    fontWeight: 'bold',
                                                    color: '#ffffff',
                                                    marginBottom: '0.25rem'
                                                }}>
                                                    {stat.value}
                                                </div>
                                                <div style={{
                                                    fontSize: '0.85rem',
                                                    color: 'rgba(255, 255, 255, 0.8)'
                                                }}>
                                                    {stat.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Content */}
                            <div className="col-lg-7">
                                <div style={{ paddingLeft: '2rem' }}>
                                    <h3 
                                        className="mb-4" 
                                        style={{ 
                                            color: '#64B5F6',
                                            fontSize: '2rem',
                                            fontWeight: '600',
                                            lineHeight: '1.3'
                                        }}
                                    >
                                        {slides[currentSlide].title}
                                    </h3>
                                    <p style={{ 
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        fontSize: '1.05rem',
                                        lineHeight: '1.8',
                                        textAlign: 'justify'
                                    }}>
                                        {slides[currentSlide].description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Navigation */}
                    <div className="d-flex justify-content-center mt-4 gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                style={{
                                    width: currentSlide === index ? '40px' : '12px',
                                    height: '12px',
                                    borderRadius: '6px',
                                    border: 'none',
                                    background: currentSlide === index 
                                        ? 'linear-gradient(135deg, #64B5F6 0%, #2196F3 100%)'
                                        : 'rgba(100, 181, 246, 0.3)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (currentSlide !== index) {
                                        e.currentTarget.style.background = 'rgba(100, 181, 246, 0.6)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (currentSlide !== index) {
                                        e.currentTarget.style.background = 'rgba(100, 181, 246, 0.3)';
                                    }
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Responsive CSS */}
            <style>{`
                @media (max-width: 992px) {
                    div[style*="paddingLeft: '2rem'"] {
                        padding-left: 0 !important;
                        margin-top: 2rem;
                    }
                }

                @media (max-width: 768px) {
                    button[style*="position: absolute"] {
                        width: 40px !important;
                        height: 40px !important;
                        font-size: 1.2rem !important;
                    }
                    
                    div[style*="minHeight: '500px'"] {
                        padding: 1.5rem !important;
                    }

                    h3[style*="fontSize: '2rem'"] {
                        font-size: 1.5rem !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default SolutionsCarousel;