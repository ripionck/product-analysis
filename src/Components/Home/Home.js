import React from 'react';
import useProducts from '../../hooks/useProducts';
import Reviews from '../Reviews/Reviews';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useProducts();

    return (
        <div className="container">
            <div className="text-image">
                <div className="text">
                    <h2>This is home: {products.length}</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eligendi libero possimus non excepturi officia quod amet a! Dolorum, inventore dolore. Consequuntur sed adipisci in fuga repudiandae voluptatem? Totam et consequuntur tenetur soluta ipsa quae, odio accusantium, obcaecati quibusdam ducimus eos? Inventore exercitationem aliquam deleniti, commodi culpa sunt nisi iste eos? Quibusdam ea cumque laborum, saepe, animi harum quod adipisci consequuntur eveniet, voluptate laboriosam. Quibusdam, aperiam deleniti recusandae error necessitatibus rerum numquam voluptates aliquid nam aliquam. Fugit laborum architecto impedit, omnis dolor repellat ex nemo quam corrupti obcaecati est commodi dolore possimus deleniti laboriosam alias suscipit magnam illum rerum expedita?</p>
                </div>
                <div className="image">
                    <img src="https://www.adidas-group.com/media/filer_public_thumbnails/filer_public/33/8a/338adeba-b15d-4c03-b22c-90e0f577b279/18_02_2021_history.jpg__800x900_q85_crop-smart_subject_location-968%2C690_subsampling-2.jpg" alt="" />

                </div>
            </div>
            <div className="products-container">
                <Reviews></Reviews>
            </div>
        </div >
    );
};

export default Home;