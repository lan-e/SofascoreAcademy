import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  FlexVer,
  Main,
  TopContainer,
  Container,
} from "@/components/sharedstyles";
import Leagues from "@/components/Leagues/Leagues";
import Event from "@/components/EventWindow/Event";
import LeaguesMatches from "@/components/Leagues/LeaguesMatches";
import { MatchesCont } from "@/components/Leagues/styles";

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
        <title>Mini Sofascore | Team</title>
      </Head>
      <Main>
        <Leagues />
        {/* <FlexVer> */}
        <TopContainer>
          <FlexVer>
            <h1>Team: {id}</h1>
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
