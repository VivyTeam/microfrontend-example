import React from "react";
import "@poc/react-micro-one";
import "@poc/react-micro-two";

interface AppState {
  counter: number;
}

export default class App extends React.Component<{}, AppState> {
  private componentRef: React.RefObject<HTMLInputElement>;

  constructor(props: {}) {
    super(props);
    this.state = { counter: 0 };
    this.componentRef = React.createRef();
  }

  componentDidMount() {
    this.addIncrementEventListener();
  }

  addIncrementEventListener = () => {
    const elem = this.componentRef.current;
    if (elem === null) {
      return;
    }
    elem.addEventListener("INCREMENT", this.handleIncrement);
  };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    const { counter } = this.state;
    return (
      <div ref={this.componentRef}>
        <react-micro-one
          title="Welcome to react-micro-one. Written with TypeScript"
          counter={counter}
        />

        <react-micro-two
          title="Welcome to react-micro-two. Written with TypeScript"
          counter={counter}
        />
      </div>
    );
  }
}
