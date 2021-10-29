import React from 'react';
import imgNotFound from '../../img/404.png';

const NotFound = () => {
    return (
        <div className='container text-center my-5'>
            <h1 className='mt-5'>Page not Found</h1>
            <img className='my-5' src={imgNotFound} alt="" />
        </div>
    );
};

export default NotFound;