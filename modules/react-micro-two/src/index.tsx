import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export class WebComponent extends HTMLElement {
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

interface WebComponentProps {
  title: string;
  counter: number;
}

// Add our component to the JSX intrinsic element types, so we can use it in react
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "react-micro-two": WebComponentProps;
    }
  }
}

customElements.define("react-micro-two", WebComponent);
