import React from 'react';
import Header from './Header';
import { CartProvider } from 'react-use-cart';
import Shopping from './Shopping';
import Cart from './Cart';

//import PropTypes from 'prop-types'; //props are to React what attributes are to HTML
//import SlideShow from './SlideShow';
//import stock from '../stock';
//import base from '../base';


class App extends React.Component {

    render(){
        return (
            <div className="container">
                <Header />
                <CartProvider>
                    <Shopping />
                    <Cart />
                </CartProvider>
            </div>
        );
    }
}

export default App;