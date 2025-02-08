import React, { useState } from 'react';
import Testimonials from './Testimonials'; // ✅ Import the testimonials component

const HomePage = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div style={ { textAlign: 'center', padding: '50px 20px', fontFamily: "'Arial', sans-serif" } }>
            <h1 style={ { color: '#4caf50', fontSize: '2.5rem', fontWeight: 'bold' } }>
                Welcome to Mather Little Stars
            </h1>
            <p style={ { fontSize: '1.2rem', color: '#555', maxWidth: '800px', margin: '0 auto' } }>
                We nurture young minds with care and creativity, empowering the next generation to blossom and thrive.
            </p>

            {/* Learn More Button */ }
            <button
                onClick={ () => setShowMore(!showMore) }
                style={ {
                    marginTop: '20px',
                    padding: '12px 25px',
                    fontSize: '1.2rem',
                    color: 'white',
                    backgroundColor: '#4caf50',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                } }
            >
                { showMore ? "Show Less" : "Learn More" }
            </button>

            {/* Expanded Information Section */ }
            { showMore && (
                <div style={ {
                    marginTop: '30px',
                    background: '#f9f9f9',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    textAlign: 'left',
                } }>
                    <h2 style={ { color: '#4caf50', fontSize: '1.8rem', textAlign: 'center' } }>About Our Kids</h2>
                    <p style={ { fontSize: '1.1rem', color: '#333', lineHeight: '1.6' } }>
                        At Mahter Little Stars, we believe that every child is unique and full of potential.
                        Our dedicated staff ensures a nurturing and stimulating environment where kids can learn, explore, and grow.
                    </p>
                    <ul style={ { fontSize: '1.1rem', color: '#555', lineHeight: '1.6' } }>
                        <li>🌟 Engaging in creative arts and crafts</li>
                        <li>🎶 Developing musical talents with our music program</li>
                        <li>📚 Strengthening early learning and literacy</li>
                        <li>🤝 Building social skills and friendships</li>
                        <li>🏃‍♂️ Staying active with fun physical activities</li>
                    </ul>
                </div>
            ) }

            {/* ✅ Parent Testimonials Section - Add this after the Learn More */ }
            <Testimonials />
        </div>
    );
};

export default HomePage;
