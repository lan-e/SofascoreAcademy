import React from "react";
import Head from "next/head";

/*COMPONENTS*/
import Leagues from "@/components/Leagues";
import DailyGames from "@/components/DailyGames";
import Match from "@/components/Match";
import DateNav from "@/components/DateNav";

/*STYLES*/
import { Main, FlexVer } from "../components/sharedstyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Sofascore | Home</title>
      </Head>
      <Main>
        <Leagues />
        <FlexVer>
          <DateNav />
          <DailyGames />
        </FlexVer>
        <Match />
      </Main>
    </>
  );
}
