import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="products-img">
                <img src={img} alt="Products"></img>
            </div>
            <div className="products-details">
                <h3>{name}</h3>
                <p><small>By: <b>{seller}</b></small></p>
                <h5>${price}</h5>
                <p>Only {stock} left in stock - order soon</p>
                <button className="cart-button" onClick={()=>props.handleAddProducts(props.product)}><FontAwesomeIcon icon={faShoppingBag}/> Add to cart</button>
            </div>
        </div>
    );
};


export default Products;