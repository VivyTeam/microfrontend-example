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

  // attributeChang;
  // attributeChangedCallback(attributeChangedCallback)

  attributeChangedCallback(
    attrName: string,
    oldVal: string,
    newVal: string
  ): void {
    switch (attrName) {
      case "counter": {
        const newValueInt = parseInt(newVal, 10);
        if (Number.isNaN(newValueInt)) {
          break;
        }
        this.counter = newValueInt;
        this.render();
        break;
      }
      default:
        break;
    }
  }
}
customElements.define("react-micro-two", WebComponent);
