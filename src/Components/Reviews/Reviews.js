import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import './Reviews.css'


const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>This is reviews:{products.length}</h2>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Reviews;