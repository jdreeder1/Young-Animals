import React from 'react';
//import PropTypes from 'prop-types'; //props are to React what attributes are to HTML
import SlideShow from './SlideShow';
//import stock from '../stock';
//import base from '../base';


class App extends React.Component {
    
    render(){
        return (
            <div className="container">
                <SlideShow/>
            </div>
        );
    }
}

export default App;