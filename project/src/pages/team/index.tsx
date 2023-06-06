import React from "react";
import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import Leagues from "@/components/Leagues/Leagues";
import { Container, Main } from "@/components/sharedstyles";

const TeamPage = () => {
  const { data, error, isLoading } = useSWR(
    `https://jsonplaceholder.typicode.com/users`
  );

  if (!data) {
    return null;
  }
  return (
    <>
      <Head>
        <title>Mini Sofascore | Team</title>
      </Head>
      <Main>
        <Leagues />
        <Container>
          <h1>Team</h1>
          {data &&
            data.map((team: any) => (
              <Link href={`/team/${team.id}`} key={team.id}>
                {team.name}
              </Link>
            ))}
          {/* <PlayerContainer>{player.data}</PlayerContainer> */}
        </Container>
      </Main>
    </>
  );
};

export default TeamPage;
