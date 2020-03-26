declare namespace JSX {
  interface MicroOneAttirbutes
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    title: string;
    counter: number;
  }

  interface IntrinsicElements {
    "react-micro-one": MicroOneAttirbutes;
  }

  interface MicroTwoAttributes
    extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > {
    title: string;
    counter: number;
  }

  interface IntrinsicElements {
    "react-micro-two": MicroTwoAttributes;
  }
}
