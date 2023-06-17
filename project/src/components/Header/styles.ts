import styled from "styled-components";

export const HeaderStlyed = styled.div`
  z-index:1;
  position: fixed;
  padding-top: 14px;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 991px) {
    height: 48px;
    justify-content: start;
    padding-left: 16px;
    padding-top: 12px;
  }
`;
export const SettingsIco = styled.svg`
  position: absolute;
  right: 24px;
  width: 24px;
  height: 24px;
  fill:#fff;
`;
export const MobileMatchIco = styled.svg`
  position: absolute;
  right: 48px;
  width: 24px;
  height: 24px;
  fill: #fff;
  margin-right: 24px;
  @media (min-width: 991px) {
    display: none;
  }
`;
export const IcoWhite = styled.svg`
fill:#fff;
margin-right:4px;
@media (max-width: 991px) {
margin-right:0;
margin-bottom:4px;
  }
`;