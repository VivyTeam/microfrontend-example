import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class HelloReactWC extends HTMLElement {
  static get observedAttributes(): string[] {
    return ["title"];
  }
  render = (): void => {
    ReactDOM.render(<App title={this.title} />, this);
  };
  connectedCallback(): void {
    this.render();
  }
}
customElements.define("react-micro-two", HelloReactWC);
