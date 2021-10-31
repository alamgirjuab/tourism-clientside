import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import './Offers.css';

const Offers = () => {
    const [offers, setOffers] = useState([])
    useEffect(() => {
        fetch('https://creepy-catacombs-89683.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setOffers(data))
    }, [])
    return (
        <div className='my-5'>
            <h2 className='text-primary text-center'>Places to Go with REACT</h2>
            <div className='container offer-container my-5'>
                {
                    offers.map(offer => <Package
                        key={offer.id}
                        offer={offer}
                    ></Package>)
                }
            </div>

        </div>
    );
};

export default Offers;