import React, { Component } from 'react';
import imgOfPhone from './assets/product_image_placeholder.png';
import './Phone.scss';

class Phone extends Component {
  render() {
    return (
      <div className="Phone">
        <p className="phoneName">{this.props.eachPhone.name}</p>
        <img className="img" src={imgOfPhone}></img>
        <p>{this.props.eachPhone.price}</p>
        <button className="addCart" onClick={this.props.onClick}>
          add to cart
        </button>
      </div>
    );
  }
}

export default Phone;
