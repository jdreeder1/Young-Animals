import React, { Component } from 'react';
import '../css/cart.css';
import { useCart } from 'react-use-cart';
import { formatPrice } from '../helper';
//rcc tab to create React class component

const Cart = () => {
    const { isEmpty, totalUniqueItems, totalItems, items, cartTotal, updateItemQuantity, removeItem, emptyCart } = useCart();

    const checkOut = () => {
        fetch('/create_checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                items: [
                    {id: 1, quantity: 3},
                    {id: 2, quantity: 1}
                ]
            })
        })
        .then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json)) //makes sure fetch will reject and fail if no response rcvd
        })
        .then(({ url }) => {
            //console.log(url)
            window.location = url 
        })
        .catch(err => console.error(err))
    }

    const submitOrder = async () => {
        let order = items.map(item => {
            return {id: item.id, quantity: item.quantity}
        });
        //console.log(order);
        console.log(JSON.stringify(order))
        /*const resp = await fetch('/shopping', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(ordr),
            });
        try {
            const data = await resp.text();
            console.log(data);
        }
        catch(err){
            console.log(err);
        }*/
        return order
    }

    if(isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems}) </h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.image} style={{height: '6rem'}}/></td>
                                <td>{item.descrip}</td>
                                <td>{formatPrice(item.price)}</td>
                                <td>Quantity ({item.quantity})</td>
                                <td>
                                    <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity-1)}>-</button>
                                    <button className="btn btn-info ms-2" onClick={() => updateItemQuantity(item.id, item.quantity+1)}>+</button>
                                    <button className="btn btn-danger ms-2" onClick={() => removeItem(item.id)}> Remove Item</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total Price: {formatPrice(cartTotal)}</h2>                            
                </div>
                <div className="col-auto">
                    <button className="btn btn-danger m-2" onClick={emptyCart}>Clear Cart</button>
                    <button className="btn btn-primary m-2" onClick={checkOut}>Buy Now</button>
                </div>

            </div>
        </section>
    )
}

export default Cart;
