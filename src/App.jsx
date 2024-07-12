import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Calendar from './components/Calendar';
import Menu3D from './components/Menu3D';
import ContactForm from './components/ContactForm';
import './css/styles.css';

const App = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <HeroSection />
                <Calendar />
                <Menu3D />
                <ContactForm />
            </main>
        </div>
    );
};

export default App;
