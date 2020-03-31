import React from "react";
import ReactDOM from "react-dom";
import retargetEvents from "react-shadow-dom-retarget-events";
import { StyleSheetManager } from "styled-components";
import App from "./App";

class WebComponent extends HTMLElement {
  mountPoint: HTMLElement;
  styleContainer: HTMLElement;

  static get observedAttributes(): string[] {
    return ["title"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    // We must dedicate a place to render the styled-components styles
    this.styleContainer = document.createElement("div");
    this.shadowRoot.appendChild(this.styleContainer);

    // Attach our component using shadow DOM
    this.mountPoint = document.createElement("span");
    this.shadowRoot.appendChild(this.mountPoint);
  }

  render = (): void => {
    ReactDOM.render(
      <StyleSheetManager target={this.styleContainer}>
        <App title={this.title} />
      </StyleSheetManager>,
      this.mountPoint
    );

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
