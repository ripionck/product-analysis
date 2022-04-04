import React from 'react';
import useProducts from '../../hooks/useProducts';
import Show from '../show/Show';
import './Items.css';

const Items = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1 className="heading">Latest Shoe Model Reviews</h1>
            <div className="products-container">
                {
                    products.slice(0, 3).map(product => <Show
                        key={product.id}
                        product={product}
                    ></Show>)
                }
            </div>
            <button className="see-more">See more</button>
        </div>
    );
};

export default Items;