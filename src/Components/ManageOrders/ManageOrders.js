import React, { useEffect, useState } from 'react';
import './ManageOrders.css';

const ManageOrders = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://creepy-catacombs-89683.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = (id) => {
        const url = `https://creepy-catacombs-89683.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }

            })
    }

    return (
        <div className='container'>
            <h2 className="text-primary my-5">Manage Orders</h2>
            {
                services.map(service => <div
                    key={service._id} className="d-flex justify-content-between mb-5 align-items-center order-container">
                    <img className="img-fluid" src={service.img} alt="" />
                    <div className="mx-5 text-white">
                        <h3 className="mb-5">{service.name}</h3>
                        <p>{service.description}</p>
                    </div>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageOrders;