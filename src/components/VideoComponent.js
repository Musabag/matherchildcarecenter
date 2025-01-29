import React from "react";

const VideoComponent = () => {
    return (
        <div style={ { textAlign: "center", margin: "20px" } }>
            <h2>Watch Our Activities!</h2>
            <video width="800" controls>
                <source src="/videos/activity1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoComponent;
