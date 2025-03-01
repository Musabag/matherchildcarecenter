import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
import StaffPage from './StaffPage';
import ActivitiesPage from './ActivitiesPage';
import EventsPage from './EventsPage';
import ContactPage from './ContactPage';
import Testimonials from './Testimonials';
import '@fortawesome/fontawesome-free/css/all.min.css'; // ✅ FontAwesome icons
import '../App.css'; // ✅ Ensure this file exists at `src/App.css`

const App = () => {
    return (
        <Router>
            <Navbar />
            
            <main style={{ minHeight: '80vh', paddingBottom: '20px' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/staff" element={<StaffPage />} />
                    <Route path="/activities" element={<ActivitiesPage />} />
                    <Route path="/events" element={<EventsPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </main>

            {/* ✅ Testimonials placed correctly to avoid loading delays */}
            <Testimonials />

            <Footer />
        </Router>
    );
};

export default App;
