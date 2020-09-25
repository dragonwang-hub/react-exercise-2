import React, { Component } from 'react';
import StoreHead from './StoreHead';
import Phones from './Phones';
import './App.scss';

class App extends Component {
  state = {
    counts: 0,
  }

  onAddCart = () => {
    this.setState({
      counts: this.state.counts + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <StoreHead className="storeHead"
          countOfStore={this.state.counts}
        ></StoreHead>
        <Phones className="phones"
          onClick={this.onAddCart}
        ></Phones>
      </main>
    );
  }
}

export default App;

