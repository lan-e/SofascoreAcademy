import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: #121212;
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
    font-family: Roboto;
    background-color: #eff3f8;
    user-select: none;
    @media (max-width: 991px) {
    overflow-x: hidden;
  }
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .active{
    border-bottom: 4px solid #fff;
    /* @media (max-width:991px){
      border:0;
    } */
  }
`;

export default GlobalStyle;
