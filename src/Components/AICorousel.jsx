import React, { useState, useEffect } from 'react';

{/* Add this section to your AIPage.jsx */}
const AICarouselSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const slides = [
        {
            title: "AI-Infused Web & Mobile Applications",
            image: "https://www.addevice.io/storage/ckeditor/uploads/images/65f82dcd3866a_ai.in.mobile.app.development.1920.1080.png",
            description: "Intelligent applications powered by AI"
        },
        {
            title: "Cloud & DevOps for AI",
            image: "https://media.licdn.com/dms/image/v2/D4D12AQGal6nT6qi1KA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1715878943603?e=2147483647&v=beta&t=kcptMbL5yEFHy6mVddfJMX-QMjvyzAAisgu3R41ggMw",
            description: "Scalable cloud infrastructure for AI solutions"
        },
        {
            title: "Agentic AI solutions",
            image: "https://www.mooglelabs.com/uploads/posts/1745216336Agentic%20Artificial%20Intelligence%20Solutions.jpg",
            description: "Transform data into actionable insights"
        },
        {
            title: "End to end AI Software Development",
            image: "https://cdn.prod.website-files.com/64f989999025f3e47402a969/6800915f388a333a54536c58_(2)%20How%20AI%20is%20Transforming%20the%20Software%20Development%20Lifecycle%20(SDLC).png", 
            description: "Advanced ML models for business automation"
        },
        {
            title: "Data Science & Analytics",
            image: "path/to/your/image5.jpg",
            description: "Data-driven decisions with AI analytics"
        },
    ];

    // Auto-rotate carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

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
            // Swipe left
            nextSlide();
        }

        if (touchStart - touchEnd < -75) {
            // Swipe right
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

    // Calculate which slides to show (current + 2 more)
    const getVisibleSlides = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            visible.push(slides[(currentSlide + i) % slides.length]);
        }
        return visible;
    };

    return (
        <section className="py-5" style={{ backgroundColor: '#060615', overflow: 'hidden' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#ffffff' }}>
                        Why a Well-Developed Platform Matters
                    </h2>
                    <p className="lead mx-auto" style={{ 
                        color: '#cccccc', 
                        maxWidth: '900px',
                        lineHeight: '1.8'
                    }}>
                        Today's Business thrive on intelligence, adaptability and scale. AI – based solutions simplify management, 
                        improve decision – making, and provide hassle free user experiences – creating efficiency and unlocking a sustainable growth.
                    </p>
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
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'rgba(255, 193, 7, 0.2)',
                            border: '2px solid rgba(255, 193, 7, 0.5)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            color: '#ffc107',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 193, 7, 0.4)';
                            e.currentTarget.style.borderColor = '#ffc107';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 193, 7, 0.2)';
                            e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.5)';
                        }}
                    >
                        ‹
                    </button>

                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '-20px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'rgba(255, 193, 7, 0.2)',
                            border: '2px solid rgba(255, 193, 7, 0.5)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            color: '#ffc107',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 193, 7, 0.4)';
                            e.currentTarget.style.borderColor = '#ffc107';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 193, 7, 0.2)';
                            e.currentTarget.style.borderColor = 'rgba(255, 193, 7, 0.5)';
                        }}
                    >
                        ›
                    </button>

                    {/* Slides Container */}
                    <div className="row g-4 justify-content-center">
                        {getVisibleSlides().map((slide, index) => (
                            <div 
                                key={index} 
                                className="col-lg-4 col-md-6"
                                style={{
                                    transition: 'all 0.5s ease',
                                    opacity: index === 0 ? 1 : 0.7
                                }}
                            >
                                <div
                                    style={{
                                        backgroundColor: '#1a1a3a',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
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
                                    {/* Image */}
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '250px',
                                            background: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,
                                            backgroundImage: `url(${slide.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            position: 'relative'
                                        }}
                                    >
                                        {/* Placeholder overlay if no image */}
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                color: 'rgba(255, 255, 255, 0.5)',
                                                fontSize: '1rem',
                                                fontWeight: '600'
                                            }}
                                        >
                                            Add Image Here
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4">
                                        <h4 
                                            className="mb-3" 
                                            style={{ 
                                                color: '#64B5F6',
                                                fontSize: '1.3rem',
                                                fontWeight: '600',
                                                minHeight: '60px'
                                            }}
                                        >
                                            {slide.title}
                                        </h4>
                                        <p style={{ 
                                            color: '#cccccc',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.6'
                                        }}>
                                            {slide.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className="d-flex justify-content-center mt-5 gap-2">
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
                                        ? 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)'
                                        : 'rgba(255, 193, 7, 0.3)',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    if (currentSlide !== index) {
                                        e.currentTarget.style.background = 'rgba(255, 193, 7, 0.6)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (currentSlide !== index) {
                                        e.currentTarget.style.background = 'rgba(255, 193, 7, 0.3)';
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
                    .col-lg-4:not(:first-child) {
                        display: none;
                    }
                }

                @media (max-width: 768px) {
                    button[style*="position: absolute"] {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default AICarouselSection;