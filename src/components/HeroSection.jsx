import React from 'react';
import '../css/styles.css';

const HeroSection = () => (
    <section id="hero" className="hero-section">
        <div className="hero-content">
            <div className="left-content">
                <h1><strong>Welcome to Sip & Play</strong></h1>
                <p>Your favorite board game cafe in Brooklyn</p>
                <p>Join us for a relaxing atmosphere and a variety of board games!</p>
            </div>
            <div className="right-content">
                <img src="img/fotor-ai-20240712205220.jpg" alt="Hero Image" />
            </div>
        </div>
    </section>
);

export default HeroSection;
