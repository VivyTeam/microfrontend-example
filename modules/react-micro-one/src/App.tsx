import React, { FunctionComponent, MouseEvent, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  padding: 24px;
  background-color: #f5cab3;
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
  return (
    <Wrapper>
      <h3>{title}</h3>
      <button onClick={dispatchIncrementEvent}>Send INCREMENT event</button>
    </Wrapper>
  );
};

export default App;
