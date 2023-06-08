import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import Leagues from "@/components/Leagues/Leagues";
import {
  BlackTitle,
  Container,
  FlexBtw,
  FlexHor,
  FlexSpace,
  FlexVer,
  FlexVerLeft,
  Main,
  PlayerImg,
  StyledStats,
  TeamImg,
  TopContainer,
} from "@/components/sharedstyles";
import PlayerMatches from "@/components/Player/PlayerMatches";
import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";
import { GreyTitle } from "@/components/settingsStyles";
import { MatchesCont } from "@/components/Leagues/styles";
import Event from "@/components/EventWindow/Event";

const TeamPage = () => {
  const id = 1;
  const {
    data: team,
    error,
    isLoading,
  } = useSWR(`https://academy.dev.sofascore.com/team/${id}`);

  if (!team) {
    return null;
  }

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

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
