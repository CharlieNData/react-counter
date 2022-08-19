import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState(
      {count: this.state.count + 1}
    );
  }

  decrement = () => {
    this.setState(
      {count: this.state.count - 1}
    );
  }

  reset = () => {
    this.setState(
      {count: 0}
    )
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Count Up</button>
        <button onClick={this.decrement}>Count Down</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
