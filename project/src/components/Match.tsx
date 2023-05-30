import React from "react";
import Image from "next/image";
import { StyledLink } from "./sharedstyles";
import styled from "styled-components";

const Match = () => {
  return (
    <>
      <MatchContainer>
        <FlexHor>
          <MatchCellIco
            src="img/ic_close.svg"
            width="100"
            height="100"
            alt="closeico"
          />
          <Wrapper>
            <FlexHor>
              <StyledLink href="/match">View Full Page</StyledLink>
              <MatchCellIco
                src="img/ic_chevron_right.svg"
                width="100"
                height="100"
                alt="viewpage"
              />
            </FlexHor>
          </Wrapper>
        </FlexHor>
        <MatchCell>
          <MatchCellImg
            src="img/icon_football.svg"
            width="100"
            height="100"
            alt="footballico"
          />
          Spain
        </MatchCell>
      </MatchContainer>
    </>
  );
};

export default Match;

const MatchContainer = styled.div`
  margin: 0 12px;
  min-height: 670px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
  @media (max-width: 991px) {
    display: none;
  }
`;
const MatchCell = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
`;
const MatchCellIco = styled(Image)`
  width: 24px;
  height: 24px;
`;
const MatchCellImg = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
const FlexHor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;
const Wrapper = styled.div`
  filter: invert(28%) sepia(83%) saturate(7497%) hue-rotate(238deg)
    brightness(107%) contrast(92%);
`;
