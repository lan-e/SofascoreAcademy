import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import Leagues from "@/components/Leagues/Leagues";
import { Container, Main } from "@/components/sharedstyles";
// import useFetchData from "@/components/useFetchData";

// export const getStaticProps = async () => {
//   const data = await (
//     await fetch(`https://jsonplaceholder.typicode.com/users`)
//   ) //test
//     .json();
//   return {
//     props: { player: data },
//   };
// };
//const PlayerPage = ({ player }) => {

const PlayerPage = () => {
  // const { data } = useFetchData(`https://jsonplaceholder.typicode.com/users`);
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users`
  );

  if (!data) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Mini Sofascore | Player</title>
      </Head>
      <Main>
        <Leagues />
        <Container>
          <h1>Players</h1>
          {data &&
            data.map((player: any) => (
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
