import React, { createElement } from 'react';
//import axios from 'axios';
import Stock from './Stock';
import '../css/inventory.css';

export default class Inventory extends React.Component {
    //rconst is shorthand for cstor below
    constructor(props) {
        super(props)
        this.state = null;
    }
    
//calls to setState are async - but can use callback func after using setState to access data in state
    componentDidMount(){
        fetch('/stock')
            .then(res => res.json())
            .then(item => this.setState({
                item
            }))
    }
    checkOut(){
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
    render(){
        return (
            <>
                <button onClick={this.checkOut}>Click Me!</button>
                <div className="inner_div"></div>
                <Stock data={this.state} />
            </>
        )
    }
} 