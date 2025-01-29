import React from 'react';

const TestVideo = () => {
    return (
        <div style={ { padding: "20px" } }>
            <h1 style={ { textAlign: "center", color: "#4caf50" } }>Test Videos</h1>
            <div style={ { display: "grid", gap: "20px", marginTop: "20px" } }>
                <video
                    controls
                    style={ { width: "100%", maxWidth: "600px", borderRadius: "10px" } }
                >
                    <source src="/videos/activity1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video
                    controls
                    style={ { width: "100%", maxWidth: "600px", borderRadius: "10px" } }
                >
                    <source src="/videos/activity2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
};

export default TestVideo;

