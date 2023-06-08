import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

const Container = styled.div`
  margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color:${({ theme }) => theme.colors.surface1};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 991px) {
    margin-top: 48px;
    width: 80vw;
    min-height: 500px;
  }
`;
const Main = styled.main`
  min-height: 820px;
  padding-top: 160px;
  padding-bottom: 148px;
  margin: 0 12px;
  display: flex;
  @media (max-width: 991px) {
    padding-top: 96px;
    justify-content: center;
  }
`;
const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;
const FlexHor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FlexVer = styled(FlexHor)`
  flex-direction: column;
`;
const FlexBtw=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`
const FlexVerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: start;
`;
const TopContainer = styled.div`
  display: flex;
  align-items: center;
  height: 160px;
  width: 70vw;
  background-color:${({ theme }) => theme.colors.surface1};
  border-radius: 16px;
  padding: 16px;
  margin: 0 12px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 991px) {
    width: 80vw;
    margin-top: 48px;
    /* margin-top: 0; */
    border-radius: 16px;
  }
  img {
    border-radius: 4px;
    height: 57px;
    padding: 11.4px;
    height: 80px;
    border: 1px solid ${({ theme }) => theme.colors.onsurfacelv3};
    margin-right: 24px;
  }
`;
const Logo = styled(Image)`
  width: 132px;
  height: 20px;
`;
const LogoWhite = styled(Logo)`
filter: invert(100%) sepia(29%) saturate(2%) hue-rotate(74deg)
  brightness(112%) contrast(100%);
`;
const IcoBlue = styled.svg`
fill:${({ theme }) => theme.colors.primary};
`;
const IcoBW = styled.svg`
fill:${({ theme }) => theme.colors.onsurfacelv1};
`
const LoadingContainer = styled(Container)`
  border-radius: 0;
  @media (max-width: 991px) {
    border-radius: 16px;
  }
`;
export const Loader = styled.div`
display: flex;
justify-content: center;
align-items: center;
width:100vw;
`
export { IcoBlue, LogoWhite, IcoBW, FlexVerLeft, Container, LoadingContainer, Main, FlexHor, FlexVer, FlexBtw,StyledLink, TopContainer };
