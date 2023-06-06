import styled from "styled-components";
import Image from "next/image";

export const HeaderStlyed = styled.div`
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
export const SettingsIco = styled(Image)`
  position: absolute;
  right: 24px;
  width: 24px;
  height: 24px;
  filter: invert(97%) sepia(44%) saturate(0%) hue-rotate(277deg)
    brightness(106%) contrast(100%);
`;
export const MobileMatchIco = styled(Image)`
  position: absolute;
  right: 48px;
  width: 24px;
  height: 24px;
  filter: invert(97%) sepia(44%) saturate(0%) hue-rotate(277deg)
    brightness(106%) contrast(100%);
  margin-right: 24px;
  @media (min-width: 991px) {
    display: none;
  }
`;
