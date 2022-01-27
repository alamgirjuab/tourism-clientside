import React from 'react';
import { Container, Dropdown, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../img/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <Navbar className="py-4" bg="info" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <NavLink to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <NavLink className='link' to="/home">Home</NavLink>
                        <NavLink className='link' to="/about">About us</NavLink>
                        <NavLink className='link' to="/offers">Offers</NavLink>
                        <NavLink className='link' to="/contact">Contact us</NavLink>

                        {/*-------------------------- 
                          | Conditional menu option |
                          -------------------------*/}
                        {
                            user?.email ? <div className="d-flex align-items-center">
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="body" id="dropdown-basic">
                                            <img className="w-50 rounded-circle" src={user?.photoURL} alt="" />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <div className="ms-2">
                                                <NavLink className='d-block text-decoration-none' to="/myOrders">My Orders</NavLink>
                                                <NavLink className='d-block text-decoration-none' to="/addService">Add a new service</NavLink>
                                                <NavLink className='d-block text-decoration-none' to="/manageOrders">Manage all orders</NavLink>
                                                <a className='d-block text-decoration-none' href="#" onClick={logOut}>Logout</a>
                                                {/* <Button className="me-3" onClick={logOut} variant="body">Logout</Button> */}
                                            </div>
                                            {/* <Dropdown.Item to="/myOrders">Action</Dropdown.Item> */}
                                            {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    {/* <a href="#login">{user?.displayName}</a> */}
                                </div>
                            </div> : <NavLink className='link' to="/login">Login</NavLink>
                        }
                        {/* {user?.email ?
                            <NavLink className='link' to="/myOrders">My Orders</NavLink> :
                            <NavLink className='link' to="/"></NavLink>
                        }
                        {user?.email ?
                            <NavLink className='link' to="/addService">Add a new service</NavLink> :
                            <NavLink className='link' to="/"></NavLink>
                        }
                        {user?.email ?
                            <NavLink className='link' to="/manageOrders">Manage all orders</NavLink> :
                            <NavLink className='link' to="/"></NavLink>
                        }
                        {user?.email ?
                            <Button className="me-3" onClick={logOut} variant="light">Logout</Button> :
                            <NavLink className='link' to="/login">Login</NavLink>
                        } */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;