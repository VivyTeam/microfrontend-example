# poc-portal

A proof of concept for the Web Portal. Web applications are being wrapped in custom elements and served from a thin integration layer.

## To run a micro frontend app individually

1. To install the directory which is at the same level as `lerna.json` run `yarn`

2. Navigate to the modules `cd modules` and from there to the app you would like to start. While you are at the same level as `packahe.json` run `yarn dev`

3. The app runs on your browser at `http://localhost:8080/`

# Rules of the Micro Frontends

- Each MFE exposes itself as a Web Component (Custom Element + Shadow DOM)
- Communication happens with DOM events
  - These events must have `compose` set to true, in order to continue through the Custom Element boundary and be handled by the top level application

# Caveats

- React has issues with handling DOM events unless the react component is rendered as the direct shadow root child: https://github.com/facebook/react/issues/15759 https://github.com/facebook/react/issues/9242 https://github.com/spring-media/react-shadow-dom-retarget-events#readme
- Styled-components does not have great support for being used inside an iframe or a web component. We must use the style manager and target a top level div in the shadow dom. See https://github.com/styled-components/styled-components/issues/659#issuecomment-404759045
