import React from "react";
import { render } from "react-dom";
import { App } from "./App";

window.customElements.define(
  "react-app-old",
  class ReactApp extends HTMLElement {
    static get observedAttributes() {
      return ["title", "value"];
    }

    value = 0;

    constructor() {
      super();

      console.log("ReactApp constructor", this);
    }

    connectedCallback() {
      this.render();
    }

    render() {
      render(<App title={this.title} value={this.value} />, this);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case "value": {
          const newValueInt = parseInt(newVal, 10);
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
  }
);
