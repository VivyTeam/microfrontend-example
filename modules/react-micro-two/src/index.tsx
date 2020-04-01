import React from "react";
import ReactDOM from "react-dom";
import root from "react-shadow";
import App from "./App";

export class WebComponent extends HTMLElement {
  mountPoint: HTMLElement;
  styleContainer: HTMLElement;
  counter = 0;

  static get observedAttributes() {
    return ["title", "counter"];
  }

  render() {
    ReactDOM.render(
      <root.div>
        <App title={this.title} counter={this.counter} />
      </root.div>,
      this
    );
  }

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
