import React from 'react';
import Items from '../Items/Items';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div className="text-image">
                <div className="text">
                    <h1>Adidas Footwear</h1>
                    <img src="https://www.shoebrandlist.com/images/adidas-shoe-brands-list-logo.jpg" alt="" />
                    <p>Adidas Footwear is a German sports apparel manufacturer. It is the parent company of the Adidas Group which consists of Reebok, TaylorMade-Adidas and Rockport. Adidas is the largest sportswear manufacturer in Europe and the second-biggest sportswear manufacturer in the world, with American rival Nike being the biggest. It was founded in 1948 by Adolf “Adi” Dassler.
                    </p>
                </div>
                <div className="image">
                    <img src="https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/33/8a/338adeba-b15d-4c03-b22c-90e0f577b279/18_02_2021_history.jpg__800x900_q85_crop-smart_subject_location-968%2C690_subsampling-2.jpg" alt="" />

                </div>
            </div>
            <div className="products-container">
                <Items></Items>
            </div>
        </div >
    );
};

export default Home;