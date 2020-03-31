import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import retargetEvents from "react-shadow-dom-retarget-events";

class WebComponent extends HTMLElement {
  mountPoint: HTMLElement;

  static get observedAttributes(): string[] {
    return ["title"];
  }

  constructor() {
    super();

    // Attach our component using shadow DOM
    this.mountPoint = document.createElement("span");
    this.attachShadow({ mode: "open" }).appendChild(this.mountPoint);
  }

  render = (): void => {
    ReactDOM.render(<App title={this.title} />, this.mountPoint);

    // We need to retarget any events when using shadow dom. See README.md
    retargetEvents(this.shadowRoot);
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
