import React, { useState } from 'react';
import fakeData from './../../fakeData/index';
import './Shop.css'
import Products from './../Products/Products';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProduct] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProducts = (product) =>{
        console.log('clicked', product)
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="ShopContainer">
            <div className="productsCountianer">
                {
                    products.map(pd => <Products product={pd} handleAddProducts={handleAddProducts}></Products>)
                }
            </div>
            <div className="cartContainer">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;