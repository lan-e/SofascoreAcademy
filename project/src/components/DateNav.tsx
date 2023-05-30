import React from "react";
import styled from "styled-components";

const DateNav = () => {
  return (
    <DateContainer>
      <Date>Yesterday</Date>
      <Date>Today</Date>
      <Date>Tomorrow</Date>
    </DateContainer>
  );
};

export default DateNav;
const DateContainer = styled.div`
  background-color: #1327ba;
  width: 35vw;
  height: 48px;
  padding: 16px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 991px) {
    width: 100vw;
    border-radius: 0;
  }
`;
const Date = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
