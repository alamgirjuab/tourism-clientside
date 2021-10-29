import React from 'react';
import './Package.css';

const Package = ({ offer }) => {
    const { name, description, img } = offer;
    return (
        <div className='container package'>
            <img className='img-fluid' src={img} alt="" />
            <h2 className='mt-3'>{name}</h2>
            <p className='card-description'>{description}</p>
            <button className='btn btn-danger'>Book Now</button>
        </div>
    );
};

export default Package;