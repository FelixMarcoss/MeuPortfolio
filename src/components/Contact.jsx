import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact">
            <div className="container contact-container">
                <h2 className="section-title">Entre em Contato</h2>
                <p className="contact-subtitle">
                    Vamos construir algo incrível juntos? Entre em contato através das minhas redes sociais ou telefone.
                </p>

                <div className="contact-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-card instagram">
                        <span className="icon">📸</span>
                        <span className="label">Instagram</span>
                        <span className="value">@seu_perfil</span>
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-card linkedin">
                        <span className="icon">💼</span>
                        <span className="label">LinkedIn</span>
                        <span className="value">linkedin.com/in/seu-perfil</span>
                    </a>

                    <a href="tel:+5511999999999" className="contact-card phone">
                        <span className="icon">📱</span>
                        <span className="label">Telefone</span>
                        <span className="value">(11) 99999-9999</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
