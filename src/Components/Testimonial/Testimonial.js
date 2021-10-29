import React from 'react';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div>
            <h2 className='text-primary mb-5'>Gallery</h2>
            <div className='container bottom-image mb-5'>
                <div className='image'>
                    <img className='img-fluid' src={img1} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img2} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img3} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img4} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img5} alt="" />
                </div>
                <div className='image'>
                    <img className='img-fluid' src={img6} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;