import React from 'react';

const ContactPage = () => {
    const address = "11154 Graeton Circle, Mather, CA 95655";
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

    return (
        <div
            style={ {
                padding: '40px',
                maxWidth: '900px',
                margin: '0 auto',
                fontFamily: "'Arial', sans-serif",
                backgroundColor: '#f9f9f9',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            } }
        >
            <h1
                style={ {
                    fontSize: '2rem',
                    color: '#4caf50',
                    textAlign: 'center',
                    marginBottom: '20px',
                } }
            >
                Contact Us
            </h1>
            <p
                style={ {
                    textAlign: 'center',
                    fontSize: '1.1rem',
                    color: '#555',
                    marginBottom: '30px',
                } }
            >
                We’d love to hear from you! Reach out to us using the form below, or find our location on the map.
            </p>

            {/* Contact Information */ }
            <div style={ { marginBottom: '30px' } }>
                <h2
                    style={ {
                        fontSize: '1.5rem',
                        color: '#4caf50',
                        borderBottom: '2px solid #4caf50',
                        paddingBottom: '5px',
                        display: 'inline-block',
                    } }
                >
                    Contact Information
                </h2>
                <p>
                    <strong>Address:</strong> { address }
                </p>
                <p>
                    <strong>Email:</strong> info@mahterlittlestars.com
                </p>
                <p>
                    <strong>Phone:</strong> (555) 123-4567
                </p>
            </div>

            {/* Message Form */ }
            <div style={ { marginBottom: '40px' } }>
                <h2
                    style={ {
                        fontSize: '1.5rem',
                        color: '#4caf50',
                        borderBottom: '2px solid #4caf50',
                        paddingBottom: '5px',
                        display: 'inline-block',
                    } }
                >
                    Send Us a Message
                </h2>
                <form
                    style={ {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '15px',
                        marginTop: '20px',
                    } }
                >
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            style={ {
                                padding: '12px',
                                fontSize: '1rem',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%',
                            } }
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            style={ {
                                padding: '12px',
                                fontSize: '1rem',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%',
                            } }
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows="4"
                            style={ {
                                padding: '12px',
                                fontSize: '1rem',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%',
                            } }
                        />
                    </label>
                    <button
                        type="submit"
                        style={ {
                            padding: '12px 20px',
                            fontSize: '1rem',
                            color: '#fff',
                            backgroundColor: '#4caf50',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            alignSelf: 'flex-start',
                        } }
                    >
                        Send
                    </button>
                </form>
            </div>

            {/* Location Section */ }
            <div>
                <h2
                    style={ {
                        fontSize: '1.5rem',
                        color: '#4caf50',
                        borderBottom: '2px solid #4caf50',
                        paddingBottom: '5px',
                        display: 'inline-block',
                    } }
                >
                    Our Location
                </h2>
                <p style={ { margin: '15px 0' } }>
                    Find us at the address below, or click the map to get directions:
                </p>
                <a href={ googleMapsUrl } target="_blank" rel="noopener noreferrer">
                    <img
                        src={ `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(
                            address
                        )}&zoom=15&size=800x400&maptype=roadmap&markers=color:red%7Clabel:A%7C${encodeURIComponent(
                            address
                        )}&key=AIZA_syAy6CbRg8OU2Bf_lM6mJYwcQpF3kjNUSpI` }
                        alt="Google Map Location"
                        style={ {
                            width: '100%',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            marginBottom: '10px',
                        } }
                    />
                </a>
                <p>
                    <a
                        href={ googleMapsUrl }
                        target="_blank"
                        rel="noopener noreferrer"
                        style={ {
                            color: '#4caf50',
                            textDecoration: 'underline',
                            fontSize: '1rem',
                        } }
                    >
                        Get Directions on Google Maps
                    </a>
                </p>
            </div>
        </div>
    );
};

export default ContactPage;
