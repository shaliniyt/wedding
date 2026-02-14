import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './Events.css';

const eventsData = [
    {
        title: "Tilak Ceremony",
        date: "19 Nov",
        time: "6:00 PM Onwards",
        venue: "Royal Pepper Banquet, Prayagraj",
        desc: "Please join us for the Tilak ceremony to bless the groom.",
        highlight: false
    },
    {
        title: "Haldi & Mehendi",
        date: "19 Nov",
        time: "10:00 AM Onwards",
        venue: "Royal Pepper Banquet, Prayagraj",
        desc: "A colorful morning filled with love, laughter, and turmeric.",
        highlight: false
    },
    {
        title: "The Wedding",
        date: "20 Nov",
        time: "Evening",
        venue: "Royal Pepper Banquet, Prayagraj",
        desc: "Witness the union of our souls as we tie the knot.",
        highlight: true
    }
];

const Events = () => {
    return (
        <section id="events" className="section bg-alt">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Celebration Events
                </motion.h2>

                <div className="timeline">
                    {eventsData.map((event, index) => (
                        <motion.div
                            key={index}
                            className={`event-card ${event.highlight ? 'featured-event' : ''}`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="event-date">
                                <span className="day">{event.date.split(' ')[0]}</span>
                                <span className="month">{event.date.split(' ')[1]}</span>
                            </div>
                            <div className="event-details">
                                <h3>{event.title}</h3>
                                <p className="time"><FaClock /> {event.time}</p>
                                <p className="venue"><FaMapMarkerAlt /> {event.venue}</p>
                                <p className="desc">{event.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
