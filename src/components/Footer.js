import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer
            style={ {
                backgroundColor: '#333',
                color: '#fff',
                padding: '20px 0',
                textAlign: 'center',
                marginTop: '40px',
            } }
        >
            <div style={ { marginBottom: '10px' } }>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ { margin: '0 15px', color: '#fff', fontSize: '1.5rem' } }
                >
                    <FontAwesomeIcon icon={ faFacebook } />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ { margin: '0 15px', color: '#fff', fontSize: '1.5rem' } }
                >
                    <FontAwesomeIcon icon={ faInstagram } />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ { margin: '0 15px', color: '#fff', fontSize: '1.5rem' } }
                >
                    <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ { margin: '0 15px', color: '#fff', fontSize: '1.5rem' } }
                >
                    <FontAwesomeIcon icon={ faLinkedin } />
                </a>
                <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={ { margin: '0 15px', color: '#fff', fontSize: '1.5rem' } }
                >
                    <FontAwesomeIcon icon={ faYoutube } />
                </a>
            </div>
            <p style={ { marginTop: '10px', fontSize: '0.9rem' } }>
                &copy; { new Date().getFullYear() } Mahter Little Stars. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
