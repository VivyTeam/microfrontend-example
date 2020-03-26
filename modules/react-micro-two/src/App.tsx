import React, { FunctionComponent, MouseEvent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #c1cd97;
`;

type AppProps = {
  title: string;
  counter: number;
};

const App: FunctionComponent<AppProps> = ({ title, counter }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <h4>version: React 16.12.0</h4>
      <p>Counter: {counter}</p>
    </Wrapper>
  );
};

export default App;
