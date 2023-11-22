import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

export const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-subtitle'>Price: ${price}</p>
                <p className='product-caption product-seller'>Manufacturer: {seller}</p>
                <p className='product-caption product-ratings'>Rating: {ratings}</p>
            </div>
            <button onClick={() => handleAddToCart(props.product)} className='product-button'>
                <span>Add To Cart </span>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    )
}
