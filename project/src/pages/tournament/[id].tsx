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

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: tournament,
    error,
    isLoading,
  } = useSWR(`https://academy.dev.sofascore.com/tournament/${id}`);

  if (!tournament) {
    return (
      <Main>
        <Loader>
          <IcoBlue
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 36c8.837 0 16-7.163 16-16S28.837 4 20 4 4 11.163 4 20s7.163 16 16 16zm0-6c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.64 6.358A16 16 0 0 1 20 4v6c-5.523 0-10 4.477-10 10 0 2.197.708 4.228 1.91 5.878l-4.854 3.527A16 16 0 0 1 11.64 6.358z"
              fill="#F0EEDF"
            />
          </IcoBlue>
        </Loader>
      </Main>
    );
  }

  return (
    <>
      <Head>
        <title>Mini Sofascore | Tournament</title>
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
