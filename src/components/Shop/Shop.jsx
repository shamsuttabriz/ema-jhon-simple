import React, { useEffect, useState } from 'react';
import './Shop.css';
import { Product } from '../Product/Product';
import { Cart } from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

export const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const storedCart = getShoppingCart();
        const saveCart = [];
        // step 01: get id added the product
        for (const id in storedCart) {
            // step 02: get the product product state using by id
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // step 03: added the quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 04: added the quantity to the saveCart
                saveCart.push(addedProduct)
            }
        }
        // step 05: set the cart
        setCart(saveCart);
    }, [products])

    const handleAddToCart = (product) => {
        let newCart = [];
        // const newCart = [...cart, product];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = cart.filter(pd => pd.id !== product.id)
            newCart = [...remaining, exists];
        }
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}
