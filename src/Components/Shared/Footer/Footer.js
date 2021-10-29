import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-top'>
            <div className='container'>
                <div className='row pt-5'>
                    <div className='col-lg-4 text-start'>
                        <h5>REACT TOURISM</h5>
                        <p className=''>
                            House #16, Road # 2,<br />
                            Dhanmondi R/A, Dhaka-1205, Bangladesh <br />
                            Phone : 09613 787801, 09666 787801 <br />
                            E-mail : info@populardiagnostic.com
                        </p>
                    </div>
                    <div className='col-lg-4 text-center'>
                        <h5>IMPORTANT LINKS</h5>
                        <p className=''>
                            House #16, Road # 2,<br />
                            Dhanmondi R/A, Dhaka-1205, Bangladesh <br />
                            Phone : 09613 787801, 09666 787801 <br />
                            E-mail : info@populardiagnostic.com
                        </p>
                    </div>
                    <div className='col-lg-4 text-end'>
                        <h5>CONTACT US</h5>
                        <p className=''>
                            House #16, Road # 2,<br />
                            Dhanmondi R/A, Dhaka-1205, Bangladesh <br />
                            Phone : 09613 787801, 09666 787801 <br />
                            E-mail : info@populardiagnostic.com
                        </p>
                    </div>
                </div>
                <div className='footer'>
                    <hr className='border-white' />
                    <p className='pb-5'>Copyright @ REACT TOURISM || 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;