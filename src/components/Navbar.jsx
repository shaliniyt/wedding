import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <a href="#" className="logo" onClick={() => scrollToSection('hero')}>S & V</a>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
                    <li className="nav-item">
                        <a href="#couple" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('couple'); }}>Couple</a>
                    </li>
                    <li className="nav-item">
                        <a href="#events" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('events'); }}>Events</a>
                    </li>
                    <li className="nav-item">
                        <a href="#gallery" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
