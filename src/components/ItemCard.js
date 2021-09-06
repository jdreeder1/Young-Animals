import React, { Component } from 'react';
import { useCart } from 'react-use-cart';

const ItemCard = (props) => {
    const { addItem } = useCart();
        
        return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{height: '50vh'}}>
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={props.item.image} className="card-img-top" style={{height: '200px'}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.item.descrip}</h5>
                        <h5 className="card-title">Price: ${props.item.price}</h5>
                        <p className="card-text">Status: {props.item.quantity} </p>
                        <button className="btn btn-success" onClick={() => addItem(props.item)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
}

export default ItemCard;
