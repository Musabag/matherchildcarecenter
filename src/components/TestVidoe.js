import React from 'react';

const TestVideo = () => {
    return (
        <div style={ { textAlign: 'center', padding: '20px' } }>
            <h2 style={ { color: '#4caf50' } }>Activity Videos</h2>

            {/* ✅ Video 1 */ }
            <video width="600" controls>
                <source src="/videos/activity1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* ✅ Video 2 */ }
            <video width="600" controls>
                <source src="/videos/activity2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* ✅ Download Links */ }
            <div style={ { marginTop: "20px" } }>
                <a href="/videos/activity1.mp4" download>Download Activity 1</a>
                <a href="/videos/activity2.mp4" download>Download Activity 2</a>
            </div>
        </div>
    );
};

export default TestVideo;
