import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import './Couple.css';

const Couple = () => {
    return (
        <section id="couple" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    The Happy Couple
                </motion.h2>

                <div className="couple-grid">
                    {/* Bride */}
                    <motion.div
                        className="couple-card"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="img-wrapper">
                            <img
                                src="/assets/bride_placeholder.jpg"
                                alt="Shalini Singh"
                                className="couple-img"
                                onError={(e) => e.target.src = 'https://placehold.co/400x500?text=Shalini'}
                            />
                        </div>
                        <h3>Shalini Singh</h3>
                        <p class="parents">D/O Mr. Satendra Singh & Mrs. Arti Singh</p>
                    </motion.div>

                    <motion.div
                        className="center-heart"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: [1, 1.2, 1] }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }}
                    >
                        <FaHeart />
                    </motion.div>

                    {/* Groom */}
                    <motion.div
                        className="couple-card"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="img-wrapper">
                            <img
                                src="/assets/groom_placeholder.jpg"
                                alt="Vishal Singh"
                                className="couple-img"
                                onError={(e) => e.target.src = 'https://placehold.co/400x500?text=Vishal'}
                            />
                        </div>
                        <h3>Vishal Singh</h3>
                        <p class="parents">S/O Mr. Ravendra Singh & Mrs. Kiran Singh</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Couple;
