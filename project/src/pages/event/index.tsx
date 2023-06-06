import React from "react";
import Head from "next/head";
import { Container, Main } from "@/components/sharedstyles";
import Leagues from "@/components/Leagues/Leagues";

const match = () => {
  return (
    <>
      <Head>
        <title>Mini Sofascore | Match</title>
      </Head>
      <Main>
        <Leagues />
        <Container>
          <h1>Event</h1>
        </Container>
      </Main>
    </>
  );
};

export default match;
