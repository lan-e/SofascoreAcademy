import React, { useContext } from "react";
import { FlexHor, IcoBW } from "../sharedstyles";
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
                <IcoBW
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#ljqjr1j9oa)">
                    <path d="m10 17 5-5-5-5v10z" fill-opacity=".4" />
                  </g>
                  <defs>
                    <clipPath id="ljqjr1j9oa">
                      <path
                        fill="#fff"
                        transform="rotate(-90 12 12)"
                        d="M0 0h24v24H0z"
                      />
                    </clipPath>
                  </defs>
                </IcoBW>
                {league.name}
              </FlexHor>
            </Link>
          </DailyGameText>
          <MatchesData matches={matches} />
        </DailyGameCell>
      ))}
    </div>
  );
}
