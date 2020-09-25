import React, { Component } from 'react';
import './StoreHead.scss';

class StoreHead extends Component {
  render() {
    return (
      <div className="StoreHead">
        <h1>Store</h1>
        <div id="cart">
          <i className="fa fa-shopping-cart" />
          <a className="count">{this.props.countOfStore}</a>
        </div>
      </div>
    );
  }
}

export default StoreHead;


