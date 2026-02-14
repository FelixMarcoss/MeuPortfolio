import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p>&copy; {new Date().getFullYear()} Marcos. Todos os direitos reservados.</p>
                <div className="footer-socials">
                    <a href="#" className="footer-link">GitHub</a>
                    <a href="#" className="footer-link">LinkedIn</a>
                    <a href="#" className="footer-link">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
