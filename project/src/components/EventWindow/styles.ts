import styled from "styled-components";

export const MatchContainer = styled.div`
  margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: ${({ theme }) => theme.colors.surface1};
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.08);
  @media (max-width: 991px) {
    display: none;
  }
`;
export const MatchCell = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
`;
