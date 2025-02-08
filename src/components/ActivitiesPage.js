import React from 'react';

const ActivitiesPage = () => {
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1 style={{ color: "#4caf50" }}>Our Activities</h1>
            <p style={{ fontSize: "1.2rem", color: "#555", maxWidth: "800px", margin: "auto" }}>
                We offer a variety of engaging activities for kids, including art, music, and skill development.
                Check out some of our activities below:
            </p>

            {/* First Activity Video */}
            <div style={{ marginTop: "20px" }}>
                <h2>Art & Creativity</h2>
                <div className="video-container">
                    <video controls>
                        <source src={`${process.env.PUBLIC_URL}/videos/activity1.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            {/* Second Activity Video */}
            <div style={{ marginTop: "20px" }}>
                <h2>Music & Fun</h2>
                <div className="video-container">
                    <video controls>
                        <source src={`${process.env.PUBLIC_URL}/videos/activity2.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default ActivitiesPage;
