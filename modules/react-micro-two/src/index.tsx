import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class WebComponent extends HTMLElement {
  static get observedAttributes() {
    return ["title", "counter"];
  }

  counter = 0;

  render = (): void => {
    ReactDOM.render(<App title={this.title} counter={this.counter} />, this);
  };

  connectedCallback(): void {
    this.render();
  }

  attributeChangedCallback(
    attrName: string,
    oldVal: string,
    newVal: string
  ): void {
    if (attrName === "counter") {
      this.counter = parseInt(newVal, 10);
      this.render();
    }
  }
}
customElements.define("react-micro-two", WebComponent);
