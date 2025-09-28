import React, { useState } from 'react';

const TechnologyStackSection = () => {
    const [activeTab, setActiveTab] = useState('frontend');

    const technologies = {
        frontend: {
            title: "Frontend Technologies",
            icon: "fas fa-paint-brush",
            description: "Modern, responsive user interfaces that deliver exceptional user experiences",
            techs: [
                { 
                    name: "React", 
                    icon: "fab fa-react", 
                    color: "#61DAFB", 
                    description: "Building dynamic user interfaces",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                { 
                    name: "Next.js", 
                    icon: "fas fa-chevron-right", 
                    color: "#000000", 
                    description: "Full-stack React framework",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                },
                { 
                    name: "Vue.js", 
                    icon: "fab fa-vuejs", 
                    color: "#4FC08D", 
                    description: "Progressive JavaScript framework",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                },
                { 
                    name: "Angular", 
                    icon: "fab fa-angular", 
                    color: "#DD0031", 
                    description: "Platform for web applications",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
                },
                { 
                    name: "TypeScript", 
                    icon: "fas fa-code", 
                    color: "#3178C6", 
                    description: "Typed JavaScript at scale",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                },
                { 
                    name: "Tailwind CSS", 
                    icon: "fas fa-palette", 
                    color: "#06B6D4", 
                    description: "Utility-first CSS framework",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                },
                { 
                    name: "SASS", 
                    icon: "fab fa-sass", 
                    color: "#CC6699", 
                    description: "CSS with superpowers",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                },
                { 
                    name: "Material-UI", 
                    icon: "fas fa-layer-group", 
                    color: "#0081CB", 
                    description: "React component library",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                }
            ]
        },
        backend: {
            title: "Backend Technologies",
            icon: "fas fa-server",
            description: "Robust server-side solutions that power your applications",
            techs: [
                { 
                    name: "Node.js", 
                    icon: "fab fa-node-js", 
                    color: "#339933", 
                    description: "JavaScript runtime environment",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                },
                { 
                    name: "Express.js", 
                    icon: "fas fa-route", 
                    color: "#000000", 
                    description: "Fast web framework for Node.js",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                },
                { 
                    name: "Python", 
                    icon: "fab fa-python", 
                    color: "#3776AB", 
                    description: "Versatile programming language",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                },
                { 
                    name: "Django", 
                    icon: "fas fa-cogs", 
                    color: "#092E20", 
                    description: "High-level Python web framework",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                },
                { 
                    name: "PHP", 
                    icon: "fab fa-php", 
                    color: "#777BB4", 
                    description: "Server-side scripting language",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                },
                { 
                    name: "Laravel", 
                    icon: "fas fa-gem", 
                    color: "#FF2D20", 
                    description: "Elegant PHP web framework",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"
                },
                { 
                    name: "Java", 
                    icon: "fab fa-java", 
                    color: "#ED8B00", 
                    description: "Enterprise-grade programming",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                },
                { 
                    name: "C#", 
                    icon: "fas fa-hashtag", 
                    color: "#239120", 
                    description: "Microsoft's versatile language",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
                }
            ]
        },
        database: {
            title: "Database Solutions",
            icon: "fas fa-database",
            description: "Scalable data storage and management systems",
            techs: [
                { 
                    name: "PostgreSQL", 
                    icon: "fas fa-elephant", 
                    color: "#336791", 
                    description: "Advanced relational database",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                },
                { 
                    name: "MySQL", 
                    icon: "fas fa-database", 
                    color: "#4479A1", 
                    description: "Popular relational database",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                },
                { 
                    name: "MongoDB", 
                    icon: "fas fa-leaf", 
                    color: "#47A248", 
                    description: "Document-based NoSQL database",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                },
                { 
                    name: "Redis", 
                    icon: "fas fa-memory", 
                    color: "#DC382D", 
                    description: "In-memory data structure store",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg"
                },
                { 
                    name: "Neon", 
                    icon: "fas fa-bolt", 
                    color: "#00E5FF", 
                    description: "Serverless PostgreSQL platform",
                    logo: "https://neon.tech/favicon/favicon.svg"
                },
                { 
                    name: "Supabase", 
                    icon: "fas fa-fire", 
                    color: "#3ECF8E", 
                    description: "Open-source Firebase alternative",
                    logo: "https://supabase.com/favicon/favicon-32x32.png"
                },
                { 
                    name: "Firebase", 
                    icon: "fas fa-fire-alt", 
                    color: "#FFCA28", 
                    description: "Google's app development platform",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                },
                { 
                    name: "DynamoDB", 
                    icon: "fas fa-stream", 
                    color: "#FF9900", 
                    description: "Amazon's NoSQL database service",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                }
            ]
        },
        mobileDevelopment: {
            title: "Mobile Development",
            icon: "fas fa-mobile-alt",
            description: "Cross-platform mobile applications for iOS and Android",
            techs: [
                { 
                    name: "React Native", 
                    icon: "fab fa-react", 
                    color: "#61DAFB", 
                    description: "Build mobile apps with React",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                },
                { 
                    name: "Flutter", 
                    icon: "fas fa-mobile", 
                    color: "#02569B", 
                    description: "Google's UI toolkit for natively compiled apps",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                },
                { 
                    name: "Swift", 
                    icon: "fas fa-swift", 
                    color: "#FA7343", 
                    description: "Powerful language for iOS development",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
                },
                { 
                    name: "Kotlin", 
                    icon: "fas fa-k", 
                    color: "#0095D5", 
                    description: "Modern language for Android development",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
                },
                { 
                    name: "Ionic", 
                    icon: "fas fa-ionic", 
                    color: "#3880FF", 
                    description: "Cross-platform mobile app framework",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg"
                },
                { 
                    name: "Xamarin", 
                    icon: "fas fa-x", 
                    color: "#3498DB", 
                    description: "Microsoft's mobile app platform",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg"
                },
                { 
                    name: "Cordova", 
                    icon: "fas fa-code-branch", 
                    color: "#E8E8E8", 
                    description: "Build mobile apps with HTML, CSS, and JS",
                    logo: "https://cordova.apache.org/static/img/cordova_bot.png"
                },
                { 
                    name: "Expo", 
                    icon: "fas fa-rocket", 
                    color: "#000020", 
                    description: "React Native toolchain for faster development",
                    logo: "https://github.com/expo.png"
                }
            ]
        },
        cloud: {
            title: "Cloud & DevOps",
            icon: "fas fa-cloud",
            description: "Scalable infrastructure and deployment solutions",
            techs: [
                { 
                    name: "AWS", 
                    icon: "fab fa-aws", 
                    color: "#FF9900", 
                    description: "Amazon Web Services cloud platform",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                },
                { 
                    name: "Vercel", 
                    icon: "fas fa-triangle", 
                    color: "#000000", 
                    description: "Frontend deployment platform",
                    logo: "https://vercel.com/favicon.ico"
                },
                { 
                    name: "Render", 
                    icon: "fas fa-cube", 
                    color: "#46E3B7", 
                    description: "Cloud application platform",
                    logo: "https://render.com/favicon.ico"
                },
                { 
                    name: "Netlify", 
                    icon: "fas fa-rocket", 
                    color: "#00C7B7", 
                    description: "Modern web development platform",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
                },
                { 
                    name: "Docker", 
                    icon: "fab fa-docker", 
                    color: "#2496ED", 
                    description: "Application containerization",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                },
                { 
                    name: "Kubernetes", 
                    icon: "fas fa-dharmachakra", 
                    color: "#326CE5", 
                    description: "Container orchestration",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
                },
                { 
                    name: "Azure", 
                    icon: "fab fa-microsoft", 
                    color: "#0078D4", 
                    description: "Microsoft cloud platform",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg"
                },
                { 
                    name: "Google Cloud", 
                    icon: "fab fa-google", 
                    color: "#4285F4", 
                    description: "Google's cloud services",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                }
            ]
        },
        security: {
            title: "Security & Authentication",
            icon: "fas fa-shield-alt",
            description: "Secure authentication and protection systems",
            techs: [
                { 
                    name: "Clerk", 
                    icon: "fas fa-user-shield", 
                    color: "#6366F1", 
                    description: "Complete user management platform",
                    logo: "https://clerk.com/favicon.ico"
                },
                { 
                    name: "Auth0", 
                    icon: "fas fa-key", 
                    color: "#EB5424", 
                    description: "Identity platform for developers",
                    logo: "https://cdn.auth0.com/website/new-homepage/dark-favicon.png"
                },
                { 
                    name: "JWT", 
                    icon: "fas fa-lock", 
                    color: "#000000", 
                    description: "JSON Web Token authentication",
                    logo: "https://jwt.io/img/favicon/favicon-32x32.png"
                },
                { 
                    name: "OAuth", 
                    icon: "fas fa-handshake", 
                    color: "#4285F4", 
                    description: "Secure authorization framework",
                    logo: "https://oauth.net/images/oauth-logo-square.png"
                },
                { 
                    name: "bcrypt", 
                    icon: "fas fa-fingerprint", 
                    color: "#FF6B6B", 
                    description: "Password hashing function",
                    logo: "https://github.com/kelektiv/node.bcrypt.js/raw/master/logo.png"
                },
                { 
                    name: "SSL/TLS", 
                    icon: "fas fa-certificate", 
                    color: "#00C851", 
                    description: "Transport layer security",
                    logo: "https://ssl.com/favicon.ico"
                },
                { 
                    name: "Firebase Auth", 
                    icon: "fas fa-fire", 
                    color: "#FFCA28", 
                    description: "Google's authentication service",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                },
                { 
                    name: "Passport.js", 
                    icon: "fas fa-passport", 
                    color: "#34D058", 
                    description: "Authentication middleware for Node.js",
                    logo: "https://www.passportjs.org/images/logo.svg"
                }
            ]
        },
        tools: {
            title: "Development Tools",
            icon: "fas fa-tools",
            description: "Essential tools and frameworks for development",
            techs: [
                { 
                    name: "Git", 
                    icon: "fab fa-git-alt", 
                    color: "#F05032", 
                    description: "Version control system",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                },
                { 
                    name: "GitHub", 
                    icon: "fab fa-github", 
                    color: "#181717", 
                    description: "Code hosting platform",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                },
                { 
                    name: "VS Code", 
                    icon: "fas fa-code", 
                    color: "#007ACC", 
                    description: "Code editor",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                },
                { 
                    name: "Webpack", 
                    icon: "fas fa-box", 
                    color: "#8DD6F9", 
                    description: "Module bundler",
                    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
                },
                { 
                    name: "Vite", 
                    icon: "fas fa-lightning-bolt", 
                    color: "#646CFF", 
                    description: "Fast build tool",
                    logo: "https://vitejs.dev/logo.svg"
                },
                { 
                    name: "ESLint", 
                    icon: "fas fa-check-circle", 
                    color: "#4B32C3", 
                    description: "JavaScript linter",
                    logo: "https://eslint.org/favicon.ico"
                },
                { 
                    name: "Prettier", 
                    icon: "fas fa-magic", 
                    color: "#F7B93E", 
                    description: "Code formatter",
                    logo: "https://prettier.io/icon.png"
                },
                { 
                    name: "Postman", 
                    icon: "fas fa-paper-plane", 
                    color: "#FF6C37", 
                    description: "API development environment",
                    logo: "https://www.postman.com/assets/logos/postman-logo-horizontal-orange.svg"
                }
            ]
        }
    };

    const tabItems = [
        { key: 'frontend', label: 'Frontend', icon: 'fas fa-paint-brush' },
        { key: 'backend', label: 'Backend', icon: 'fas fa-server' },
        { key: 'database', label: 'Database', icon: 'fas fa-database' },
        { key: 'mobileDevelopment', label: 'Mobile', icon: 'fas fa-mobile-alt' },
        { key: 'cloud', label: 'Cloud & DevOps', icon: 'fas fa-cloud' },
        { key: 'security', label: 'Security', icon: 'fas fa-shield-alt' },
        { key: 'tools', label: 'Tools', icon: 'fas fa-tools' }
    ];

    return (
        <section className="py-5 tech-stack-section" style={{ backgroundColor: '#060615' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-4" style={{ color: '#ffffff' }}>
                        Our Technology Stack
                    </h2>
                    <p className="lead" style={{ color: '#cccccc', maxWidth: '800px', margin: '0 auto' }}>
                        We leverage cutting-edge technologies and frameworks to build robust, scalable, and secure applications
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="row justify-content-center mb-5">
                    <div className="col-lg-10">
                        <div className="tech-tabs d-flex flex-wrap justify-content-center gap-3">
                            {tabItems.map((tab) => (
                                <button
                                    key={tab.key}
                                    className={`tech-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab.key)}
                                    style={{
                                        background: activeTab === tab.key 
                                            ? 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)' 
                                            : 'transparent',
                                        border: `2px solid ${activeTab === tab.key ? '#ffc107' : 'rgba(255, 193, 7, 0.3)'}`,
                                        borderRadius: '12px',
                                        padding: '12px 24px',
                                        color: activeTab === tab.key ? '#000' : '#ffffff',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        minWidth: '140px',
                                        justifyContent: 'center'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (activeTab !== tab.key) {
                                            e.target.style.borderColor = '#ffc107';
                                            e.target.style.backgroundColor = 'rgba(255, 193, 7, 0.1)';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (activeTab !== tab.key) {
                                            e.target.style.borderColor = 'rgba(255, 193, 7, 0.3)';
                                            e.target.style.backgroundColor = 'transparent';
                                        }
                                    }}
                                >
                                    <i className={tab.icon}></i>
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div 
                            className="tech-content-container"
                            style={{
                                background: 'linear-gradient(135deg, #1a1a3a 0%, #2a2a4a 100%)',
                                borderRadius: '20px',
                                border: '2px solid rgba(255, 193, 7, 0.3)',
                                padding: '3rem',
                                position: 'relative',
                                overflow: 'hidden',
                                minHeight: '500px'
                            }}
                        >
                            {/* Background Animation */}
                            <div 
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: `radial-gradient(circle at 20% 80%, rgba(255, 193, 7, 0.03) 0%, transparent 50%),
                                                radial-gradient(circle at 80% 20%, rgba(102, 126, 234, 0.03) 0%, transparent 50%)`,
                                    pointerEvents: 'none',
                                    zIndex: 0
                                }}
                            ></div>

                            {/* Header */}
                            <div className="text-center mb-5" style={{ position: 'relative', zIndex: 2 }}>
                                <div className="mb-4">
                                    <i 
                                        className={technologies[activeTab].icon}
                                        style={{
                                            fontSize: '4rem',
                                            color: '#ffc107',
                                            textShadow: '0 0 20px rgba(255, 193, 7, 0.5)'
                                        }}
                                    ></i>
                                </div>
                                <h3 className="display-6 fw-bold text-white mb-3">
                                    {technologies[activeTab].title}
                                </h3>
                                <p className="lead" style={{ color: '#cccccc', maxWidth: '600px', margin: '0 auto' }}>
                                    {technologies[activeTab].description}
                                </p>
                            </div>

                            {/* Technology Grid */}
                            <div className="row g-4" style={{ position: 'relative', zIndex: 2 }}>
                                {technologies[activeTab].techs.map((tech, index) => (
                                    <div key={tech.name} className="col-lg-3 col-md-4 col-sm-6">
                                        <div 
                                            className="tech-item"
                                            style={{
                                                background: 'rgba(255, 255, 255, 0.02)',
                                                border: '2px solid transparent',
                                                borderRadius: '15px',
                                                padding: '1.5rem',
                                                textAlign: 'center',
                                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                animation: `techItemFadeIn 0.6s ease-out ${index * 0.1}s both`
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                                                e.currentTarget.style.borderColor = tech.color;
                                                e.currentTarget.style.boxShadow = `0 15px 30px rgba(255, 193, 7, 0.2), 0 0 20px ${tech.color}40`;
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                                e.currentTarget.style.borderColor = 'transparent';
                                                e.currentTarget.style.boxShadow = 'none';
                                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
                                            }}
                                        >
                                            {/* Hover Background Effect */}
                                            <div 
                                                style={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    width: '0',
                                                    height: '0',
                                                    background: `linear-gradient(45deg, ${tech.color}20, transparent)`,
                                                    borderRadius: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    transition: 'all 0.5s ease',
                                                    zIndex: 1
                                                }}
                                                className="hover-bg"
                                            ></div>

                                            {/* Logo/Icon */}
                                            <div className="mb-3" style={{ position: 'relative', zIndex: 2 }}>
                                                <img 
                                                    src={tech.logo}
                                                    alt={`${tech.name} logo`}
                                                    style={{
                                                        width: '48px',
                                                        height: '48px',
                                                        objectFit: 'contain',
                                                        transition: 'all 0.3s ease',
                                                        filter: `drop-shadow(0 4px 8px ${tech.color}40)`
                                                    }}
                                                    onError={(e) => {
                                                        // Fallback to FontAwesome icon if image fails to load
                                                        e.target.style.display = 'none';
                                                        e.target.nextElementSibling.style.display = 'inline-block';
                                                    }}
                                                />
                                                <i 
                                                    className={tech.icon}
                                                    style={{
                                                        fontSize: '2.5rem',
                                                        color: tech.color,
                                                        transition: 'all 0.3s ease',
                                                        filter: `drop-shadow(0 4px 8px ${tech.color}40)`,
                                                        display: 'none'
                                                    }}
                                                ></i>
                                            </div>

                                            {/* Name */}
                                            <h5 
                                                className="text-white mb-2"
                                                style={{
                                                    fontWeight: '600',
                                                    fontSize: '1.1rem',
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {tech.name}
                                            </h5>

                                            {/* Description */}
                                            <p 
                                                style={{
                                                    color: '#cccccc',
                                                    fontSize: '0.85rem',
                                                    margin: '0',
                                                    position: 'relative',
                                                    zIndex: 2,
                                                    transition: 'all 0.3s ease'
                                                }}
                                            >
                                                {tech.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes techItemFadeIn {
                    0% {
                        opacity: 0;
                        transform: translateY(30px) scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .tech-item:hover .hover-bg {
                    width: 200px !important;
                    height: 200px !important;
                }

                .tech-item:hover img {
                    transform: scale(1.2) rotateY(360deg);
                }

                .tech-item:hover i {
                    transform: scale(1.2) rotateY(360deg);
                }

                .tech-item:hover h5 {
                    color: #ffc107 !important;
                    transform: scale(1.05);
                }

                .tech-item:hover p {
                    color: #ffffff !important;
                }

                .tech-tab-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.3);
                }

                .tech-tab-btn.active {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(255, 193, 7, 0.4);
                }

                @media (max-width: 768px) {
                    .tech-tabs {
                        gap: 0.5rem !important;
                    }
                    
                    .tech-tab-btn {
                        min-width: 120px !important;
                        padding: 10px 16px !important;
                        font-size: 0.9rem !important;
                    }
                    
                    .tech-content-container {
                        padding: 2rem !important;
                    }
                    
                    .tech-item {
                        padding: 1rem !important;
                    }

                    .tech-item img {
                        width: 40px !important;
                        height: 40px !important;
                    }
                }

                @media (max-width: 576px) {
                    .tech-tabs {
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    
                    .tech-tab-btn {
                        width: 100% !important;
                        max-width: 200px !important;
                    }

                    .tech-item img {
                        width: 36px !important;
                        height: 36px !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default TechnologyStackSection;