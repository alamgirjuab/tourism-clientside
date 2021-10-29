import React from 'react';
import { Link } from 'react-router-dom';
import './Package.css';

const Package = ({ offer }) => {
    const { sl, name, description, img } = offer;
    return (
        <div className='container package'>
            <img className='img-fluid' src={img} alt="" />
            <h2 className='mt-3'>{name}</h2>
            <p className='card-description'>{description}</p>
            <Link to={`/booking/${sl}`}>
                <button className='btn btn-danger'>Book Now</button>
            </Link>
        </div>
    );
};

export default Package;