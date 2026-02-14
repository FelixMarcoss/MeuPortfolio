import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-greeting">Olá, eu sou</span>
                    <h1 className="hero-title">
                        Marcos <span className="highlight">Ferreira</span>
                    </h1>
                    <h2 className="hero-subtitle">Desenvolvedor Flutter Junior</h2>
                    <p className="hero-description">
                        Eu desenvolvo aplicações móveis focadas em performance e experiência do usuário,
                        sempre buscando aprender novas tecnologias e aprimorar meu conhecimento.
                    </p>
                    <div className="hero-actions">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">LINKEDIN</a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">GITHUB</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">INSTAGRAM</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    {/* Illustration placeholder matching the Laptop/Phone vibe */}
                    <div className="device-stack">
                        <div className="device-laptop">
                            <div className="screen"></div>
                            <div className="base"></div>
                        </div>
                        <div className="device-phone">
                            <div className="notch"></div>
                            <div className="screen-content"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
