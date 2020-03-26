declare namespace JSX {
  interface HelloReactAttributes
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    title: string;
    counter: number;
  }

  interface IntrinsicElements {
    "react-micro-one": HelloReactAttributes;
  }

  interface HelloReactTwoAttributes
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    title: string;
    counter: number;
  }

  interface IntrinsicElements {
    "react-micro-two": HelloReactTwoAttributes;
  }
}
