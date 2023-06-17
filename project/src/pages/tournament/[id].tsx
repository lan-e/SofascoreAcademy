import React from "react";
import useSWR from "swr";
import { useRouter } from "next/router";
import {
  FlexHor,
  FlexVerLeft,
  Main,
  TopContainer,
  Container,
  FlexVer,
  IcoBlue,
  Loader,
} from "@/components/sharedstyles";
import Link from "next/link";
import Leagues from "@/components/Leagues/Leagues";
import LeaguesMatches from "@/components/Leagues/LeaguesMatches";
import Head from "next/head";
import Event from "@/components/EventWindow/Event";
import { MatchesCont } from "@/components/Leagues/styles";
import { ClipLoading } from "@/components/LoadingScreen";

import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";

export default function Details() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const { id } = router.query;
  const {
    data: tournament,
    error,
    isLoading,
  } = useSWR(`https://academy.dev.sofascore.com/tournament/${id}`);

  if (isLoading) {
    return (
      <Main>
        <ClipLoading />
      </Main>
    );
  }

  return (
    <>
      <Head>
        <title>Mini Sofascore | {t.league}</title>
      </Head>
      <Main>
        <Leagues />
        <FlexVer>
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
          <MatchesCont>
            <Container>
              <LeaguesMatches id={id} />
            </Container>
            <Event />
          </MatchesCont>
        </FlexVer>
      </Main>
    </>
  );
}
