import React from "react";
import Head from "next/head";
import Leagues from "@/components/Leagues/Leagues";
import { Main } from "@/components/sharedstyles";

export default function TournamentPage() {
  return (
    <>
      <Head>
        <title>Mini Sofascore | Tournament</title>
        <meta name="description" content="Mini Sofascore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Leagues />
      </Main>
    </>
  );
}
