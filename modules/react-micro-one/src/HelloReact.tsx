import React, { FC } from "react";

interface HelloReactProps {
  title: string;
  value: number;
}
const HelloReact: FC<HelloReactProps> = props => (
  <div style={{ margin: "12px", padding: "12px", border: "1px solid #61dbfb" }}>
    <h3>Title: {props.title}</h3>
    <h4>Counter: {props.value}</h4>
  </div>
);

export default HelloReact;
