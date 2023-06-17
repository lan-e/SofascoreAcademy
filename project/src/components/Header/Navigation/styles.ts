import Image from "next/image";
import styled,{ css }  from "styled-components";
import Link from "next/link";

export const NavStlyed = styled.div`
  z-index:1;
  position: fixed;
  top: 64px;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 991px) {
    top: 48px;
  }
`;
export const StyledImg = styled(Image)`
  filter: invert(97%) sepia(44%) saturate(0%) hue-rotate(277deg)
    brightness(106%) contrast(100%);
  width: 16px;
  height: 16px;
  margin-right: 4px;
  margin-bottom: 4px;
`;
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 14px;
  padding: 14px 0;
  width: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 991px) {
    padding: 8px 0;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 767px) {
    width: 100px;
  }
`;