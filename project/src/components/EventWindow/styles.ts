import Image from "next/image";
import styled from "styled-components";

export const MatchContainer = styled.div`
  margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
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
export const MatchCellIco = styled(Image)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const MatchCellImg = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
export const Wrapper = styled.div`
  filter: invert(28%) sepia(83%) saturate(7497%) hue-rotate(238deg)
    brightness(107%) contrast(92%);
`;
