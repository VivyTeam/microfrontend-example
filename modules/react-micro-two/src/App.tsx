import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #a8d3da;
`;

type AppProps = {
  title: string;
  counter: number;
};

const App: FunctionComponent<AppProps> = ({ title, counter }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <p>Counter: {counter}</p>
    </Wrapper>
  );
};

export default App;
