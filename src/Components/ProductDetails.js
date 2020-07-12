import React from 'react';
import { useParams } from 'react-router-dom';
import Shoe from '../Shoe_Store.json';


function ProductDetails() {
    const { productsId } = useParams()
    console.log(productsId)
    const product = Shoe[productsId];
    return (
        <div>
             <img src={product.img} height={450} alt="shoe" />
             <h4>{product.name}</h4>
             <h4>{product.name2}</h4>
        </div>
    )
}


export default ProductDetails