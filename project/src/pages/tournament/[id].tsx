import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  FlexHor,
  FlexVerLeft,
  Main,
  TopContainer,
} from "@/components/sharedstyles";
import Link from "next/link";
import Leagues from "@/components/Leagues/Leagues";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: tournament,
    error,
    isLoading,
  } = useSWR(`https://academy.dev.sofascore.com/tournament/${id}`);

  if (!tournament) {
    return null;
  }
  return (
    <Main>
      <Leagues />
      <TopContainer>
        <Link href={`/tournament/${id}`} key={tournament.id}>
          <FlexHor>
            <img
              src={`https://academy.dev.sofascore.com/tournament/${id}/image`}
              alt="leagueico"
            />
            <FlexVerLeft>
              <h1>{tournament.name}</h1>
              <div>{tournament.country.name}</div>
            </FlexVerLeft>
          </FlexHor>
        </Link>
      </TopContainer>
    </Main>
  );
}
