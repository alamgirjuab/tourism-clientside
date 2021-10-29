import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <>
            <Navbar bg="info" variant="dark">
                <Container>
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className='link' to="/home">Home</NavLink>
                        <NavLink className='link' to="/about">About Us</NavLink>
                        <NavLink className='link' to="/offers">Offers</NavLink>
                        <NavLink className='link' to="/contact">Contact Us</NavLink>

                        <Navbar.Text>
                            Signed in as: <a href="#login">Name</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;