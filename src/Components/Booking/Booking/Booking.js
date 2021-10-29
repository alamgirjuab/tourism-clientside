import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { offersSl } = useParams();
    return (
        <div>
            <h2>This is Booking: {offersSl}</h2>
        </div>
    );
};

export default Booking;