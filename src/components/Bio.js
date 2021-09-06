import React from 'react';
import Header from './Header';
import Carousel from 'react-elastic-carousel';
import PropTypes from 'prop-types';
import Card from './Card';
import images from '../images';

//can also be export default class Bio Weather extends React.Component {}
class Bio extends React.Component {
    constructor() {
        super();
        this.state = {
            images
        }
    }
    render(){
    return (
            <>
            <Header />
                <h1>Who Are We??</h1>
                <h2>(Young Animals...duh)</h2>
                <p>No, but seriously, we're a dad hat-wearing math rock quintet from St. Louis. Mixing Midwest Emo with Math Rock, comin’ at ya.</p>
                <Carousel>
                    <Card name={this.state.images.image5.name} image={this.state.images.image5.image} />
                    <Card name={this.state.images.image1.name} image={this.state.images.image1.image} />
                    <Card name={this.state.images.image3.name} image={this.state.images.image3.image} />
                    <Card name={this.state.images.image2.name} image={this.state.images.image2.image} />
                    <Card name={this.state.images.image4.name} image={this.state.images.image4.image} />
                </Carousel>
            </>
        );
    }
}

export default Bio;