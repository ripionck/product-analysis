import React from 'react';
import useProducts from '../../hooks/useProducts';
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
                    <img src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0846e90b15144861b33dacf500e3cfd1_9366/Kaptir_2.0_Shoes_White_H00276_01_standard.jpg" alt="" />

                </div>
            </div>
        </div >
    );
};

export default Home;