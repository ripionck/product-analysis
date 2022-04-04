import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, ratings, userName, body } = product;
    return (
        <div className="product">
            {/* <img src={img} alt="" /> */}
            <div className="product-info">
                <p className="product-name">{name}</p>
                <h2>{userName}</h2>
                <p>Ratings:{ratings}</p>
                <p>{body}</p>
            </div>
        </div>
    );
};

export default Product;