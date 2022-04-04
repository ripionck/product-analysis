import React from 'react';
import useProducts from '../../hooks/useProducts';
import Show from '../show/Show';
import './Items.css';

const Items = () => {
    const [products] = useProducts();
    return (
        <div>
            <div className="container">
                <h1 className="heading">Latest Shoe Model Reviews</h1>
                <div className="products-container">
                    {
                        products.slice(0, 3).map(product => <Show
                            key={product.id}
                            product={product}
                        ></Show>)
                    }
                </div>
            </div>
            <div className="button">
                <button className="see-more-btn">See more</button>
            </div>
        </div>
    );
};

export default Items;