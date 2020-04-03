# microfrontend-example

A proof of concept and template for a micro frontend setup with Typescript, React and Web Components.

## How to run

### Watch and serve entire application

From the top level directory:

- Run `yarn`
- Run `lerna boostrap`
- Run `yarn serve`

### Watch and serve individual application

- Navigate to a application folder (ie. `/modules/*`)
- Run `yarn serve`

This will run and serve only the chosen application

# Rules of the Micro Frontends

- Each MFE exposes itself as a Web Component (Custom Element + Shadow DOM)
- Communication happens with DOM events
  - These events must have `compose` set to true, in order to continue through the Custom Element boundary and be handled by the top level application

# Caveats

- We use react-shadow to render the react components into the shadow dom because of these complications:
  - React has issues with handling DOM events unless the react component is rendered as the direct shadow root child: https://github.com/facebook/react/issues/15759 https://github.com/facebook/react/issues/9242 https://github.com/spring-media/react-shadow-dom-retarget-events#readme
  - Styled-components does not have great support for being used inside an iframe or a web component. We must use the style manager and target a top level div in the shadow dom. See https://github.com/styled-components/styled-components/issues/659#issuecomment-404759045
