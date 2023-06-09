import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Leagues from "@/components/Leagues/Leagues";
import {
  Container,
  FlexHor,
  FlexVer,
  FlexVerLeft,
  Main,
  PlayerImg,
  TopContainer,
} from "@/components/sharedstyles";
import PlayerMatches from "@/components/Player/PlayerMatches";
import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";
import { MatchesCont } from "@/components/Leagues/styles";
import Event from "@/components/EventWindow/Event";

const TeamPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const id = 1;
  const {
    data: team,
    error,
    isLoading,
  } = useSWR(`https://academy.dev.sofascore.com/team/${id}`);

  if (!team) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Mini Sofascore | {t.team}</title>
      </Head>
      <Main>
        <Leagues />
        <FlexVer>
          <TopContainer>
            <div>
              <FlexVerLeft>
                <FlexHor>
                  <PlayerImg
                    src={`https://academy.dev.sofascore.com/team/${id}/image`}
                    alt="leagueico"
                  />
                  <FlexVerLeft>
                    <h1>{team.name}</h1>
                    <div>{team.country.name}</div>
                  </FlexVerLeft>
                </FlexHor>
              </FlexVerLeft>
            </div>
          </TopContainer>
          <MatchesCont>
            <Container>
              <PlayerMatches id={id} />
            </Container>
            <Event />
          </MatchesCont>
        </FlexVer>
      </Main>
    </>
  );
};

export default TeamPage;
