import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './Gallery.css';

import img1 from '../assets/img7.jpeg';
import img2 from '../assets/img8.jpeg';
import img3 from '../assets/img6.jpeg';
import img4 from '../assets/img1.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img4.jpeg';

const galleryImages = [
    { id: 1, src: img1, alt: 'Gallery 1' },
    { id: 2, src: img2, alt: 'Gallery 2' },
    { id: 3, src: img3, alt: 'Gallery 3' },
    { id: 4, src: img4, alt: 'Gallery 4' },
    { id: 5, src: img5, alt: 'Gallery 5' },
    { id: 6, src: img6, alt: 'Gallery 6' },
];

const Gallery = () => {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <section id="gallery" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Captured Moments
                </motion.h2>

                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            className="gallery-item"
                            layoutId={`image-${image.id}`}
                            onClick={() => setSelectedId(image.id)}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                onError={(e) => e.target.src = 'https://placehold.co/600x400'}
                            />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedId && (
                        <motion.div
                            className="lightbox-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                        >
                            <motion.div
                                className="lightbox-content"
                                layoutId={`image-${selectedId}`}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={galleryImages.find(img => img.id === selectedId)?.src}
                                    alt="Selected"
                                    onError={(e) => e.target.src = 'https://placehold.co/600x400'}
                                />
                                <button className="lightbox-close" onClick={() => setSelectedId(null)}>
                                    <FaTimes />
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Gallery;
