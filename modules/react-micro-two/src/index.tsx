import React from "react";
import ReactDOM from "react-dom";
import HelloReact from "./HelloReact";

class HelloReactWC extends HTMLElement {
  static get observedAttributes(): string[] {
    return ["title"];
  }

  render = (): void => {
    ReactDOM.render(<HelloReact value={0} title={this.title} />, this);
  };

  connectedCallback(): void {
    this.render();
  }
}
customElements.define("react-micro-two", HelloReactWC);
