import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './FloatingPetals.css';

const FloatingPetals = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const createParticle = () => {
            const id = Math.random();
            const startX = Math.random() * window.innerWidth;
            const size = Math.random() * 15 + 5;
            const duration = Math.random() * 12 + 8;
            const type = Math.random() > 0.3 ? 'petal' : 'sparkle';

            // Vibrant colors: Rose Pink, Deep Red, Gold
            const colors = [
                { radial: '#ff9a9e', main: '#fad0c4' }, // Petal Pink
                { radial: '#800020', main: '#ff4d6d' }, // Deep Maroon/Pink
                { radial: '#ffbe0b', main: '#DFBD69' }, // Gold
            ];
            const colorSet = colors[Math.floor(Math.random() * colors.length)];

            return { id, startX, size, duration, type, colorSet };
        };

        const initialParticles = Array.from({ length: 25 }).map(createParticle);
        setParticles(initialParticles);

        const interval = setInterval(() => {
            setParticles(current => [...current.slice(-30), createParticle()]);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="petal-container">
            {particles.map(particle => (
                <motion.div
                    key={particle.id}
                    className={particle.type}
                    initial={{
                        opacity: 0,
                        y: -50,
                        x: particle.startX,
                        rotate: 0
                    }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        y: window.innerHeight + 100,
                        x: particle.startX + (Math.random() * 200 - 100),
                        rotate: particle.type === 'petal' ? 360 : 720,
                        scale: particle.type === 'sparkle' ? [1, 1.5, 1] : 1
                    }}
                    transition={{
                        duration: particle.duration,
                        ease: "linear",
                        repeat: Infinity
                    }}
                    style={{
                        position: 'absolute',
                        width: particle.size,
                        height: particle.size,
                        background: particle.type === 'petal'
                            ? `radial-gradient(circle, ${particle.colorSet.radial} 0%, ${particle.colorSet.main} 100%)`
                            : `radial-gradient(circle, #fff 0%, ${particle.colorSet.main} 100%)`,
                        borderRadius: particle.type === 'petal' ? "50% 0 50% 0" : "50%",
                        boxShadow: `0 0 10px ${particle.colorSet.main}`,
                        filter: particle.type === 'sparkle' ? 'blur(0px)' : 'blur(1px)',
                        pointerEvents: 'none'
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingPetals;
