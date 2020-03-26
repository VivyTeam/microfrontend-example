import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class WebComponent extends HTMLElement {
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

interface WebComponentProps {
  title: string;
}

// Add our component to the JSX intrinsic element types, so we can use it in react
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "react-micro-one": WebComponentProps;
    }
  }
}

customElements.define("react-micro-one", WebComponent);
