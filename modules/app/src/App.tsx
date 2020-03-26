import React, { FunctionComponent, useState, useEffect } from "react";
import "@poc/react-micro-one";
import "@poc/react-micro-two";

export const App: FunctionComponent<{}> = () => {
  const [counter, setCounter] = useState(0);

  // handle INCREMENT event
  useEffect(() => {
    const incrementCounter = () => setCounter(counter + 1);
    window.addEventListener("INCREMENT", incrementCounter);
    return () => window.removeEventListener("INCREMENT", incrementCounter);
  }, [counter]);

  return (
    <>
      <react-micro-one title="Micro Frontend 1" counter={counter} />
      <react-micro-two title="Micro Frontend 2" counter={counter} />
    </>
  );
};
