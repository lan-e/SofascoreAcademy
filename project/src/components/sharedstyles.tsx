import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    margin-top: 48px;
    width: 80vw;
    min-height: 820px;
  }
`;
/* margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    margin-top: 48px;
  } */

const Main = styled.main`
  min-height: 820px;
  padding-top: 160px;
  /* padding: 5rem 0; */
  /* padding-bottom: 48px; if footer is not fixed */
  margin: 0 12px;
  padding-bottom: 148px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 991px) {
    padding-top: 96px;
  }
`;
const Logo = styled(Image)`
  width: 132px;
  height: 20px;
`;
const StyledLink = styled(Link)`
  color: #374df5;
  font-weight: 600;
`;

const FlexHor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FlexVer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export { Logo, Container, Main, FlexHor, FlexVer, StyledLink };
