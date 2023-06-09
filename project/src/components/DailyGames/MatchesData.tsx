import React, { useContext } from "react";
import { FlexHorLeft, FlexHor, FlexVer, TeamLogo } from "../sharedstyles";
import {
  DailyGameCell,
  Vl,
  Time,
  DailyGameEach,
  FlexBtwNew,
  Teams,
  DailyGameText,
} from "./styles";
import { VisibleContext } from "../../utils/VisibleContext";

const MatchesData = ({ matches }) => {
  const { setVisible } = useContext(VisibleContext);

  const handleClick = () => {
    setVisible(true);
  };
  return (
    <div>
      {matches.map((match) => (
        <DailyGameCell key={match.id} onClick={handleClick}>
          <FlexHor key={match.id}>
            <DailyGameEach>
              <DailyGameText>
                <Time>{match.startDate.split("T")[1].slice(0, 5)}</Time>
                <Vl></Vl>
                <FlexBtwNew>
                  <Teams>
                    <FlexHorLeft>
                      <TeamLogo
                        src={`https://academy.dev.sofascore.com/team/${match.homeTeam.id}/image`}
                        alt="leagueico"
                      />
                      <div>{match.homeTeam.name}</div>
                    </FlexHorLeft>
                    <FlexHorLeft>
                      <TeamLogo
                        src={`https://academy.dev.sofascore.com/team/${match.awayTeam.id}/image`}
                        alt="leagueico"
                      />
                      <div>{match.awayTeam.name}</div>
                    </FlexHorLeft>
                  </Teams>
                  <FlexVer>
                    <div>{match.homeScore.total}</div>
                    <div>{match.awayScore.total}</div>
                  </FlexVer>
                </FlexBtwNew>
              </DailyGameText>
            </DailyGameEach>
          </FlexHor>
        </DailyGameCell>
      ))}
    </div>
  );
};

export default MatchesData;
