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
  }
  input[type="radio"] {
  width: 24px;
  height: 24px;
  accent-color: ${({ theme }) => theme.colors.primary};
  }  
  select{
    width: 25vw;
    border: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    color:  ${({ theme }) => theme.colors.color};
    }
  //SLIDER STYLING
  .switch {
    position: relative;
    display: inline-block;
    width: 46px;
    height: 28px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#fff;
    outline:2px solid #999;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width:18px;
    left: 7px;
    bottom: 5px;
    background-color:  ${({ theme }) => theme.colors.primary};
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: ${({ theme })=>theme.colors.primaryHighlight};
  }
  input:focus + .slider {
    box-shadow: 1px 1px 4px ${({ theme })=>theme.colors.onsurfacelv3};
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(14px);
    -ms-transform: translateX(14px);
    transform: translateX(14px);
  }
  .slider.round {
    border-radius: 20px;
  }
  .slider.round:before {
    border-radius: 50%;
  } 
`;

export default GlobalStyle;
