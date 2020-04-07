import React from "react";
import ReactDOM from "react-dom";
import root from "react-shadow/styled-components";
import App from "./App";

class WebComponent extends HTMLElement {
  mountPoint: HTMLElement;
  styleContainer: HTMLElement;

  static get observedAttributes(): string[] {
    return ["title"];
  }

  render() {
    ReactDOM.render(
      <root.div style={{ all: "initial" }}>
        <App title={this.title} />
      </root.div>,
      this
    );
  }

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
