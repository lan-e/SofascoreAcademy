import Link from "next/link";
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
export const FlexHorLeft=styled(FlexHor)`
  justify-content: start;
`
const FlexVer = styled(FlexHor)`
  flex-direction: column;
`;
const FlexBtw=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
`
const FlexVerLeft = styled(FlexVer)`
  align-items: start;
`;
const TopContainer = styled.div`
  display: flex;
  height:max-content;
  align-items: center;
  width: 70vw;
  background-color:${({ theme }) => theme.colors.surface1};
  border-radius: 16px;
  padding: 16px;
  margin: 0 12px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 991px) {
    width: 80vw;
    margin-top: 48px;
    border-radius: 16px;
  }
`;
export const PlayerImg = styled.img`
  border-radius: 4px;
  height: 57px;
  padding: 11.4px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.colors.onsurfacelv3};
  margin-right: 24px;
`
export const TeamImg = styled.img`
  width:40px;
  height:40px;
  margin-right:16px;
`
export const TeamLogo=styled.img`
  width:16px;
  height:16px;
  margin-right:8px;
`
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
export const ChangePageBtn = styled.button`
  height: 40px;
  border:0;
  border-radius: 2px;
  outline:2px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  padding: 8px 16px;
  cursor:pointer;
`
export const StyledStats=styled.div`
  width:30%;
  height:56px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryHighlight};
  @media(max-width: 991px){
    margin: 0 5px;
}
`
export const FlexSpace = styled(FlexHor)`
  width:70vw;
  padding-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media(max-width: 991px){
    width:75vw;
    padding:0;
}
`
export const BlackTitle = styled.div`
  font-size:14px;
  font-weight: bold;
  color:${({ theme }) => theme.colors.onsurfacelv1};
`
export {  FlexVerLeft, Container, LoadingContainer, Main, FlexHor, FlexVer, FlexBtw,StyledLink, TopContainer, IcoBlue, IcoBW };
