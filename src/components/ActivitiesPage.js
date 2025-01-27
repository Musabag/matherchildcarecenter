import React from 'react';

const ActivitiesPage = () => {
    return (
        <div>
            <h1>Our Activities</h1>
            <p>We offer a variety of engaging activities for kids, including art, music, and skill development. Check out some of our activities below:</p>
            <video controls>
                <source src="/videos/activity1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <video controls>
                <source src="/videos/activity2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default ActivitiesPage;
