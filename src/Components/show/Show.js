import React from 'react';
import './Show.css';

const Show = ({ product }) => {
    const { name, img, ratings, userName, body } = product;
    return (
        <div className="product">
            <div className="product-info">
                <p className="product-name">{name}</p>
                <h2>{userName}</h2>
                <p>Ratings:{ratings}</p>
                <p>{body}</p>
            </div>
        </div>
    );

};

export default Show;