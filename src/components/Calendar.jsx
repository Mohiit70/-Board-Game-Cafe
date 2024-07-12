import React, { useEffect } from 'react';

const Calendar = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.dataset.useServiceCore = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="events">
            <h2>Events Calendar</h2>
            <div className="elfsight-app-20aba6c6-7233-4b40-af81-642a74c91f20" data-elfsight-app-lazy></div>
        </section>
    );
};

export default Calendar;
