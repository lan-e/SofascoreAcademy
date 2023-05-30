import React from "react";
import styled from "styled-components";

const Button = () => {
  return <ButtonStyled>Button</ButtonStyled>;
};

export default Button;

const ButtonStyled = styled.button`
  border: 0;
  padding: 1.5rem;
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 100%;
  margin-bottom: 10px;
  font-size: 1rem;
  cursor: pointer;
  &:hover,
  :focus,
  :active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;
