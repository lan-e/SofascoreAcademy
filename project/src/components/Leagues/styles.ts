import styled from "styled-components";

export const LeagueContainer = styled.div`
  margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
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