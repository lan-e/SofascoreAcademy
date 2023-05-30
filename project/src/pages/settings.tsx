import React from "react";
import Head from "next/head";
import { Main, Container } from "@/components/sharedstyles";

const settings = () => {
  return (
    <>
      <Head>
        <title>Mini Sofascore | Settings</title>
      </Head>
      <Main>
        <Container>
          <h1>Settings</h1>
        </Container>
      </Main>
    </>
  );
};

export default settings;
