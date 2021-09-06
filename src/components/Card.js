import React from 'react'
import PropTypes from 'prop-types';
import '../css/card.css';

class Card extends React.Component {
    /*constructor(){
        super();
        this.state = {
          name: "React"
        }
      }*/

      render(){
        const { name, image } = this.props;
        return (
            <div className="card">
                <img className="pic" alt={name} src={image} />
            </div>
        )
      }
}

export default Card;
