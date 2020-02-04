import React, { MouseEvent } from "react";

interface HelloReactProps {
  title: string;
  value: number;
}

interface HelloReactState {
  internalCounter: number;
}

export default class HelloReact extends React.Component<
  HelloReactProps,
  HelloReactState
> {
  constructor(props: HelloReactProps) {
    super(props);
    this.state = { internalCounter: 0 };
  }

  dispatchIncrementEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    const event = new CustomEvent("increment", { bubbles: true });
    const elem = e.target;
    if (elem === null) {
      return;
    }
    elem.dispatchEvent(event);
  };

  increaseNumber = (): void => {
    this.setState({ internalCounter: this.state.internalCounter + 1 });
  };

  render() {
    return (
      <div
        style={{ margin: "12px", padding: "12px", border: "1px solid #2ee89f" }}
      >
        <h3>Title: {this.props.title}</h3>
        <h4>Counter: {this.state.internalCounter}</h4>
        <button onClick={this.dispatchIncrementEvent}>
          Increment the number on the micro one
        </button>

        <button onClick={this.increaseNumber}>Increment the number</button>
      </div>
    );
  }
}
