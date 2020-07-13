import React from 'react';
import { Link } from 'react-router-dom';
import Shoe from './Shoe_Store.json';
import Button from '@material-ui/core/Button';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export const ProductIndex = () => {
    return (
        <div>
            <div className="productContainer">
                {Object.keys(Shoe).map(KeyName => {
                    const shoe = Shoe[KeyName];
                    return (
                        <Link key={KeyName} 
                            className="link" 
                            to={KeyName}>
                               <img src={shoe.img} height={200} alt="shoe" />
                               <h4>{shoe.name}</h4>
                               <h4>{shoe.name2}</h4>
                               <h4><Button variant="outlined" color="primary"   startIcon={<ShoppingCartOutlinedIcon color="secondary" />}>Add T0 Card</Button></h4>
                    </Link>)
                })}
            </div>
        </div>
    )
}
