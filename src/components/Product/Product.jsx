import React from 'react';
import './Product.css';

export const Product = (props) => {
    const { img, name, price, ratings, seller } = props.product;
    console.log(props.product);
    return (
        <div className='product'>
            <img src={img} alt={name} />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-subtitle'>Price: ${price}</p>
                <p className='product-caption product-seller'>Manufacturer: {seller}</p>
                <p className='product-caption product-ratings'>Rating: {ratings}</p>
            </div>
            <button className='product-button'>Add To Cart</button>
        </div>
    )
}
