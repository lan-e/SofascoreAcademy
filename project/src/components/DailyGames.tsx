import React from "react";
import Image from "next/image";
import { StyledLink } from "./sharedstyles";
import styled from "styled-components";

const DailyEvents: any = () => {
  return (
    <DailyGamesHeader>
      Today
      <div>8 Events</div>
    </DailyGamesHeader>
  );
};

const DailyGames: any = ({ sports }) => {
  return (
    <>
      <Mobile>
        <DailyEvents />
      </Mobile>

      <DailyGamesContainer>
        <Desktop>
          <DailyEvents />
        </Desktop>

        <DailyGameCell>
          <DailyGameCellImg
            src="img/icon_football.svg"
            width="100"
            height="100"
            alt="footballico"
          />
          <StyledLink href="/player">Players</StyledLink>
        </DailyGameCell>
      </DailyGamesContainer>
    </>
  );
};

export default DailyGames;

const DailyGamesContainer = styled.div`
  min-height: 622px;
  height: max-content;
  width: 35vw;
  background-color: #fff;
  border-radius: 0 0 16px 16px;
  padding: 16px;
  margin: 0 12px;
  @media (max-width: 991px) {
    width: 80vw;
    border-radius: 16px;
  }
`;

const DailyGameCell = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
`;

const DailyGameCellImg = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
const Desktop = styled.div`
  width: 100%;
  @media (max-width: 991px) {
    display: none;
  }
`;
const Mobile = styled.div`
  margin-bottom: 8px;
  width: 80vw;
  padding: 0 16px;
  @media (min-width: 991px) {
    display: none;
  }
`;
const DailyGamesHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`;
