import React from 'react';
import './Show.css';

const Show = ({ product }) => {
    const { name, img, ratings, userName, body } = product;
    return (
        <div className="product">
            {/* <img src={img} alt="" /> */}
            <div className="product-info">
                <h2 style={{ textAlign: 'center' }}>{userName}</h2>
                <h3 className="product-name ">{name}</h3>
                <p>Ratings: {ratings}</p>
                <p>{body}</p>
            </div>

        </div>
    );

};

export default Show;