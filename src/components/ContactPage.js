import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

const ContactPage = () => {
    const address = "11154 Graeton Circle, Mather, CA 95655";
    const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    // ✅ Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'n5DKgd5GiAAQLOYwflJdJ', // Replace with your EmailJS Service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS Template ID
            formData,
            'ociTh8XEV8L43jGqf' // Replace with your EmailJS Public Key
        )
            .then((response) => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear form
            })
            .catch((error) => {
                setStatus('Failed to send message. Please try again.');
                console.error('Email error:', error);
            });
    };

    return (
        <div style={{ padding: '40px', maxWidth: '900px', margin: '0 auto', fontFamily: "'Arial', sans-serif", backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ fontSize: '2rem', color: '#4caf50', textAlign: 'center', marginBottom: '20px' }}>Contact Us</h1>
            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#555', marginBottom: '30px' }}>
                We’d love to hear from you! Reach out to us using the form below, or find our location on the map.
            </p>

            {/* Contact Information */}
            <div style={{ marginBottom: '30px' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#4caf50', borderBottom: '2px solid #4caf50', paddingBottom: '5px', display: 'inline-block' }}>Contact Information</h2>
                <p><strong>Address:</strong> {address}</p>
                <p><strong>Email:</strong> matherchildcarecenter@gmail.com</p>
                <p><strong>Phone:</strong> (916) 755-1688</p>
            </div>

            {/* Message Form */}
            <div style={{ marginBottom: '40px' }}>
                <h2 style={{ fontSize: '1.5rem', color: '#4caf50', borderBottom: '2px solid #4caf50', paddingBottom: '5px', display: 'inline-block' }}>Send Us a Message</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required style={inputStyle} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" placeholder="Your email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" placeholder="Your message" rows="4" value={formData.message} onChange={handleChange} required style={textareaStyle} />
                    </label>
                    <button type="submit" style={buttonStyle}>Send</button>
                    {status && <p style={{ color: status.includes("success") ? "green" : "red" }}>{status}</p>}
                </form>
            </div>

            {/* Location Section */}
            <div>
                <h2 style={{ fontSize: '1.5rem', color: '#4caf50', borderBottom: '2px solid #4caf50', paddingBottom: '5px', display: 'inline-block' }}>Our Location</h2>
                <p style={{ margin: '15px 0' }}>Find us at the address below, or click the map to get directions:</p>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                    <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=15&size=800x400&maptype=roadmap&markers=color:red%7Clabel:A%7C${encodeURIComponent(address)}&key=YOUR_GOOGLE_MAPS_API_KEY`} 
                        alt="Google Map Location"
                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', marginBottom: '10px' }} />
                </a>
                <p>
                    <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#4caf50', textDecoration: 'underline', fontSize: '1rem' }}>Get Directions on Google Maps</a>
                </p>
            </div>
        </div>
    );
};

// ✅ Styles
const inputStyle = {
    padding: "12px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "100%",
};

const textareaStyle = {
    ...inputStyle,
    height: "100px",
};

const buttonStyle = {
    padding: "12px 20px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#4caf50",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
};

export default ContactPage;

