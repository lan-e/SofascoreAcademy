import React from "react";
import Head from "next/head";

/*COMPONENTS*/
import Leagues from "@/components/Leagues/Leagues";
import DailyGames from "@/components/DailyGames/DailyGames";
import Event from "@/components/EventWindow/Event";
import DateNav from "@/components/DailyGames/DateNav";

/*STYLES*/
import { Main, FlexVer } from "../components/sharedstyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Sofascore</title>
      </Head>
      <Main>
        <Leagues />
        <FlexVer>
          <DateNav />
          <DailyGames />
        </FlexVer>
        <Event />
      </Main>
    </>
  );
}
