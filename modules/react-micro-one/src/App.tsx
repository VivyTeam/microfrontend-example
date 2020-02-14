import React, { MouseEvent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 12px;
  padding: 12px;
  border: 1px solid #61dbfb;
`;

interface HelloReactProps {
  title: string;
}

interface HelloReactState {
  internalCounter: number;
}

export default class App extends React.Component<
  HelloReactProps,
  HelloReactState
> {
  constructor(props: HelloReactProps) {
    super(props);
    this.state = { internalCounter: 0 };
  }

  dispatchIncrementEvent = (e: MouseEvent<HTMLButtonElement>): void => {
    const event = new CustomEvent("INCREMENT", { bubbles: true });
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
      <Wrapper>
        <h3>{this.props.title}</h3>
        <h4>version: React 16.12.0</h4>
        <p>Counter: {this.state.internalCounter}</p>
        <button onClick={this.dispatchIncrementEvent}>
          Increment the number on <b>micro old</b>
        </button>

        <button onClick={this.increaseNumber}>Increment local number</button>
      </Wrapper>
    );
  }
}
