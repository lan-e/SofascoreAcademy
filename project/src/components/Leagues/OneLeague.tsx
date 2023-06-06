import React from "react";
import Link from "next/link";
import { FlexHorNew } from "./styles";

const OneLeague = ({ leagues }) => {
  return (
    <>
      {leagues.map((league) => (
        <Link href={`/tournament/${league.id}`} key={league.id}>
          <FlexHorNew>
            <img
              style={{ marginRight: "16px" }}
              src={`https://academy.dev.sofascore.com/tournament/${league.id}/image`}
              width="50"
              height="50"
              alt="leagueico"
            />
            <div style={{ fontWeight: "bold" }}>{league.name}</div>
          </FlexHorNew>
        </Link>
      ))}
    </>
  );
};

export default OneLeague;
