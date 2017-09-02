import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .example-enter {
    transform: translate(100%);
  }
  .example-enter.example-enter-active {
    transform: translate(0%);
    transition: transform 1000ms ease-in-out;
  }
  .example-leave {
    transform: translate(0%);
  }
  .example-leave.example-leave-active {
    transform: translate(-100%);
    transition: transform 1000ms ease-in-out;
  }
`;
