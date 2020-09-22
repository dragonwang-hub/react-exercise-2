import React, { Component } from 'react';
import imgOfPhone from './assets/product_image_placeholder.png'
import './Phone.scss';

class Phone extends Component {

  render() {
    const eachPhone = this.props;
    return (
      <div className="Phone">
        <p className="phoneName">{eachPhone.name}</p>
        <img className="img" src={imgOfPhone}></img>
        <p>{eachPhone.price}</p>
        <button className="addCart" onClick={this.props.onClick}>add to cart</button>
      </div>
    );
  }
}

export default Phone;