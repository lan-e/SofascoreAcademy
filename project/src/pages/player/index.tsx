import React from "react";
import Head from "next/head";
import Link from "next/link";
import Leagues from "@/components/Leagues";
import { Container, Main } from "@/components/sharedstyles";

export const getStaticProps = async () => {
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/users`)
  ) //test
    .json();
  return {
    props: { player: data },
  };
};

const PlayerPage = ({ player }) => {
  return (
    <>
      <Head>
        <title>Mini Sofascore | Players Test</title>
      </Head>
      <Main>
        <Leagues />
        <Container>
          <h1>Players</h1>
          {player.map((player: any) => (
            <Link href={`/player/${player.id}`} key={player.id}>
              {player.name}
            </Link>
          ))}
          {/* <PlayerContainer>{player.data}</PlayerContainer> */}
        </Container>
      </Main>
    </>
  );
};

export default PlayerPage;
