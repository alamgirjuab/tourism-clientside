import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Offers from '../Offers/Offers';
import Subscription from '../Subscription/Subscription';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offers></Offers>
            <Blogs></Blogs>
            <Subscription></Subscription>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;