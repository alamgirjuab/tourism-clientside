import React from 'react';
import Banner from '../Banner/Banner';
import Offers from '../Offers/Offers';
import Subscription from '../Subscription/Subscription';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Subscription></Subscription>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;