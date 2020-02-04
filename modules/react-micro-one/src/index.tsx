import React from "react";
import ReactDOM from "react-dom";
import HelloReact from "./HelloReact";

class HelloReactWC extends HTMLElement {
  static get observedAttributes(): string[] {
    return ["value", "title"];
  }

  private value = 0;

  public attributeChangedCallback(
    name: string,
    oldValue: string,
    newValue: string
  ): void {
    switch (name) {
      case "value": {
        const newValueInt = parseInt(newValue, 10);
        if (Number.isNaN(newValueInt)) {
          break;
        }
        this.value = newValueInt;
        this.render();
        break;
      }
      default:
        break;
    }
  }

  render = (): void => {
    ReactDOM.render(<HelloReact value={this.value} title={this.title} />, this);
  };

  connectedCallback(): void {
    this.render();
  }
}
customElements.define("react-micro-one", HelloReactWC);
