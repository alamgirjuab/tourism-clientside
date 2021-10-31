import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

const Booking = () => {
    const { offersId } = useParams();
    const [offers, setOffers] = useState({})
    useEffect(() => {
        fetch(`https://creepy-catacombs-89683.herokuapp.com/services/${offersId}`)
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (
        <div className="container my-5">
            <h2 className="text-primary mb-4">Trip Booking</h2>
            <div className="shadow-lg p-3 mb-5 pb-5 bg-body rounded text-center">
                <h2 className="my-4">Booking ID: {offersId}</h2>
                <img className="rounded mb-4" src={offers.img} alt="" />
                <h2 className="mb-4">{offers.name}</h2>
                <p className="w-25 mx-auto mb-4">{offers.description}</p>
                {/* <button className="btn-success px-3 py-2 rounded-pill mb-4" type="submit">Confirm your tour</button> */}
                <NavLink className='btn-success px-3 py-2 rounded-pill mb-4 text-decoration-none' to="/bookingForm">Book Now</NavLink>
                <NavLink className='btn-success px-3 py-2 rounded-pill mb-4 text-decoration-none mx-3' to="/offers">More Offers</NavLink>
                <NavLink className='btn-success px-3 py-2 rounded-pill mb-4 text-decoration-none' to="/home">Go Home</NavLink>
            </div>
        </div>
    );
};

export default Booking;