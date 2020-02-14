import React, { Component } from "react";

export class App extends Component {
  state = {
    hello: "React 0.14"
  };

  styles = {
    fontFamily: "'Avenir', Helvetica, Arial, sans-serif",
    textAlign: "center",
    color: "#2c3e50",
    margin: "12px",
    padding: "12px",
    border: "1px solid darkblue"
  };

  render() {
    const { value, title } = this.props;
    const { hello } = this.state;
    return (
      <div style={this.styles}>
        <h3>{title}</h3>
        <h4>version: {hello}</h4>
        <p>Counter: {value}</p>
      </div>
    );
  }
}
