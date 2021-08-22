import React from 'react';
import Header from './Header';

//can also be export default class Bio Weather extends React.Component {}
class Bio extends React.Component {
    render(){
    return (
            <>
            <Header />
                <h1>Who Are We??</h1>
                <h2>(Young Animals...duh)</h2>
                <p>No, but seriously, we're a dad hat-wearing math rock quintet from St. Louis. Mixing Midwest Emo with Math Rock, comin’ at ya.</p>
            </>
        );
    }
}

export default Bio;