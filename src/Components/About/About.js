import React from 'react';
import img from '../../img/about-img.jpg';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <img className="img-fluid" src={img} alt="" />
            <h2 className='text-primary my-5'>About Us</h2>
            <p className='para mb-5'>Tiger Tour's vision is to become established as a global tourist destination in Bangladesh, especially for those most concerned with the natural environment, interested in innovative works for human development, poverty alleviation, entrepreneurship and enterprise and a very extensive waterway formed by three major rivers of the world and their several hundred branches and tributaries. The vision of visitnorway.com is to make it easy to choose Norway as a travel destination and to promote a more sustainable form of travel. The website contains thousands of travel industry business listings from all over Norway provided by third parties such as local tourism offices and destination marketing organisations. Please note that the website contains links to commercial partners. While Innovation Norway endeavours to ensure that all information on the site is accurate, we cannot be held responsible or liable for any claims caused by information supplied on this website. Prices and availability are subject to change without notice. You should always check the accuracy of the information provided with the relevant supplier. Innovation Norway is under no circumstances responsible for the contents of external web pages linking to its website.
            </p>
        </div>
    );
};

export default About;