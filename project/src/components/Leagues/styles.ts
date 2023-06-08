import styled from "styled-components";
import { FlexHor } from "../sharedstyles";

export const LeagueContainer = styled.div`
  margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: ${({ theme }) => theme.colors.surface1};
  border-radius: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 991px) {
    display: none;
  }
`;
export const LoadMoreBtn = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;
export const FlexHorNew = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
`;
export const MatchesCont = styled(FlexHor)`
  margin-top: 16px;
  width: 71vw;
  @media (max-width: 991px) {
    margin: 0;
  }
`;
export const ChangePageBtn = styled.button`
  border:0;
  border-radius: 2px;
  outline:2px solid ${({ theme }) => theme.colors.primary};;
  background-color: transparent;
  padding: 8px 16px;
  cursor:pointer;
`