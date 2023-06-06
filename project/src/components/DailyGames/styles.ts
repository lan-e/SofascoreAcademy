import styled  from "styled-components";
import { FlexBtw } from "../sharedstyles";

export const Mobile = styled.div`
  margin-bottom: 8px;
  width: 80vw;
  padding: 0 16px;
  @media (min-width: 991px) {
    display: none;
  }
`
export const DailyGamesContainer = styled.div`
  min-height: 622px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
  margin: 0 12px;
  padding-bottom:16px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 991px) {
    width: 80vw;
    border-radius: 16px;
  }
`
export const Desktop = styled.div`
width: 100%;
@media (max-width: 991px) {
  display: none;
}
`

//EVENTDATA
export const DailyGamesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`
export const DailyGameCell = styled.div`
  /* height: 56px; */
  padding-left: 0;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;

`
export const DailyGameEach = styled.div`
  width:35vw;
  &:hover{
    background-color: #e1edfe;
    cursor:pointer;
  }
  @media(max-width:991px){
    width:80vw;
  }
`
export const DailyGameText=styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`
export const Teams = styled.div`
 height: 56px;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center; 
`
export const Time = styled.div`
padding-right: 16px;`
export const Vl = styled.div`
  border-left: 1px solid rgba(18, 18, 18, 0.1);
  height: 40px;
  padding-right: 15px;
`
export const FlexBtwNew = styled(FlexBtw)`
justify-content:space-between;
width: 100%;
`
//DATENAV
export const DateContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 35vw;
  height: 48px;
  padding: 16px;
  padding-right: 16px;
  border-radius: 16px 16px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 991px) {
    width: 100vw;
    border-radius: 0;
  }
`
export const StyledDate = styled.div`
  color: #fff;
  text-transform: uppercase;
  font-size: 12px; 
  padding: 15px;
  border-bottom:4px solid ${({ theme }) => theme.colors.secondary};
  &:hover {
    cursor: pointer;
  }
`

