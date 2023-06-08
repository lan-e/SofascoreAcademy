import React, { useContext } from "react";
import { FlexHor } from "../sharedstyles";
import { DailyGameCell, DailyGamesHeader, DailyGameText } from "./styles";
import Image from "next/image";
import { VisibleContext } from "../../utils/VisibleContext";
import Link from "next/link";
import MatchesData from "./MatchesData";

import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";

export function DailyEvents({ count }) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const addLetterA = locale === "hr" && count !== 1;
  const addLetterS = locale === "en" && count !== 1;
  return (
    <DailyGamesHeader style={{ padding: "0 16px" }}>
      {t.today}
      <div>
        {count}{" "}
        {addLetterA ? t.events + "a" : addLetterS ? t.events + "s" : t.events}
      </div>
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
          <MatchesData matches={matches} />
        </DailyGameCell>
      ))}
    </div>
  );
}
