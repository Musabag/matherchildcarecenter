import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Adjust the path based on the file location

const Navbar = () => {
    return (
        <nav
            style={ {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 20px',
                backgroundColor: '#4caf50',
                color: '#fff',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            } }
        >
            {/* Logo Section */ }
            <div>
                <Link to="/">
                    <img
                        src={ logo }
                        alt="Mather Childcare Center Logo"
                        style={ { height: '50px' } }
                    />
                </Link>
            </div>

            {/* Navigation Links */ }
            <ul
                style={ {
                    display: 'flex',
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                } }
            >
                <li style={ { margin: '0 15px' } }>
                    <Link
                        to="/"
                        style={ { color: '#fff', textDecoration: 'none' } }
                    >
                        Home
                    </Link>
                </li>
                <li style={ { margin: '0 15px' } }>
                    <Link
                        to="/staff"
                        style={ { color: '#fff', textDecoration: 'none' } }
                    >
                        Our Staff
                    </Link>
                </li>
                <li style={ { margin: '0 15px' } }>
                    <Link
                        to="/activities"
                        style={ { color: '#fff', textDecoration: 'none' } }
                    >
                        Activities
                    </Link>
                </li>
                <li style={ { margin: '0 15px' } }>
                    <Link
                        to="/events"
                        style={ { color: '#fff', textDecoration: 'none' } }
                    >
                        Events
                    </Link>
                </li>
                <li style={ { margin: '0 15px' } }>
                    <Link
                        to="/contact"
                        style={ { color: '#fff', textDecoration: 'none' } }
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
