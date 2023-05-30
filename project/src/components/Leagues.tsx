import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Leagues: any = ({ tournament }) => {
  return (
    <LeagueContainer>
      <h2>Leagues</h2>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <LeagueCell>
        <LeagueCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        LaLiga
      </LeagueCell>
      <Link href="/tournament">
        <LoadMoreBtn>View More</LoadMoreBtn>
      </Link>
    </LeagueContainer>
  );
};
export default Leagues;
const LeagueContainer = styled.div`
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

const LeagueCell = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
`;

const LeagueCellImg = styled(Image)`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;
const LoadMoreBtn = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 24px;
  color: #374df5;
`;
