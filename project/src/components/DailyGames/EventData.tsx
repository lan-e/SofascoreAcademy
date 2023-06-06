import React, { useContext } from "react";
import { FlexHor, FlexVer } from "../sharedstyles";
import {
  DailyGameCell,
  DailyGamesHeader,
  Vl,
  Time,
  DailyGameEach,
  FlexBtwNew,
  Teams,
  DailyGameText,
} from "./styles";
import Image from "next/image";
import { VisibleContext } from "../../utils/VisibleContext";
import Link from "next/link";

export function DailyEvents({ count }) {
  return (
    <DailyGamesHeader style={{ padding: "0 16px" }}>
      Today
      <div>{count} Events</div>
    </DailyGamesHeader>
  );
}

export function EventData({ matches }) {
  const { setVisible } = useContext(VisibleContext);

  const handleClick = () => {
    setVisible(true);
  };

  const leagues = [];
  matches.forEach((match) => {
    const leagueId = match.tournament.id;
    const existingLeague = leagues.find((league) => league.id === leagueId);
    if (!existingLeague) {
      leagues.push({
        id: leagueId,
        name: match.tournament.name,
        country: match.tournament.country.name,
      });
    }
  });

  return (
    <div>
      {leagues.map((league) => (
        <DailyGameCell key={league.id} onClick={handleClick}>
          <DailyGameText>
            <Link href={`/tournament/${league.id}`}>
              <FlexHor>
                <img
                  src={`https://academy.dev.sofascore.com/tournament/${league.id}/image`}
                  width="50"
                  height="50"
                  alt="leagueico"
                />
                {league.country.name}
                <Image
                  src="img/ic_pointer_right.svg"
                  width="20"
                  height="20"
                  alt="pointright"
                />
                {league.name}
              </FlexHor>
            </Link>
          </DailyGameText>
          {/* <MatchDetails id={6756} /> */}
          {matches
            .filter((match) => match.tournament.id === league.id)
            .map((match) => (
              <FlexHor key={match.id}>
                <DailyGameEach>
                  <DailyGameText>
                    <Time>{match.startDate.split("T")[1].slice(0, 5)}</Time>
                    <Vl></Vl>
                    <FlexBtwNew>
                      <Teams>
                        <div>{match.homeTeam.name}</div>
                        <div>{match.awayTeam.name}</div>
                      </Teams>
                      <FlexVer>
                        <div>{match.homeScore.total}</div>
                        <div>{match.awayScore.total}</div>
                      </FlexVer>
                    </FlexBtwNew>
                  </DailyGameText>
                </DailyGameEach>
              </FlexHor>
            ))}
        </DailyGameCell>
      ))}
    </div>
  );
}
