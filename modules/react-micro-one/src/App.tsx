import React, { FunctionComponent, MouseEvent, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #c1cd97;
`;

type AppProps = {
  title: string;
};

const dispatchIncrementEvent = (e: MouseEvent<HTMLButtonElement>): void => {
  const event = new CustomEvent("INCREMENT", { bubbles: true });
  const elem = e.target;
  elem.dispatchEvent(event);
};

const App: FunctionComponent<AppProps> = ({ title }) => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <h3>{title}</h3>
      <h4>version: React 16.12.0</h4>
      <p>Counter: {count}</p>
      <button onClick={dispatchIncrementEvent}>
        Increment the number on <b>micro old</b>
      </button>

      <button onClick={() => setCount(count + 1)}>
        Increment local number
      </button>
    </Wrapper>
  );
};

export default App;
