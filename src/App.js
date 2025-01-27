import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StaffPage from './components/StaffPage';
import ActivitiesPage from './components/ActivitiesPage';
import EventsPage from './components/EventsPage';
import ContactPage from './components/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App () {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/staff" element={ <StaffPage /> } />
                <Route path="/activities" element={ <ActivitiesPage /> } />
                <Route path="/events" element={ <EventsPage /> } />
                <Route path="/contact" element={ <ContactPage /> } />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
