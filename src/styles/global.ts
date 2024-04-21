import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: 0;
        font-family: 'Open Sans', sans-serif;
    }
    #root {
        margin: 0 auto;
    }
    body {
        max-width: 100vw;
        padding: 0;
        background-color: #a29d9a
    }
    @media print {
    body * {
      visibility: hidden;
    }
    .printable, .printable * {
      visibility: visible;
    }
    .printable {
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`