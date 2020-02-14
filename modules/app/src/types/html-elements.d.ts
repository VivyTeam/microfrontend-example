declare namespace JSX {
  interface HelloReactAttributes
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    title: string;
    value: number;
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
  }

  interface IntrinsicElements {
    "react-micro-two": HelloReactTwoAttributes;
  }
  interface HelloVueAttributes {
    title: string;
  }

  interface IntrinsicElements {
    "vue-micro": HelloVueAttributes;
  }

  interface IntrinsicElements {
    "react-app-old";
  }
}
