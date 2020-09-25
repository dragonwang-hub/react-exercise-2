import React, { Component } from 'react';
import Phone from './Phone';
import './Phones.scss';

class Phones extends Component {
  state = {
    Phones: [],
  };
  async componentWillMount() {
    const result = await fetch('http://localhost:3000/products');
    const data = await result.json();
    this.setState({
      Phones: data,
    });
  }

  render() {

    return (
      <div className="phones">
        {this.state.Phones.map((phone, index) => (
          <div key={index}>
            <div className="phone_type">{phone.category}</div>
            <Phone
              className="phone"
              eachPhone={phone}
              onClick={this.props.onClick}
            ></Phone>
          </div>
        ))}
      </div>
    );
  }
}
export default Phones;
