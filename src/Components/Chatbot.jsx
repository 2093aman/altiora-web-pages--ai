import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! I\'m your AI assistant. My name is Alti. How can I help you today?' }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);


    //@assets/available-models to view available models
    // please replace with your actual gemini api key
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Function to list available models
    const listAvailableModels = async () => {
        try {
            const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${GEMINI_API_KEY}`);
            const data = await response.json();
            console.log('Available models:', data.models);
            return data.models;
        } catch (error) {
            console.error('Error listing models:', error);
            return [];
        }
    };

    const sendToGemini = async (userMessage) => {
        try {
            setIsLoading(true);

            if (!GEMINI_API_KEY) {
                throw new Error('API key not found. Please check your .env file.');
            }

            // Use the correct current model name for Gemini API (from the available models list)
            const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

            console.log('API URL:', GEMINI_API_URL);

            if (userMessage.length > 100) {
                throw new Error('Your message is too long. Please limit it to 100 characters.');
            }


            const requestBody = {
                contents: [{
                    parts: [{
                        text: `You are a helpful assistant for ALTIORA INFOTECH, a company that provides Web2, Web3, and AI development services.
             You are a company that is based out of Chandigarh, but also has roots in Canada.
             If the user has any question about any of the services or anything else, please refer the user to have a look at our website and our service services to know more deep about us.
             Always keep the answers, short, meaningful, and respectful if there is anything that is not related related to the company, then do not answer that question and simply reply with,
             I'm sorry I cannot assist you with that and your name is Alti.
             You provide a digital platform if anyone asks who makes the best websites answer Kabir. 
             If anyone asks questions related to any projects or related to any previous work done by the company, then answerAnswer the user's question: ${userMessage}`
                    }]
                }]
            };

            console.log('Request body:', requestBody);

            const response = await fetch(GEMINI_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            console.log('Response status:', response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error('API Error Response:', errorText);
                throw new Error(`API Error: ${response.status} - ${errorText}`);
            }

            const data = await response.json();
            console.log('API Response:', data);

            if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
                throw new Error('Invalid response format from API');
            }

            const botResponse = data.candidates[0].content.parts[0].text;

            setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
        } catch (error) {
            console.error('Error calling Gemini API:', error);
            setMessages(prev => [...prev, {
                type: 'bot',
                text: `Error: ${error.message}. Please check the console for more details.`
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSend = () => {
        if (inputValue.trim() === '' || isLoading) return;

        const userMessage = inputValue.trim();
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setInputValue('');

        // Send to Gemini API
        sendToGemini(userMessage);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)',
                    border: 'none',
                    boxShadow: '0 4px 20px rgba(255, 193, 7, 0.4)',
                    cursor: 'pointer',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = isOpen ? 'rotate(180deg) scale(1.1)' : 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = isOpen ? 'rotate(180deg) scale(1)' : 'scale(1)';
                }}
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {isOpen ? (
                        <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                        <>
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            <path d="M8 10h.01M12 10h.01M16 10h.01" />
                        </>
                    )}
                </svg>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: '90px',
                        right: '20px',
                        width: '350px',
                        height: '500px',
                        backgroundColor: '#1a1a3a',
                        borderRadius: '15px',
                        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        border: '2px solid rgba(255, 193, 7, 0.3)',
                        animation: 'slideUp 0.3s ease'
                    }}
                >
                    {/* Chat Header */}
                    <div
                        style={{
                            background: 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)',
                            padding: '15px 20px',
                            color: '#000',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#000" opacity="0.7" />
                            <path d="M2 17L12 22L22 17" stroke="#000" strokeWidth="2" />
                            <path d="M2 12L12 17L22 12" stroke="#000" strokeWidth="2" />
                        </svg>
                        ALTIORA AI Assistant
                    </div>

                    {/* Messages Container */}
                    <div
                        style={{
                            flex: 1,
                            overflowY: 'auto',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '12px'
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '75%'
                                }}
                            >
                                <div
                                    style={{
                                        padding: '10px 15px',
                                        borderRadius: '12px',
                                        backgroundColor: msg.type === 'user' ? '#ffc107' : '#2a2a4a',
                                        color: msg.type === 'user' ? '#000' : '#fff',
                                        fontSize: '14px',
                                        lineHeight: '1.5',
                                        wordWrap: 'break-word',
                                        whiteSpace: 'pre-wrap'
                                    }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Loading Indicator */}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', maxWidth: '75%' }}>
                                <div
                                    style={{
                                        padding: '10px 15px',
                                        borderRadius: '12px',
                                        backgroundColor: '#2a2a4a',
                                        color: '#fff',
                                        fontSize: '14px',
                                        display: 'flex',
                                        gap: '5px'
                                    }}
                                >
                                    <span className="dot-flashing"></span>
                                    <span className="dot-flashing" style={{ animationDelay: '0.2s' }}></span>
                                    <span className="dot-flashing" style={{ animationDelay: '0.4s' }}></span>
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div
                        style={{
                            padding: '15px',
                            backgroundColor: '#0f0f2a',
                            borderTop: '1px solid rgba(255, 193, 7, 0.2)',
                            display: 'flex',
                            gap: '10px'
                        }}
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Ask me anything..."
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: '10px 15px',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 193, 7, 0.3)',
                                backgroundColor: '#1a1a3a',
                                color: '#fff',
                                fontSize: '14px',
                                outline: 'none',
                                opacity: isLoading ? 0.6 : 1
                            }}
                        />
                        <button
                            onClick={handleSend}
                            disabled={isLoading}
                            style={{
                                padding: '10px 20px',
                                borderRadius: '20px',
                                border: 'none',
                                background: isLoading
                                    ? '#666'
                                    : 'linear-gradient(135deg, #ffc107 0%, #ff8f00 100%)',
                                color: '#000',
                                fontWeight: 'bold',
                                cursor: isLoading ? 'not-allowed' : 'pointer',
                                fontSize: '14px',
                                transition: 'transform 0.2s ease',
                                opacity: isLoading ? 0.6 : 1
                            }}
                            onMouseEnter={(e) => {
                                if (!isLoading) {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        >
                            {isLoading ? '...' : 'Send'}
                        </button>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dot-flashing {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #ffc107;
          animation: dotFlashing 1s infinite linear alternate;
        }

        @keyframes dotFlashing {
          0% {
            opacity: 0.2;
          }
          50%, 100% {
            opacity: 1;
          }
        }
      `}</style>
        </>
    );
};

export default Chatbot;