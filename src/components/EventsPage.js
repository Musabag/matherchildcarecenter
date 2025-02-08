import React from 'react';

const EventsPage = () => {
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1 style={{ color: "#4caf50" }}>Upcoming Events</h1>
            <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "800px", margin: "auto" }}>
                Take a look at some of our amazing events for children and families.
            </p>

            {/* First Event Video */}
            <div className="video-container">
                <h2>Annual Fun Day</h2>
                <video controls>
                    <source src={`${process.env.PUBLIC_URL}/videos/activity1.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Second Event Video */}
            <div className="video-container">
                <h2>Music Festival</h2>
                <video controls>
                    <source src={`${process.env.PUBLIC_URL}/videos/event2.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default EventsPage;
