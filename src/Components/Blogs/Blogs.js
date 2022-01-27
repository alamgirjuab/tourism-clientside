import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Pagination from '../Pagination/Pagination';

const Blogs = () => {
    const [data, setData] = useState([])
    const [perPage, setPerPage] = useState([])
    useEffect(() => {
        axios.get('blogs.json')
            .then(res => {
                setData(res.data);
                setPerPage(res.data.slice(0, 10));
            })
    }, [])
    const pageHandler = (pageNumber) => {
        setPerPage(data.slice((pageNumber * 10) - 10, pageNumber * 10));
    }
    return (
        <div>
            {
                data.length >= 1 ? <div className="container">
                    <h2 className="text-center mb-5 text-primary">-- Blogs and User Experience --</h2>
                    {perPage.map(blog => <div key={blog.id} className="shadow p-3 mb-5 bg-body rounded">
                        <h3>{blog.travelName}</h3>
                        <p>{blog.travelExperience}</p>
                        <p>Expense: ${blog.expense}</p>
                    </div>)}
                    <div className="">
                        <Pagination data={data} pageHandler={pageHandler} />
                    </div>
                </div> : <p>No data to display...</p>
            }
        </div>
    );
};

export default Blogs;