import React from 'react';

const EventsPage = () => {
    return (
        <div style={ { padding: "20px" } }>
            <h1 style={ { textAlign: "center", color: "#4caf50" } }>Our Events</h1>
            <div style={ { marginTop: "20px", display: "grid", gap: "20px" } }>
                <video
                    controls
                    style={ { width: "100%", borderRadius: "10px" } }
                    src="/videos/activity1.mp4"
                >
                    Your browser does not support the video tag.
                </video>
                <video
                    controls
                    style={ { width: "100%", borderRadius: "10px" } }
                    src="/videos/video2.mp4"
                >
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default EventsPage;
