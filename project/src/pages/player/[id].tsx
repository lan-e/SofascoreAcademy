import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Container,
  FlexVer,
  Main,
  TopContainer,
} from "@/components/sharedstyles";
import Event from "@/components/EventWindow/Event";
import Leagues from "@/components/Leagues/Leagues";
import { MatchesCont } from "@/components/Leagues/styles";
import LeaguesMatches from "@/components/Leagues/LeaguesMatches";

export const getStaticPaths = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await response.json();

  const paths = data.map((players) => {
    return {
      params: { id: players.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  return {
    props: { player: data },
  };
};
const Details = ({ player }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Mini Sofascore | Player</title>
      </Head>
      <Main>
        <Leagues />
        {/* <FlexVer> */}
        <TopContainer>
          <FlexVer>
            <h1>Player: {id}</h1>
            <p>{player.name}</p>
            <p>{player.email}</p>
            <p>{player.website}</p>
            <p>{player.address.city}</p>
          </FlexVer>
        </TopContainer>
        {/* <MatchesCont>
            <Container>
              <LeaguesMatches id={id} />
            </Container>
            <Event />
          </MatchesCont> */}
        {/* </FlexVer> */}
      </Main>
    </>
  );
};

export default Details;
