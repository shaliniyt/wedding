import React from 'react';
import { motion } from 'framer-motion';
import Countdown from './Countdown';
import './Hero.css';

const Hero = () => {
    return (
        <header id="hero" className="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>

            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
            >
                <p className="sub-headline">We Are Getting Married</p>
                <h1 className="headline">Shalini & Vishal</h1>

                <div className="divider">
                    <span className="line"></span>
                    <i className="fas fa-heart"></i>
                    <span className="line"></span>
                </div>

                <p className="date">November 20, 2026</p>

                <Countdown targetDate="November 20, 2026 00:00:00" />
            </motion.div>
        </header>
    );
};

export default Hero;
