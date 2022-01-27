import React from 'react';
import './Pagination.css';

const Pagination = ({ data, pageHandler }) => {
    let pageNumbers = []
    for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            {
                pageNumbers.map(page => <div className="page-number" onClick={() => pageHandler(page)}>{page}</div>)
            }
        </div>
    );
};

export default Pagination;