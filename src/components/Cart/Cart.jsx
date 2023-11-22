import React from 'react';
import './Cart.css';

export const Cart = (props) => {
    const { cart } = props;
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // product.quantity = product.quantity || 1;
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping * product.quantity;
        quantity += product.quantity;
    }

    const totalTax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + totalTax;

    return (
        <div className='cart-container'>
            <h3>Cart Container</h3>
            <p><b>Selected Item:</b> {quantity}  </p>
            <p><b>Total Price:</b> ${totalPrice} </p>
            <p><b>Total Shopping Price:</b> ${totalShipping} </p>
            <p><b>Tax:</b> ${totalTax.toFixed(2)} </p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
        </div>
    )
}
