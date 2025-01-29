import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/testimonials.css"; // ✅ Ensure you have a testimonials.css file for styles

const testimonials = [
    {
        name: "Sarah M.",
        comment: "My daughter absolutely loves coming here! The staff is so caring, and I’ve seen her grow so much in confidence and creativity.",
        photo: "/assets/parents/sarah.jpg" // ✅ Ensure this file exists in 'public/assets/parents/'
    },
    {
        name: "James T.",
        comment: "The activities are incredible! My son can’t stop talking about the art and music lessons. Highly recommend this childcare center.",
        photo: "/assets/parents/james.jpg" // ✅ Update with actual images
    },
    {
        name: "Emily R.",
        comment: "The environment is so nurturing and inspiring! I’ve noticed amazing improvements in my child’s social and learning skills.",
        photo: "/assets/parents/emily.jpg" // ✅ Make sure this image exists
    },
];

const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true, // ✅ Smooth fade effect for better transition
    };

    return (
        <div className="testimonial-section">
            <h2 className="testimonial-title">What Parents Are Saying</h2>
            <Slider { ...settings }>
                { testimonials.map((testimonial, index) => (
                    <div key={ index } className="testimonial-card">
                        <img src={ testimonial.photo } alt={ testimonial.name } className="testimonial-img" />
                        <p className="testimonial-comment">"{ testimonial.comment }"</p>
                        <h3 className="testimonial-name">- { testimonial.name }</h3>
                    </div>
                )) }
            </Slider>
        </div>
    );
};

export default Testimonials;
