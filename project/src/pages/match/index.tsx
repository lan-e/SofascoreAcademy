import React from "react";
import Head from "next/head";
import { Container, Main } from "@/components/sharedstyles";

const match = () => {
  return (
    <>
      <Head>
        <title>Mini Sofascore | Match</title>
      </Head>
      <Main>
        <Container>
          <h1>Match</h1>
        </Container>
      </Main>
    </>
  );
};

export default match;
