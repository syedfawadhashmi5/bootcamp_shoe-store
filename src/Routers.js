import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Product from './Components/Product';
import ProductDetails from './Components/ProductDetails';
import {ProductIndex} from './ProductIndex'

function Routers() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="About" element={<About />} />
                <Route path="*" element={<NotFound />} />
                <Route path="products" element={<Product />}>
                <Route path="/" element={<ProductIndex />} />
                <Route path=":productsId" element={<ProductDetails />} />
                </Route>
            </Routes>
        </div>
    )
}


export default Routers