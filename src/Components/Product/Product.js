import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, ratings, userName, body } = product;
    return (
        <div className="product">
            {/* <img src={img} alt="" /> */}
            <div className="product-info">
                <h2 style={{ textAlign: 'center' }}>{userName}</h2>
                <h3>{name}</h3>
                <p>Ratings: {ratings}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Product;