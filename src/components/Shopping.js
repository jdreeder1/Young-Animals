import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCard from './ItemCard';

export default class Shopping extends Component {
    constructor() {
        super();
        this.state = {
            stock: [],
            isLoaded: false,
        };
    }
//calls to setState are async - but can use callback func after using setState to access data in state
    componentDidMount(){
        fetch('/read')
            .then(res => res.json())
            .then(items => {
                this.setState({
                   stock: items,
                   isLoaded: true
                }, ()=> {
                    console.log(this.state.stock[0])
                })
            })
    }
    render() {
        const { stock, isLoaded } = this.state;
        if (!isLoaded) {
            return <div className="inner_div">Loading ... </div>;
        }
        else { 
            return (
                <>
                <h1 className="text-center mt-3">All Items</h1> 
                <section className="py-4 container">
                    <div className="row justify-content-center">
                        {stock.map(item => (
                            <ItemCard key={item.id} item={item} />
                        ))
                        }
                    </div>
                </section>
                </>
            )   
        }
    }
}
