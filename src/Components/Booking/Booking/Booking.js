import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { offersId } = useParams();
    return (
        <div>
            <h2>This is Booking: {offersId}</h2>
        </div>
    );
};

export default Booking;