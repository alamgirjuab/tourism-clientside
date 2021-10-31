import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { offersId } = useParams();
    const [offers, setOffers] = useState({})
    useEffect(() => {
        fetch(`https://creepy-catacombs-89683.herokuapp.com/services/${offersId}`)
            .then(res => res.json())
            .then(data => setOffers(data));
    }, [])
    return (
        <div className="my-5">
            <h2>Booking ID: {offersId}</h2>
            <img className="rounded" src={offers.img} alt="" />
            <h2>{offers.name}</h2>
            <p>{offers.description}</p>
            <button className="btn-success px-3 py-2 rounded-pill" type="submit">Confirm your tour</button>
        </div>
    );
};

export default Booking;