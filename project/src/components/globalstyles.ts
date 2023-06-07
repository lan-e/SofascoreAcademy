import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    color:  ${({ theme }) => theme.colors.color};
    font-family: Roboto;
    background-color: ${({ theme }) => theme.colors.surface};
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
  input[type="radio"] {
  width: 24px;
  height: 24px;
  }  
  select{
    width: 25vw;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color:  ${({ theme }) => theme.colors.color};
    }
`;

export default GlobalStyle;
