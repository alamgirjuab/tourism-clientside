import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../src/img/banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-6 col-sm-12 text-white'>
                            <h1>Amazing Tour in Sundarban</h1>
                            <p className='my-4'>Discover youself in one of the World Heritage sites of Bangladesh.</p>
                            <Link className="btn btn-danger" to="/offers">Book Now</Link>
                            {/* <button className='btn btn-danger'>Book Now</button> */}
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 my-5'>
                            <img className='img-fluid rounded' src={image} alt="" />
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;