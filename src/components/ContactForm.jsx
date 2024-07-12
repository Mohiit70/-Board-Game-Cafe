import React from 'react';

const ContactForm = () => (
    <section id="contact">
        <h2>Contact Us</h2>
        <form id="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
);

export default ContactForm;
