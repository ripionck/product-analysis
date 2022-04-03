import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, img, ratings } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Ratings:{ratings}</p>
            </div>
        </div>
    );
};

export default Product;