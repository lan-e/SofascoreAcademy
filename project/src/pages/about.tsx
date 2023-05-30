import React from "react";
import Head from "next/head";
import { Container, Main } from "../components/sharedstyles";

export default function About() {
  return (
    <>
      <Head>
        <title>Mini Sofascore | About</title>
      </Head>
      <Main>
        <Container>
          <h1>About</h1>
          {/*<Title>
          <Link href="https://corporate.sofascore.com/hr/" target="_blank">
            About Page
          </Link>
        </Title>
        <Description>
          <Link href="/">&larr; Go Back</Link>
        </Description>*/}
        </Container>
      </Main>
    </>
  );
}
