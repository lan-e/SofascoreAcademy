import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Leagues from "@/components/Leagues/Leagues";
import {
  BlackTitle,
  Container,
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
import { MatchesCont } from "@/components/Leagues/styles";
import Event from "@/components/EventWindow/Event";
import { GreyTitle } from "@/components/settingsStyles";
import PlayerMatches from "@/components/Player/PlayerMatches";

import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";

const PlayerPage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;
  const id = 27;
  const {
    data: player,
    error,
    isLoading,
  } = useSWR(`https://academy.dev.sofascore.com/player/${id}`);

  if (!player) {
    return null;
  }

  const currentDate = player.dateOfBirth;
  const formattedDate = currentDate.slice(0, 10);
  const currentYear = new Date().getFullYear();
  const age = currentYear - formattedDate.slice(0, 4);
  return (
    <>
      <Head>
        <title>Mini Sofascore | {t.player}</title>
      </Head>
      <Main>
        <Leagues />
        <FlexVer>
          <TopContainer>
            <div>
              <FlexVerLeft>
                <FlexHor>
                  <PlayerImg
                    src={`https://academy.dev.sofascore.com/player/${id}/image`}
                    alt="leagueico"
                  />
                  <h1>{player.name}</h1>
                </FlexHor>
                <FlexHor style={{ height: "56px" }}>
                  <BlackTitle>
                    <FlexHor>
                      <TeamImg
                        src={`https://academy.dev.sofascore.com/team/${player.team.id}/image`}
                        alt="leagueico"
                      />
                      <div>{player.team.name}</div>
                    </FlexHor>
                  </BlackTitle>
                </FlexHor>
              </FlexVerLeft>
              <FlexSpace>
                <StyledStats>
                  <GreyTitle>Country</GreyTitle>
                  <BlackTitle>{player.country.name}</BlackTitle>
                </StyledStats>
                <StyledStats>
                  <GreyTitle>Position</GreyTitle>
                  <BlackTitle>{player.position}</BlackTitle>
                </StyledStats>
                <StyledStats>
                  <GreyTitle>{formattedDate}</GreyTitle>
                  <BlackTitle>{age} Yrs</BlackTitle>
                </StyledStats>
              </FlexSpace>
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

export default PlayerPage;
